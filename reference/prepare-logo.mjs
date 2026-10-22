// Yüksek çözünürlüklü logodan (reference/mundologo-hq.webp, saydam zemin) site görsellerini üretir.
// Kullanım: node prepare-logo.mjs <webp> <out-dir>  (gerekenler: npm i sharp)
// Çıktı: mundologo.webp (640 px) → src/assets/, favicon.png (64 px) → public/, preview.png (kontrol için)
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const [, , src, outDir] = process.argv;
fs.mkdirSync(outDir, { recursive: true });

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;
const solid = (x, y) => data[(y * W + x) * 4 + 3] > 127;

// Kürenin merkezi: dış sınıra oturan çember. Ortalama ve dönme bu merkeze göre yapılır,
// böylece logo arkadaki daireye ortalı durur ve dönerken yalpalamaz.
let mx = 0, my = 0, n = 0;
for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) if (solid(x, y)) { mx += x; my += y; n++; }
mx /= n; my /= n;
const rim = [];
for (let k = 0; k < 720; k++) {
  const t = (k / 720) * 2 * Math.PI, dx = Math.cos(t), dy = Math.sin(t);
  let last = null;
  for (let r = 0; r < Math.max(W, H); r++) {
    const x = Math.round(mx + dx * r), y = Math.round(my + dy * r);
    if (x < 0 || y < 0 || x >= W || y >= H) break;
    if (solid(x, y)) last = [x, y];
  }
  if (last) rim.push(last);
}
// Çember uydurma (Kåsa); dış sınırda yarıklara düşen içteki noktalar atılıp tekrar uydurulur
function fit(pts) {
  let sx = 0, sy = 0, sxx = 0, syy = 0, sxy = 0, sxz = 0, syz = 0, sz = 0;
  for (const [x, y] of pts) {
    const z = x * x + y * y;
    sx += x; sy += y; sxx += x * x; syy += y * y; sxy += x * y; sxz += x * z; syz += y * z; sz += z;
  }
  const N = pts.length;
  // [sxx sxy sx; sxy syy sy; sx sy N] [a b c] = [sxz syz sz]
  const M = [[sxx, sxy, sx, sxz], [sxy, syy, sy, syz], [sx, sy, N, sz]];
  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 3; j++) {
      const f = M[j][i] / M[i][i];
      for (let k = i; k < 4; k++) M[j][k] -= f * M[i][k];
    }
  }
  const s = [0, 0, 0];
  for (let i = 2; i >= 0; i--) {
    let v = M[i][3];
    for (let k = i + 1; k < 3; k++) v -= M[i][k] * s[k];
    s[i] = v / M[i][i];
  }
  const cx = s[0] / 2, cy = s[1] / 2;
  return { cx, cy, r: Math.sqrt(s[2] + cx * cx + cy * cy) };
}
let circle = fit(rim);
for (let pass = 0; pass < 3; pass++) {
  const keep = rim.filter(([x, y]) => Math.hypot(x - circle.cx, y - circle.cy) > circle.r * 0.97);
  circle = fit(keep);
}

// Merkezden en uzak dolu piksel kadar yarıçaplı kare (hiçbir uç kesilmesin), %2 pay
let far = 0;
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (solid(x, y)) far = Math.max(far, Math.hypot(x - circle.cx, y - circle.cy));
const half = Math.ceil(far * 1.02);
const left = Math.round(circle.cx) - half, top = Math.round(circle.cy) - half, side = half * 2;
// sharp kırpmayı genişletmeden önce uygular; bu yüzden iki adımda
const padded = await sharp(src)
  .ensureAlpha()
  .extend({ top: half, bottom: half, left: half, right: half, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
const square = await sharp(padded).extract({ left: left + half, top: top + half, width: side, height: side }).png().toBuffer();

const resized = (size) => sharp(square).resize(size, size, { kernel: 'lanczos3' });
await resized(640).webp({ quality: 92, alphaQuality: 100, smartSubsample: true }).toFile(path.join(outDir, 'mundologo.webp'));
await resized(64).png({ compressionLevel: 9 }).toFile(path.join(outDir, 'favicon.png'));

// Kontrol: koyu ve beyaz zeminde yan yana
const logo = await sharp(square).resize(512, 512).png().toBuffer();
await sharp({ create: { width: 1024, height: 512, channels: 4, background: '#0b1a1d' } })
  .composite([
    { input: { create: { width: 512, height: 512, channels: 4, background: '#ffffff' } }, left: 512, top: 0 },
    { input: logo, left: 0, top: 0 },
    { input: logo, left: 512, top: 0 },
  ])
  .png()
  .toFile(path.join(outDir, 'preview.png'));
console.log({ circle, far: Math.round(far), side });
