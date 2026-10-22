import { motion } from 'motion/react';
import { Reveal } from '../components/Reveal.jsx';
import { Icon } from '../components/Icons.jsx';
import { useModal } from '../components/Modal.jsx';
import { vehicleArt } from '../components/Vehicles.jsx';
import { logistics } from '../data/content.js';

/*
 * "Showcase card" bileşeninin kurumsal uyarlaması: koyu gradyan ve renkli başlık yerine
 * beyaz yüzey, ince çerçeve, numaralı etiket ve sade vurgu. Hover'da görsel hafif büyür,
 * köşedeki düğme dolar.
 */
function ShowcaseCard({ item, index, onAction }) {
  return (
    <motion.article
      className="showcase"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -6 }}
    >
      <header className="showcase__top">
        <span className="showcase__code">
          {item.code} <i /> {item.label}
        </span>
        <button className="showcase__go" onClick={onAction} aria-label={`${item.title} için teklif al`}>
          <Icon name="arrow" size={20} />
        </button>
      </header>

      <div className="showcase__media">
        <motion.div
          className="showcase__art"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {vehicleArt[item.art]}
        </motion.div>
      </div>

      <div className="showcase__body">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <ul>
          {item.points.map((p) => (
            <li key={p}>
              <Icon name="check" size={16} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function Logistics() {
  const { open } = useModal();
  return (
    <section className="section section--dark on-dark" id="lojistik" aria-labelledby="logistics-title">
      <div className="wrap">
        <div className="section__head section__head--row">
          <div>
            <Reveal as="p" className="eyebrow eyebrow--orange">
              Global Lojistik
            </Reveal>
            <Reveal as="h2" i={1} id="logistics-title" className="h2">
              {logistics.title}
            </Reveal>
          </div>
          <Reveal as="p" i={2} className="lead">
            {logistics.intro}
          </Reveal>
        </div>

        <div className="showcase-grid">
          {logistics.items.map((item, i) => (
            <ShowcaseCard key={item.code} item={item} index={i} onAction={() => open('teklif')} />
          ))}
        </div>
      </div>
    </section>
  );
}
