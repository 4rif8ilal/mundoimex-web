import { Reveal } from '../components/Reveal.jsx';
import { Icon } from '../components/Icons.jsx';
import { storage } from '../data/content.js';

export function Storage() {
  return (
    <section className="section" id="depolama" aria-labelledby="storage-title">
      <div className="wrap storage">
        <div className="storage__head">
          <Reveal as="p" className="eyebrow eyebrow--orange">
            {storage.subtitle}
          </Reveal>
          <Reveal as="h2" i={1} id="storage-title" className="h2">
            {storage.title}
          </Reveal>
          <Reveal as="p" i={2} className="lead">
            {storage.intro}
          </Reveal>
        </div>

        <ul className="cards cards--3">
          {storage.cards.map((c, i) => (
            <Reveal as="li" i={i % 3} className="card" key={c.title}>
              <span className="card__icon card__icon--orange">
                <Icon name={c.icon} />
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
