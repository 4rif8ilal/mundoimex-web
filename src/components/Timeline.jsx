import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from './Icons.jsx';

/*
 * Etkileşimli zaman çizgisi. Düğmeye tıklayarak, ok tuşlarıyla, ileri/geri düğmeleriyle
 * gezilir; bölüm görününce kendiliğinden oynar, kullanıcı dokunduğunda durur.
 */
export function Timeline({ steps }) {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const rootRef = useRef(null);
  const visible = useRef(false);

  const go = useCallback(
    (n) => setI((n + steps.length) % steps.length),
    [steps.length],
  );
  const pick = (n) => {
    setAuto(false);
    go(n);
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => visible.current && setI((n) => (n + 1) % steps.length), 5200);
    return () => clearInterval(t);
  }, [auto, steps.length]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      pick(i + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      pick(i - 1);
    }
  };

  const step = steps[i];
  const ratio = i / (steps.length - 1);

  return (
    <div className="timeline" ref={rootRef} onKeyDown={onKey}>
      <div
        className="timeline__track"
        role="tablist"
        aria-label="Mundoimex kuruluş yolculuğu"
        style={{ '--ratio': ratio, '--n': steps.length }}
      >
        <span className="timeline__line" aria-hidden="true" />
        <span className="timeline__fill" aria-hidden="true" />
        {steps.map((s, n) => (
          <button
            key={s.when}
            role="tab"
            id={`tl-tab-${n}`}
            aria-selected={n === i}
            aria-controls="tl-panel"
            tabIndex={n === i ? 0 : -1}
            className={`timeline__node ${n === i ? 'is-active' : ''} ${n < i ? 'is-past' : ''}`}
            onClick={() => pick(n)}
          >
            <span className="timeline__dot" />
            <span className="timeline__when">{s.when}</span>
            <span className="timeline__tag">{s.tag}</span>
          </button>
        ))}
      </div>

      <div className="timeline__stage" id="tl-panel" role="tabpanel" aria-labelledby={`tl-tab-${i}`}>
        <article className="timeline__card" key={i}>
          <p className="timeline__count">
            {String(i + 1).padStart(2, '0')} <span>/ {String(steps.length).padStart(2, '0')}</span>
          </p>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
        <div className="timeline__nav">
          <button className="icon-btn icon-btn--line" onClick={() => pick(i - 1)} aria-label="Önceki">
            <Icon name="left" />
          </button>
          <button className="icon-btn icon-btn--line" onClick={() => pick(i + 1)} aria-label="Sonraki">
            <Icon name="chevron" />
          </button>
        </div>
      </div>
    </div>
  );
}
