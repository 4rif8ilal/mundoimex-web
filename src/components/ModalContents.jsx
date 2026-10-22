import { useState } from 'react';
import { Icon } from './Icons.jsx';
import { company, egumruk, quoteServices } from '../data/content.js';

/* Form gönderimi sunucu gerektirmez: kullanıcının e-posta uygulaması hazır mesajla açılır. */
function mailto(subject, lines) {
  const body = lines.map(([k, v]) => `${k}: ${v || '-'}`).join('\n');
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Field({ label, children }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      {children}
    </label>
  );
}

function FormShell({ onSubmit, note, submit, children }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        onSubmit(data);
        setSent(true);
      }}
    >
      {children}
      <div className="form__foot">
        <button className="btn btn--primary" type="submit">
          {submit}
          <Icon name="arrowRight" size={18} />
        </button>
        <p className="form__note">{sent ? 'E-posta uygulamanız mesajla birlikte açıldı. Göndererek tamamlayın.' : note}</p>
      </div>
    </form>
  );
}

export function QuoteForm() {
  return (
    <FormShell
      submit="Teklif iste"
      note="Gönder’e bastığınızda e-posta uygulamanız hazır mesajla açılır."
      onSubmit={(d) => {
        window.location.href = mailto('Teklif talebi', [
          ['Ad Soyad', d.name],
          ['Firma', d.company],
          ['Telefon', d.phone],
          ['E-posta', d.email],
          ['Hizmet', d.service],
          ['Güzergâh / yük bilgisi', d.route],
          ['Not', d.message],
        ]);
      }}
    >
      <div className="form__grid">
        <Field label="Ad soyad">
          <input name="name" required autoComplete="name" />
        </Field>
        <Field label="Firma">
          <input name="company" autoComplete="organization" />
        </Field>
        <Field label="Telefon">
          <input name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field label="E-posta">
          <input name="email" type="email" required autoComplete="email" />
        </Field>
      </div>
      <Field label="Hizmet">
        <select name="service" defaultValue={quoteServices[0]}>
          {quoteServices.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>
      <Field label="Güzergâh ve yük bilgisi">
        <input name="route" placeholder="Örn. İstanbul → Hamburg, 2 palet, 800 kg" />
      </Field>
      <Field label="Mesajınız">
        <textarea name="message" rows="3" />
      </Field>
    </FormShell>
  );
}

export function CareerForm() {
  return (
    <FormShell
      submit="Başvuruyu gönder"
      note="CV’nizi açılan e-postaya ek olarak eklemeyi unutmayın."
      onSubmit={(d) => {
        window.location.href = mailto('Kariyer başvurusu', [
          ['Ad Soyad', d.name],
          ['Telefon', d.phone],
          ['E-posta', d.email],
          ['Pozisyon', d.position],
          ['Deneyim', d.experience],
          ['Not', d.message],
        ]);
      }}
    >
      <div className="form__grid">
        <Field label="Ad soyad">
          <input name="name" required autoComplete="name" />
        </Field>
        <Field label="Telefon">
          <input name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field label="E-posta">
          <input name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label="Başvurulan pozisyon">
          <input name="position" placeholder="Örn. Gümrük müşavir yardımcısı" />
        </Field>
      </div>
      <Field label="Deneyim">
        <select name="experience" defaultValue="0-2 yıl">
          <option>0-2 yıl</option>
          <option>3-5 yıl</option>
          <option>6-10 yıl</option>
          <option>10 yıldan fazla</option>
        </select>
      </Field>
      <Field label="Kendinizden bahsedin">
        <textarea name="message" rows="4" />
      </Field>
    </FormShell>
  );
}

export function EgumrukContent() {
  return (
    <div className="egumruk">
      <p className="egumruk__intro">{egumruk.intro}</p>
      <dl className="terms">
        {egumruk.terms.map((t) => (
          <div className="terms__item" key={t.abbr}>
            <dt>
              <span className="terms__abbr">{t.abbr}</span>
              <span className="terms__name">{t.name}</span>
            </dt>
            <dd>{t.text}</dd>
          </div>
        ))}
      </dl>
      {egumruk.body.map((p) => (
        <p key={p.slice(0, 24)} className="egumruk__p">
          {p}
        </p>
      ))}
    </div>
  );
}

export function ContactContent() {
  return (
    <div className="contact">
      <ContactList />
      <div className="contact__map">
        <iframe
          title="Mundoimex ofis konumu, Google Haritalar"
          src={company.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a className="btn btn--line contact__route" href={company.mapUrl} target="_blank" rel="noreferrer">
        Google Haritalar’da yol tarifi al
        <Icon name="arrow" size={18} />
      </a>
    </div>
  );
}

export function ContactList({ inverse = false }) {
  const tel = `tel:+9${company.phone.replace(/\s/g, '')}`;
  return (
    <ul className={`clist ${inverse ? 'clist--inverse' : ''}`}>
      <li>
        <Icon name="phone" />
        <div>
          <span className="clist__k">Telefon</span>
          <a href={tel}>{company.phone}</a>
        </div>
      </li>
      <li>
        <Icon name="fax" />
        <div>
          <span className="clist__k">Faks</span>
          <span>{company.fax}</span>
        </div>
      </li>
      <li>
        <Icon name="mail" />
        <div>
          <span className="clist__k">E-posta</span>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </li>
      <li>
        <Icon name="pin" />
        <div>
          <span className="clist__k">Adres</span>
          <address>{company.address.join(', ')}</address>
        </div>
      </li>
    </ul>
  );
}
