import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { MotionConfig, motion } from 'motion/react';

/*
 * "Üstüne gelince büyüyen içerik birleştirici" bileşeninin Mundoimex uyarlaması.
 * Orijinalde başlığın üstüne gelince sağdaki görsel açılıyordu; burada görsel yerine
 * o gruba ait maddeler aynı clip-path geçişiyle açılır. Dokunmatik ekranda dokunma,
 * klavyede odaklanma da aynı sonucu verir.
 */

const Ctx = createContext(null);
const useSlider = () => useContext(Ctx);

const clipPathVariants = {
  visible: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
  hidden: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)' },
};

export function HoverSlider({ className = '', children, resetKey }) {
  const [activeSlide, setActive] = useState(0);
  const changeSlide = useCallback((i) => setActive(i), []);
  useEffect(() => setActive(0), [resetKey]);
  const value = useMemo(() => ({ activeSlide, changeSlide }), [activeSlide, changeSlide]);
  return (
    <Ctx.Provider value={value}>
      <div className={className}>{children}</div>
    </Ctx.Provider>
  );
}

function splitChars(text) {
  return text
    .split(' ')
    .map((w) => w.concat(' '))
    .map((w) => w.split(''))
    .flat(1);
}

export function TextStaggerHover({ text, index, className = '', number }) {
  const { activeSlide, changeSlide } = useSlider();
  const isActive = activeSlide === index;
  const chars = splitChars(text);
  const activate = () => changeSlide(index);

  return (
    <button
      type="button"
      className={`hs-title ${isActive ? 'is-active' : ''} ${className}`}
      onMouseEnter={activate}
      onFocus={activate}
      onClick={activate}
      aria-pressed={isActive}
    >
      <span className="hs-title__num">{number}</span>
      <span className="hs-title__text" aria-label={text}>
        {chars.map((char, i) => (
          <span key={`${char}-${i}`} className="hs-char" aria-hidden="true">
            <MotionConfig
              transition={{ delay: i * 0.02, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span
                className="hs-char__base"
                initial={false}
                animate={isActive ? { y: '-110%' } : { y: '0%' }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
              <motion.span
                className="hs-char__hover"
                initial={false}
                animate={isActive ? { y: '0%' } : { y: '110%' }}
              >
                {char === ' ' ? ' ' : char}
              </motion.span>
            </MotionConfig>
          </span>
        ))}
      </span>
    </button>
  );
}

/** Sağdaki panel: orijinaldeki HoverSliderImageWrap. Çocukları üst üste bindirir. */
export function HoverSliderPanelWrap({ className = '', children }) {
  return <div className={`hs-panels ${className}`}>{children}</div>;
}

/** Orijinaldeki HoverSliderImage: `index` aktifse clip-path ile açılır. */
export function HoverSliderPanel({ index, children, className = '' }) {
  const { activeSlide } = useSlider();
  const active = activeSlide === index;
  return (
    <motion.div
      className={`hs-panel ${className}`}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
      variants={clipPathVariants}
      initial={false}
      animate={active ? 'visible' : 'hidden'}
      aria-hidden={!active}
      style={{ pointerEvents: active ? 'auto' : 'none' }}
    >
      {children}
    </motion.div>
  );
}
