import { Wordmark } from './Logo.jsx';
import { ContactList } from './ModalContents.jsx';
import { useModal } from './Modal.jsx';
import { company, nav } from '../data/content.js';

export function Footer() {
  const { open } = useModal();
  return (
    <footer className="footer on-dark" id="iletisim">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <Wordmark service="gumruk" size={30} />
          <p>{company.tagline}</p>
          <p className="footer__slogan">“{company.slogan}”</p>
        </div>

        <div>
          <h2 className="footer__h">İletişim</h2>
          <ContactList inverse />
        </div>

        <div>
          <h2 className="footer__h">Bağlantılar</h2>
          <ul className="footer__links">
            {nav.map((item) => (
              <li key={item.label}>
                {item.modal ? (
                  <button onClick={() => open(item.modal)}>{item.label}</button>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
            <li>
              <button onClick={() => open('teklif')}>Teklif formu</button>
            </li>
            <li>
              <button onClick={() => open('iletisim')}>Harita ve iletişim</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__bar">
        <span>© {new Date().getFullYear()} {company.legal}</span>
        <span>Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}
