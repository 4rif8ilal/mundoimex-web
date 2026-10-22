import { useId } from 'react';

/*
 * Mundoimex logosu, SVG olarak yeniden çizildi (orijinal 59×61 px GIF).
 * Hikâye (hakkimizda.html, "Logonun Hikâyesi"):
 *  - Dünya soyutlanmış; ortadan geçen çizgi ekvator.
 *  - İki yarım küre birbirinin etrafında döner, yörünge süreklilik anlatır.
 *  - İsmin ortasındaki O yerine amblem durur.
 *  - X ile önceki harf arasında ileriyi gösteren gizli bir ok vardır.
 *  - X'in sol yarısı hizmete göre renklenir: kırmızı gümrük, turuncu lojistik, yeşil geri dönüşüm.
 */

// Ekvator eğrisi: merkez (50,50) etrafında 180° simetrik, uçları daireden taşar.
const EQUATOR = 'M-5 75L2 62C20 30 42 40 50 50C58 60 80 70 98 38L105 26';
const HALF = 'M0 0H100V38H98C80 70 58 60 50 50C42 40 20 30 2 62H0Z';

export function Emblem({ size = 64, spin = false, top, bottom, title, className = '' }) {
  const uid = useId().replace(/:/g, '');
  const clip = `emb-c-${uid}`;
  const mask = `emb-m-${uid}`;
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`emblem ${spin ? 'emblem--spin' : ''} ${className}`}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <clipPath id={clip}>
          <circle cx="50" cy="50" r="48" />
        </clipPath>
        <mask id={mask} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <rect width="100" height="100" fill="#fff" />
          <g fill="none" stroke="#000" strokeLinecap="round">
            <path d={EQUATOR} strokeWidth="6" />
            <path d={EQUATOR} strokeWidth="3.5" transform="translate(0 -18)" />
            <path d={EQUATOR} strokeWidth="3.5" transform="translate(0 18)" />
          </g>
        </mask>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <g mask={`url(#${mask})`}>
          <path d={HALF} fill={top || 'var(--turkuaz)'} />
          <path d={HALF} fill={bottom || 'var(--gumruk)'} transform="rotate(180 50 50)" />
        </g>
      </g>
    </svg>
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
      <Emblem size="0.9em" className="wordmark__o" bottom={color} />
      <span aria-hidden="true">İME</span>
      <XMark service={color} uid={uid} />
    </span>
  );
}
