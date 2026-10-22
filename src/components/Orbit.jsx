import { Emblem } from './Logo.jsx';
import { Icon } from './Icons.jsx';

/**
 * Logonun yörünge görseli: dönen amblem, iki elips yörünge ve yörüngede etiketler.
 * `chips`: [{ icon, label, at?: [x, y] }].
 *  - `at` yoksa ilk üç etiket eşkenar üçgen düzeninde yerleşir (simetrik).
 *  - `at` varsa etiket, görselin kutusunda %x / %y konumuna konur (serbest yerleşim).
 */
export function Orbit({ chips = [] }) {
  const slots = ['a', 'b', 'c'];
  return (
    <div className="orbit" aria-hidden="true">
      <svg className="orbit__ring orbit__ring--a" viewBox="0 0 400 400">
        <ellipse cx="200" cy="200" rx="190" ry="84" transform="rotate(-20 200 200)" fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="1.5" />
      </svg>
      <svg className="orbit__ring orbit__ring--b" viewBox="0 0 400 400">
        <ellipse cx="200" cy="200" rx="170" ry="64" transform="rotate(24 200 200)" fill="none" stroke="var(--turkuaz)" strokeOpacity=".6" strokeWidth="1.5" strokeDasharray="2 8" />
      </svg>
      <div className="orbit__core">
        <Emblem size={320} spin />
      </div>
      {chips.map((c, n) =>
        c.at ? (
          <span
            key={c.label}
            className="orbit__chip orbit__chip--free"
            style={{ '--x': `${c.at[0]}%`, '--y': `${c.at[1]}%`, '--d': `${-c.at[1] / 20}s` }}
          >
            <Icon name={c.icon} size={18} /> {c.label}
          </span>
        ) : (
          <span key={c.label} className={`orbit__chip orbit__chip--${slots[n]}`}>
            <Icon name={c.icon} size={18} /> {c.label}
          </span>
        ),
      )}
    </div>
  );
}
