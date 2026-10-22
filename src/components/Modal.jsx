import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Icon } from './Icons.jsx';

const ModalContext = createContext({ open: () => {}, close: () => {}, active: null });

export const useModal = () => useContext(ModalContext);

/** Tek bir açık pencere tutar; `modals` { anahtar: { title, kicker, size, render } } haritasıdır. */
export function ModalProvider({ modals, children }) {
  const [active, setActive] = useState(null);
  const returnFocus = useRef(null);

  const open = useCallback((key) => {
    returnFocus.current = document.activeElement;
    setActive(key);
  }, []);
  const close = useCallback(() => {
    setActive(null);
    returnFocus.current?.focus?.();
  }, []);

  return (
    <ModalContext.Provider value={{ open, close, active }}>
      {children}
      {active && modals[active] && <Dialog spec={modals[active]} onClose={close} />}
    </ModalContext.Provider>
  );
}

function Dialog({ spec, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className={`modal__panel modal__panel--${spec.size || 'md'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={ref}
      >
        <header className="modal__head">
          <div>
            {spec.kicker && <p className="eyebrow">{spec.kicker}</p>}
            <h2 id="modal-title" className="modal__title">
              {spec.title}
            </h2>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Pencereyi kapat">
            <Icon name="close" />
          </button>
        </header>
        <div className="modal__body">{spec.render({ close: onClose })}</div>
      </div>
    </div>
  );
}
