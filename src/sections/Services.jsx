import { Reveal } from '../components/Reveal.jsx';
import { InfoCard, arts } from '../components/InfoCard.jsx';
import { useModal } from '../components/Modal.jsx';
import { services } from '../data/content.js';

export function Services() {
  const { open } = useModal();
  return (
    <section className="section section--surface" id="e-gumruk" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section__head section__head--row">
          <div>
            <Reveal as="p" className="eyebrow">
              E-Gümrük · Kariyer · Teklif
            </Reveal>
            <Reveal as="h2" i={1} id="services-title" className="h2">
              {services.title}
            </Reveal>
          </div>
          <Reveal as="p" i={2} className="lead">
            {services.intro}
          </Reveal>
        </div>

        <div className="info-grid">
          {services.cards.map((c, i) => (
            <Reveal i={i} key={c.id}>
              <InfoCard
                art={arts[c.art]}
                title={c.title}
                text={c.text}
                cta={c.cta}
                color={c.tone}
                hoverText={c.hover}
                onClick={() => open(c.id)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
