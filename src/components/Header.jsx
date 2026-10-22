import { useEffect, useState } from 'react';
import { Wordmark } from './Logo.jsx';
import { useModal } from './Modal.jsx';
import { nav } from '../data/content.js';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const act = (modal) => (e) => {
    e.preventDefault();
    setOpen(false);
    openModal(modal);
  };

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="header__row">
        <a href="#top" className="header__brand" aria-label="Mundoimex ana sayfa" onClick={() => setOpen(false)}>
          <Wordmark service="gumruk" size={22} />
        </a>

        <nav id="ana-menu" className="header__nav" aria-label="Ana menü">
          {nav.map((item) =>
            item.modal ? (
              <button key={item.label} className="header__link" onClick={act(item.modal)}>
                {item.label}
              </button>
            ) : (
              <a key={item.label} className="header__link" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ),
          )}
          <button className="header__link" onClick={act('iletisim')}>
            İletişim
          </button>
          <button className="btn btn--primary btn--sm header__cta" onClick={act('teklif')}>
            Teklif formu
          </button>
        </nav>

        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="ana-menu"
          aria-label="Menüyü aç veya kapat"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
