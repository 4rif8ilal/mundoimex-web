import { Orbit } from '../components/Orbit.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Icon } from '../components/Icons.jsx';
import { useModal } from '../components/Modal.jsx';
import { company, hero } from '../data/content.js';

const transportChips = [
  { icon: 'truck', label: 'Kara' },
  { icon: 'plane', label: 'Hava' },
  { icon: 'ship', label: 'Deniz' },
];

export function Hero() {
  const { open } = useModal();
  return (
    <section className="hero on-dark" id="top" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <Reveal as="p" className="eyebrow eyebrow--light">
            {hero.eyebrow}
          </Reveal>
          <Reveal as="h1" i={1} id="hero-title" className="hero__title">
            {hero.title}
          </Reveal>
          <Reveal as="p" i={2} className="lead hero__lead">
            {hero.text}
          </Reveal>
          <Reveal i={3} className="hero__actions">
            <button className="btn btn--primary" onClick={() => open('teklif')}>
              Teklif formu
              <Icon name="arrowRight" size={18} />
            </button>
            <a className="btn btn--ghost" href={`tel:+9${company.phone.replace(/\s/g, '')}`}>
              <Icon name="phone" size={18} />
              {company.phone}
            </a>
          </Reveal>
        </div>
        <Reveal i={2} className="hero__visual">
          <Orbit chips={transportChips} />
        </Reveal>
      </div>

      <div className="wrap">
        <ul className="quick" aria-label="Hızlı erişim">
          <li>
            <button className="quick__item" onClick={() => open('teklif')}>
              <Icon name="arrowRight" size={20} />
              <span className="quick__k">Teklif</span>
              <strong>Teklif formunu doldurun</strong>
            </button>
          </li>
          <li>
            <a className="quick__item" href={`tel:+9${company.phone.replace(/\s/g, '')}`}>
              <Icon name="phone" size={20} />
              <span className="quick__k">Telefon</span>
              <strong>{company.phone}</strong>
            </a>
          </li>
          <li>
            <a className="quick__item" href={`mailto:${company.email}`}>
              <Icon name="mail" size={20} />
              <span className="quick__k">E-posta</span>
              <strong>{company.email}</strong>
            </a>
          </li>
          <li>
            <button className="quick__item" onClick={() => open('iletisim')}>
              <Icon name="pin" size={20} />
              <span className="quick__k">Adres</span>
              <strong>Esenyurt, İstanbul: haritada aç</strong>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
