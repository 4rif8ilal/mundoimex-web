import { useRef, useState } from 'react';
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { Emblem } from './Logo.jsx';
import { Icon } from './Icons.jsx';

const tones = {
  turkuaz: 'var(--turkuaz)',
  gumruk: 'var(--gumruk)',
  lojistik: 'var(--lojistik)',
};

/*
 * Scroll ile ilerleyen zaman çizgisi. Bölüm ekrana sabitlenir; sayfa kaydırıldıkça adımlar
 * sırayla değişir, ilerleme çubuğu dolar ve amblem döner. Duraklara tıklamak, ok tuşları
 * veya ileri/geri düğmeleri sayfayı ilgili adıma kaydırır.
 */
export function Timeline({ steps }) {
  const n = steps.length;
  const rootRef = useRef(null);
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  const { scrollYProgress } = useScroll({ target: rootRef, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });
  const rotate = useTransform(progress, [0, 1], [0, 540]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const next = Math.min(n - 1, Math.floor(p * n));
    if (next !== i) {
      setDir(next > i ? 1 : -1);
      setI(next);
    }
  });

  // Adım n'in ortasına kaydır: sabitlenen alanın toplam kaydırma mesafesi n eşit dilime bölünür.
  const goTo = (k) => {
    const el = rootRef.current;
    if (!el) return;
    const target = Math.max(0, Math.min(n - 1, k));
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + ((target + 0.5) / n) * travel, behavior: 'smooth' });
  };

  const onKey = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goTo(i + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goTo(i - 1);
    }
  };

  const step = steps[i];
  const acc = tones[step.tone] || tones.turkuaz;

  return (
    <MotionConfig reducedMotion="user">
      <div className="tl" ref={rootRef} style={{ '--n': n }}>
        <div className="tl__sticky">
          <div className="tl__panel on-dark" style={{ '--acc': acc }} onKeyDown={onKey}>
            <span className="tl__glow" aria-hidden="true" />
            <motion.div className="tl__emblem" style={{ rotate }} aria-hidden="true">
              <Emblem size={420} />
            </motion.div>

            <div className="tl__bar" aria-hidden="true">
              <motion.span style={{ scaleX: progress }} />
            </div>

            <div className="tl__grid">
              <div className="tl__left">
                <div className="tl__big" aria-hidden="true">
                  <AnimatePresence mode="popLayout" initial={false} custom={dir}>
                    <motion.span
                      key={step.when}
                      custom={dir}
                      initial={{ y: `${dir * 60}%`, opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={{ y: `${dir * -60}%`, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      {step.when}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <ol className="tl__rail" role="tablist" aria-label="Mundoimex kuruluş yolculuğu">
                  <span className="tl__rail-line" aria-hidden="true">
                    {/* Ray masaüstünde dikey, telefonda yatay; CSS uygun olanı gösterir. */}
                    <motion.span className="tl__fill-y" style={{ scaleY: progress }} />
                    <motion.span className="tl__fill-x" style={{ scaleX: progress }} />
                  </span>
                  {steps.map((s, k) => (
                    <li key={s.when}>
                      <button
                        role="tab"
                        aria-selected={k === i}
                        aria-controls="tl-panel"
                        tabIndex={k === i ? 0 : -1}
                        className={`tl__node ${k === i ? 'is-active' : ''} ${k < i ? 'is-past' : ''}`}
                        style={{ '--node': tones[s.tone] || tones.turkuaz }}
                        onClick={() => goTo(k)}
                      >
                        <span className="tl__dot" />
                        <span className="tl__when">{s.when}</span>
                        <span className="tl__tag">{s.tag}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="tl__right" id="tl-panel" role="tabpanel" aria-live="polite">
                <AnimatePresence mode="wait" initial={false} custom={dir}>
                  <motion.article
                    key={i}
                    className="tl__card"
                    initial={{ opacity: 0, y: dir * 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: dir * -24 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    <div className="tl__meta">
                      <span className="tl__icon">
                        <Icon name={step.icon || 'check'} size={22} />
                      </span>
                      <span className="tl__count">
                        {String(i + 1).padStart(2, '0')}
                        <span> / {String(n).padStart(2, '0')}</span>
                      </span>
                      <span className="tl__label">{step.tag}</span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </motion.article>
                </AnimatePresence>

                <div className="tl__nav">
                  <button className="icon-btn tl__btn" onClick={() => goTo(i - 1)} disabled={i === 0} aria-label="Önceki adım">
                    <Icon name="left" />
                  </button>
                  <button className="icon-btn tl__btn" onClick={() => goTo(i + 1)} disabled={i === n - 1} aria-label="Sonraki adım">
                    <Icon name="chevron" />
                  </button>
                </div>
              </div>
            </div>

            <motion.p className="tl__hint" style={{ opacity: hintOpacity }} aria-hidden="true">
              Kaydırarak ilerleyin
              <span className="tl__hint-arrow">
                <Icon name="chevron" size={16} />
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
