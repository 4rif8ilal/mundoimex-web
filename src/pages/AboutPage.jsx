import { Emblem } from '../components/Logo.jsx';
import { Orbit } from '../components/Orbit.jsx';
import { Icon } from '../components/Icons.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Timeline } from '../components/Timeline.jsx';
import { useModal } from '../components/Modal.jsx';
import { about, aboutStats, quality, logoStory, timeline } from '../data/content.js';

// Tarihçedeki duraklar, yörüngede dikey eksene göre simetrik dizildi (konumlar görselin %x, %y değeridir).
// Üst ve alt ortada birer etiket, aralarında iki çift; yukarıdan aşağı, soldan sağa okununca sıra kronolojiktir.
const milestoneChips = [
  { icon: 'user', label: 'ONEL', at: [50, 4] },
  { icon: 'map', label: '5 bölgede şube', at: [12, 30] },
  { icon: 'truck', label: 'Lojistik', at: [88, 30] },
  { icon: 'check', label: 'Sigorta', at: [12, 70] },
  { icon: 'globe', label: 'DHL', at: [88, 70] },
  { icon: 'clock', label: '2015', at: [50, 96] },
];

/** Hakkımızda: tarihçe, kalite politikası ve logonun hikâyesi. Ana sayfadan ayrıdır. */
export function AboutPage() {
  const { open } = useModal();
  return (
    <main>
      <section className="hero hero--page on-dark" aria-labelledby="about-title">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <Reveal as="p" className="eyebrow eyebrow--light">
              Hakkımızda
            </Reveal>
            <Reveal as="h1" i={1} id="about-title" className="hero__title">
              {about.title}
            </Reveal>
            <Reveal as="p" i={2} className="lead hero__lead">
              {about.text}
            </Reveal>
          </div>
          <Reveal i={2} className="hero__visual">
            <Orbit chips={milestoneChips} />
          </Reveal>
        </div>

        <div className="wrap">
          <ul className="stats">
            {aboutStats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="tarihce-title">
        <div className="wrap">
          <div className="section__head">
            <Reveal as="p" className="eyebrow">
              Tarihçe
            </Reveal>
            <Reveal as="h2" i={1} id="tarihce-title" className="h2">
              Mundoimex’in yolculuğu
            </Reveal>
          </div>
          <Reveal i={1}>
            <Timeline steps={timeline} />
          </Reveal>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="politika-title">
        <div className="wrap about__split about__split--flat">
          <Reveal className="quality">
            <h2 id="politika-title" className="h2">
              {quality.title}
            </h2>
            <p className="muted">{quality.intro}</p>
            <ol className="quality__list">
              {quality.items.map((t, n) => (
                <li key={t}>
                  <span className="quality__n">{String(n + 1).padStart(2, '0')}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal i={1} className="story">
            <div className="story__head">
              <Emblem size={56} spin />
              <div>
                <h2 className="h3">{logoStory.title}</h2>
                <p className="muted story__sum">{logoStory.summary}</p>
              </div>
            </div>
            <dl className="story__terms">
              {logoStory.items.map((it) => (
                <div key={it.term}>
                  <dt>{it.term}</dt>
                  <dd>{it.text}</dd>
                </div>
              ))}
            </dl>
            <ul className="swatches">
              {logoStory.colors.map((c) => (
                <li key={c.name} style={{ '--bg': c.bg, '--fg': c.ink }}>
                  <strong>{c.name}</strong>
                  <span>{c.hex}</span>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section about__cta" aria-labelledby="about-cta-title">
        <div className="wrap about__cta-row">
          <Reveal as="h2" id="about-cta-title" className="h2">
            Yükünüz için konuşalım.
          </Reveal>
          <Reveal i={1} className="hero__actions about__cta-actions">
            <button className="btn btn--primary" onClick={() => open('teklif')}>
              Teklif formu
              <Icon name="arrowRight" size={18} />
            </button>
            <a className="btn btn--line" href="#top">
              Hizmetlerimize dön
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
