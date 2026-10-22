# Mundoimex Web

[Mundoimex Global Lojistik ve Gümrük Müşavirliği](https://mundoimex.com/) için sıfırdan yazılmış React arayüzü.
**Canlı demo: https://4rif8ilal.github.io/mundoimex-web/**

Amaç: ziyaretçi en gerekli bilgiyi görsün ve en kısa sürede aksiyon alsın (teklif, telefon, e-posta, adres).
Marka tarihçesi, kalite politikası ve logonun hikâyesi ana sayfadan ayrılıp kendi sayfasına taşındı.

## Sayfalar

| Adres | İçerik |
| --- | --- |
| `/` | Hero ve 4 hızlı eylem, gümrük çözümleri (ithalat, ihracat, askıya alma, danışmanlık), lojistik çözümleri (kara, hava, deniz), depolama, E-Gümrük / Kariyer / Teklif |
| `/#/hakkimizda` | Tarihçe (zaman çizgisi), kalite politikası, logonun hikâyesi |

Teklif formu, kariyer başvurusu, E-Gümrük ve iletişim (Google Haritalar gömülü) pencere olarak açılır.
Formlar sunucusuz çalışır: gönderimde `info@mundoimex.com` adresine hazır bir `mailto:` açılır.

## Çalıştırma

[Node.js](https://nodejs.org/) 18 veya üstü gerekir.

```bash
npm install
npm run dev
```

Üretim derlemesi için `npm run build`, derlemeyi denemek için `npm run preview`.

Canlı demoyu güncellemek için (derler ve `gh-pages` dalına gönderir; GitHub Pages bu daldan yayın yapar):

```bash
npm run deploy
```

## Teknoloji

- React 18 + Vite
- [Archivo Variable](https://fontsource.org/fonts/archivo) (tek yazı ailesi)
- [motion](https://motion.dev/) (geçişler)
- Router yok: sayfalar hash ile ayrılır (`App.jsx`)
- Stil: düz CSS, tüm değerler `src/styles/tokens.css` içinde

## Yapı

```
src/
  components/   Logo, Header, Footer, Orbit, Timeline, HoverSlider, Modal ...
  sections/     Hero, Customs, Logistics, Storage, Services
  pages/        Site (ana sayfa), AboutPage (Hakkımızda)
  data/         content.js: tüm metinler
  styles/       tokens.css, base.css, site.css
public/         favicon ve araç görselleri
reference/      eski sitenin orijinal logosu
```

Metinleri değiştirmek için yalnızca `src/data/content.js` yeterlidir.

## Tasarım dili

Renkler logodan ve eski siteden alındı: turkuaz grup rengidir, kırmızı gümrüğü, turuncu lojistiği temsil eder.
Ayrıntılar için [DESIGN.md](DESIGN.md).

## Açık noktalar

- Logo, yüksek çözünürlüklü saydam görselden (`reference/mundologo-hq.webp`) kürenin merkezi ortada kalacak şekilde kırpılıp küçültülmüştür (`reference/prepare-logo.mjs`); kurumsal kimlik dosyası (AI/SVG) varsa onunla değiştirilmeli.
- `public/img` içindeki araç görseli eski siteden ve düşük çözünürlüklü.
- Formlar gerçek bir e-posta/API servisine bağlı değil; kariyer formunda CV eki için bir sunucu gerekir.

## Lisans ve içerik

Marka adı, logo, metinler ve görseller Mundoimex Gümrük Müşavirliği A.Ş.'ye aittir.
