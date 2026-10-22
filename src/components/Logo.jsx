import { useId } from 'react';
import logoUrl from '../assets/mundologo.webp';

/*
 * Mundoimex logosu (orijinal 59×61 px GIF).
 * Hikâye (hakkimizda.html, "Logonun Hikâyesi"):
 *  - Dünya soyutlanmış; ortadan geçen çizgi ekvator.
 *  - İki yarım küre birbirinin etrafında döner, yörünge süreklilik anlatır.
 *  - İsmin ortasındaki O yerine amblem durur.
 *  - X ile önceki harf arasında ileriyi gösteren gizli bir ok vardır.
 *  - X'in sol yarısı hizmete göre renklenir: kırmızı gümrük, turuncu lojistik, yeşil geri dönüşüm.
 */

// Yüksek çözünürlüklü logo (reference/mundologo-hq.webp), reference/prepare-logo.mjs ile
// kürenin merkezi görselin tam ortasına gelecek şekilde kırpıldı; böylece yerinde döner.
// `size` varsayılan boyuttur; CSS (ör. .orbit__core .emblem) bunu ezebilir.
export function Emblem({ size = 64, spin = false, title, className = '' }) {
  return (
    <img
      src={logoUrl}
      alt={title || ''}
      aria-hidden={title ? undefined : true}
      draggable="false"
      style={{ '--emblem-size': typeof size === 'number' ? `${size}px` : size }}
      className={`emblem ${spin ? 'emblem--spin' : ''} ${className}`}
    />
  );
}

function XMark({ service, uid }) {
  const left = `x-l-${uid}`;
  const right = `x-r-${uid}`;
  return (
    <svg viewBox="0 0 64 64" className="wordmark__x" aria-hidden="true">
      <defs>
        <clipPath id={left}>
          <rect x="0" y="0" width="32" height="64" />
        </clipPath>
        <clipPath id={right}>
          <rect x="32" y="0" width="32" height="64" />
        </clipPath>
      </defs>
      <g fill="none" strokeWidth="13">
        <path d="M5 2L59 62M59 2L5 62" stroke={service} clipPath={`url(#${left})`} />
        <path d="M5 2L59 62M59 2L5 62" stroke="currentColor" clipPath={`url(#${right})`} />
      </g>
      {/* gizli ok: X'in sol boşluğunda, ileriyi gösterir */}
      <path d="M3 24L19 32L3 40Z" fill="var(--turkuaz)" />
    </svg>
  );
}

/**
 * Yazı logosu. `size` piksel cinsinden yazı boyudur.
 * `service`: 'gumruk' | 'lojistik' | 'geri-donusum' | 'grup'
 */
export function Wordmark({ service = 'gumruk', size = 28, className = '' }) {
  const uid = useId().replace(/:/g, '');
  const color = {
    gumruk: 'var(--gumruk)',
    lojistik: 'var(--lojistik)',
    'geri-donusum': 'var(--geri-donusum)',
    grup: 'var(--turkuaz-derin)',
  }[service];
  return (
    <span className={`wordmark ${className}`} style={{ fontSize: size }} role="img" aria-label="Mundoimex">
      <span aria-hidden="true">MUND</span>
      <Emblem size="0.9em" className="wordmark__o" />
      <span aria-hidden="true">İME</span>
      <XMark service={color} uid={uid} />
    </span>
  );
}
