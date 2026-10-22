import { useState } from 'react';
import { Reveal } from '../components/Reveal.jsx';
import { Icon } from '../components/Icons.jsx';
import {
  HoverSlider,
  HoverSliderPanel,
  HoverSliderPanelWrap,
  TextStaggerHover,
} from '../components/HoverSlider.jsx';
import { useModal } from '../components/Modal.jsx';
import { askiya, customs, danismanlik, ihracat, ithalat } from '../data/content.js';

const groupsByTab = { ithalat, ihracat, danismanlik };

function GroupedItems({ data, id }) {
  // Tek gruplu hizmetlerde (danışmanlık) başlık listesi ve hover geçişi anlamsız; tek kart gösterilir.
  if (data.groups.length === 1) {
    const [g] = data.groups;
    return (
      <div className="hs">
        <div className="hs__intro">
          <h3 className="h3">{data.title}</h3>
          <p className="muted">{data.lead}</p>
        </div>
        <div className="hs-panels hs-panels--single">
          <div className="hs-card">
            <p className="hs-card__kicker">{g.items.length} konu</p>
            <h4>{g.title}</h4>
            <ul>
              {g.items.map((t) => (
                <li key={t}>
                  <Icon name="check" size={18} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <HoverSlider className="hs" resetKey={id}>
      <div className="hs__intro">
        <h3 className="h3">{data.title}</h3>
        <p className="muted">{data.lead}</p>
      </div>
      <div className="hs__body">
        <div className="hs__titles" role="group" aria-label={`${data.title} başlıkları`}>
          {data.groups.map((g, i) => (
            <TextStaggerHover key={g.title} index={i} number={String(i + 1).padStart(2, '0')} text={g.title} />
          ))}
        </div>
        <HoverSliderPanelWrap>
          {data.groups.map((g, i) => (
            <HoverSliderPanel key={g.title} index={i}>
              <div className="hs-card">
                <p className="hs-card__kicker">
                  {String(i + 1).padStart(2, '0')} · {g.items.length} madde
                </p>
                <h4>{g.title}</h4>
                <ul>
                  {g.items.map((t) => (
                    <li key={t}>
                      <Icon name="check" size={18} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </HoverSliderPanel>
          ))}
        </HoverSliderPanelWrap>
      </div>
    </HoverSlider>
  );
}

function Askiya() {
  const { open } = useModal();
  return (
    <div className="askiya">
      <div className="hs__intro">
        <h3 className="h3">{askiya.title}</h3>
        <p className="muted">{askiya.lead}</p>
      </div>
      <ul className="cards cards--4">
        {askiya.cards.map((c) => (
          <li className="card" key={c.title}>
            <span className="card__icon">
              <Icon name={c.icon} />
            </span>
            <h4>{c.title}</h4>
            <p>{c.text}</p>
          </li>
        ))}
      </ul>
      <div className="askiya__cta">
        <p>Ürününüz askıya alma veya kota kapsamında mı? Birlikte değerlendirelim.</p>
        <button className="btn btn--primary" onClick={() => open('teklif')}>
          Bilgi ve teklif alın
          <Icon name="arrowRight" size={18} />
        </button>
      </div>
    </div>
  );
}

export function Customs() {
  const [tab, setTab] = useState('ithalat');

  return (
    <section className="section section--surface" id="gumruk" aria-labelledby="customs-title">
      <div className="wrap">
        <div className="section__head section__head--row">
          <div>
            <Reveal as="p" className="eyebrow eyebrow--red">
              Gümrük Müşavirliği
            </Reveal>
            <Reveal as="h2" i={1} id="customs-title" className="h2">
              {customs.title}
            </Reveal>
          </div>
          <Reveal as="p" i={2} className="lead">
            {customs.intro}
          </Reveal>
        </div>

        <Reveal i={1}>
          <div className="tabs" role="tablist" aria-label="Gümrük hizmetleri">
            {customs.tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls="customs-panel"
                className={`tabs__btn ${tab === t.id ? 'is-active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="customs__panel" id="customs-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab}>
            {tab === 'askiya' ? <Askiya /> : <GroupedItems data={groupsByTab[tab]} id={tab} />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
