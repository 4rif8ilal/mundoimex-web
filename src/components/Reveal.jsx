import { useEffect, useRef } from 'react';

/** Bölüm girince bir kez içeri kayar. `i` kademe sırasıdır (70ms adım). */
export function Reveal({ as: Tag = 'div', i = 0, className = '', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--i': i }} {...rest}>
      {children}
    </Tag>
  );
}
