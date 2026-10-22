import { useRef, useState } from 'react';
import { Icon } from './Icons.jsx';

/*
 * "InfoCard" bileşeninin Mundoimex uyarlaması: fare konumuna göre dönen çerçeve,
 * desenli koyu yüzey, başlıkta ortadan açılan vurgu. Görsel yerine `art` (SVG) alır;
 * tıklanınca `onClick` ile ilgili pencere açılır.
 */
export function InfoCard({ art, title, text, cta, color, hoverText = '#06191d', onClick }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const angle = Math.atan2(e.clientY - r.top - r.height / 2, e.clientX - r.left - r.width / 2);
    el.style.setProperty('--rotation', `${angle}rad`);
  };

  return (
    <button
      type="button"
      ref={ref}
      className={`info-card ${hovered ? 'is-hovered' : ''}`}
      style={{ '--c': color, '--hover-text': hoverText }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        ref.current?.style.setProperty('--rotation', '0deg');
      }}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={onClick}
    >
      <span className="info-card__inner">
        <span className="info-card__art">{art}</span>
        <span className="info-card__body">
          <span className="info-card__title">
            <span className="info-card__title-text">{title}</span>
            <span className="info-card__wipe" aria-hidden="true" />
          </span>
          <span className="info-card__text">{text}</span>
          <span className="info-card__cta">
            {cta}
            <Icon name="arrowRight" size={18} />
          </span>
        </span>
      </span>
    </button>
  );
}

/* ---- Kart görselleri: tek renkli, ince çizgili ---- */

const artProps = {
  viewBox: '0 0 320 150',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const arts = {
  egumruk: (
    <svg {...artProps}>
      <rect x="86" y="22" width="148" height="92" rx="10" />
      <path d="M130 132h60M160 114v18" />
      <circle cx="160" cy="68" r="28" />
      <path d="M132 68h56M160 40c12 14 12 42 0 56M160 40c-12 14-12 42 0 56" />
      <circle cx="52" cy="46" r="5" fill="currentColor" />
      <circle cx="268" cy="96" r="5" fill="currentColor" />
      <path d="M57 46h24M239 96h24M52 51v30h34M268 91V60h-34" opacity=".55" />
    </svg>
  ),
  kariyer: (
    <svg {...artProps}>
      <path d="M40 124h60v-26h60V72h60V46h60" opacity=".55" />
      <circle cx="270" cy="30" r="5" fill="currentColor" />
      <circle cx="132" cy="48" r="16" />
      <path d="M100 108c2-20 14-30 32-30s30 10 32 30" />
      <path d="M118 48l10 10 18-18" />
    </svg>
  ),
  teklif: (
    <svg {...artProps}>
      <path d="M104 18h88l36 36v78H104z" />
      <path d="M192 18v36h36" />
      <path d="M124 72h64M124 92h84M124 112h50" opacity=".6" />
      <circle cx="238" cy="112" r="22" fill="var(--card-bg, #000)" />
      <path d="M227 112l8 8 14-16" />
    </svg>
  ),
};
