/*
 * Lojistik kartları için marka renklerinde, düz vektör araç illüstrasyonları.
 * Eski düşük çözünürlüklü fotoğrafların yerini alır; her ölçüde keskin kalır.
 */

const common = {
  viewBox: '0 0 360 210',
  preserveAspectRatio: 'xMidYMid meet',
  'aria-hidden': true,
};

function Wheel({ cx, cy, r = 15 }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#0b2429" />
      <circle cx={cx} cy={cy} r={r * 0.55} fill="#c9d8db" />
      <circle cx={cx} cy={cy} r={r * 0.2} fill="#0b2429" />
    </g>
  );
}

export function TruckArt() {
  return (
    <svg {...common}>
      {/* yol */}
      <rect x="-600" y="168" width="1560" height="42" fill="#dbe6e8" />
      <path d="M-600 189h1560" stroke="#fff" strokeWidth="3" strokeDasharray="22 16" opacity=".8" />
      <ellipse cx="180" cy="168" rx="150" ry="6" fill="#0b2429" opacity=".12" />

      {/* konteyner dorse */}
      <rect x="14" y="146" width="238" height="10" rx="3" fill="#0b2429" />
      <rect x="14" y="52" width="238" height="96" rx="7" fill="#0b2a30" />
      <g stroke="#12383f" strokeWidth="3">
        {Array.from({ length: 13 }, (_, i) => (
          <path key={i} d={`M${34 + i * 17} 58v84`} />
        ))}
      </g>
      <rect x="14" y="52" width="238" height="14" rx="7" fill="#007f87" />
      <rect x="14" y="132" width="238" height="16" rx="3" fill="#5cd2b0" />
      <text
        x="133"
        y="104"
        textAnchor="middle"
        fontSize="19"
        fontWeight="800"
        letterSpacing="2"
        fill="#fff"
        style={{ fontFamily: 'var(--font)', fontStretch: '125%' }}
      >
        MUNDOIMEX
      </text>
      <path d="M96 114h74" stroke="#f98e18" strokeWidth="3" strokeLinecap="round" />

      {/* çekici */}
      <path d="M258 156V78q0-12 12-12h30q8 0 13 7l22 33q4 5 4 11v39z" fill="#f98e18" />
      <path d="M273 74h26q5 0 8 4l15 24h-49z" fill="#d9ecef" />
      <path d="M278 79h18l10 16h-28z" fill="#fff" opacity=".55" />
      <rect x="258" y="112" width="12" height="44" fill="#d97806" />
      <rect x="332" y="124" width="10" height="9" rx="2" fill="#fff3b0" />
      <rect x="326" y="140" width="18" height="10" rx="2" fill="#0b2429" />
      <path d="M258 146h86" stroke="#d97806" strokeWidth="2" />
      <rect x="254" y="150" width="96" height="10" rx="3" fill="#0b2429" />

      <Wheel cx="52" cy="160" />
      <Wheel cx="86" cy="160" />
      <Wheel cx="214" cy="160" />
      <Wheel cx="300" cy="160" r="17" />
    </svg>
  );
}

export function PlaneArt() {
  return (
    <svg {...common}>
      {/* bulutlar */}
      <g fill="#fff">
        <ellipse cx="70" cy="48" rx="34" ry="10" opacity=".9" />
        <ellipse cx="96" cy="42" rx="22" ry="9" opacity=".9" />
        <ellipse cx="300" cy="170" rx="42" ry="11" opacity=".85" />
        <ellipse cx="270" cy="178" rx="26" ry="8" opacity=".85" />
        <ellipse cx="318" cy="52" rx="26" ry="8" opacity=".7" />
      </g>
      <path d="M18 142H130" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 10" opacity=".9" />

      <g transform="rotate(-9 180 105)">
        {/* uzak kanat */}
        <path d="M200 98l-74-44h26l98 44z" fill="#b9cfd3" />
        {/* gövde */}
        <path d="M34 98c0-10 6-14 20-14h210c42 0 68 8 78 21-10 13-36 21-78 21H54c-14 0-20-4-20-14z" fill="#fff" />
        <path d="M34 98c0 10 6 14 20 14h210c42 0 68-8 78-21 0 0-4 20-80 26H54c-14 0-20-6-20-19z" fill="#e1ebed" />
        <path d="M54 108h236c30 0 50-4 62-10" stroke="#5cd2b0" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* kabin camı */}
        <path d="M322 96c8 1 14 4 18 9-8 4-16 6-28 6l6-13z" fill="#0b2a30" />
        {/* yolcu pencereleri */}
        <g fill="#0b2a30" opacity=".75">
          {Array.from({ length: 13 }, (_, i) => (
            <circle key={i} cx={104 + i * 15} cy="98" r="3.4" />
          ))}
        </g>
        {/* kuyruk */}
        <path d="M48 90L22 40h30l44 50z" fill="#f98e18" />
        <path d="M60 94l-20 12h38l12-14z" fill="#e1ebed" />
        {/* yakın kanat */}
        <path d="M206 108l-84 62h30l112-62z" fill="#d3e2e5" />
        <path d="M206 108l-84 62h12l92-62z" fill="#fff" opacity=".6" />
        {/* motor */}
        <rect x="176" y="134" width="40" height="19" rx="9.5" fill="#0b2a30" />
        <rect x="206" y="137" width="10" height="13" rx="5" fill="#007f87" />
      </g>
    </svg>
  );
}

const containerColors = ['#f98e18', '#007f87', '#d21327', '#5cd2b0', '#fff', '#0b2a30', '#f98e18', '#d21327'];

export function ShipArt() {
  const rows = [0, 1, 2];
  return (
    <svg {...common}>
      {/* güneş / ufuk */}
      <circle cx="292" cy="54" r="22" fill="#fff" opacity=".7" />
      <rect x="-600" y="150" width="1560" height="60" fill="#007f87" opacity=".18" />
      <rect x="-600" y="176" width="1560" height="34" fill="#5cd2b0" opacity=".85" />
      <rect x="-600" y="190" width="1560" height="20" fill="#007f87" />

      {/* konteynerler */}
      {rows.map((r) =>
        Array.from({ length: r === 2 ? 5 : 7 }, (_, i) => (
          <rect
            key={`${r}-${i}`}
            x={124 + i * 25 + (r === 2 ? 25 : 0)}
            y={104 - r * 16}
            width="23"
            height="14.5"
            rx="1.5"
            fill={containerColors[(i * 3 + r * 2) % containerColors.length]}
            stroke="#0b2a30"
            strokeOpacity=".25"
          />
        )),
      )}

      {/* köprü üstü */}
      <rect x="64" y="70" width="46" height="50" rx="3" fill="#fff" />
      <rect x="58" y="62" width="58" height="12" rx="3" fill="#e1ebed" />
      <rect x="70" y="40" width="34" height="22" rx="3" fill="#fff" />
      <path d="M74 46h26v8H74z" fill="#0b2a30" opacity=".8" />
      <g fill="#0b2a30" opacity=".6">
        {[0, 1, 2].map((i) => (
          <rect key={i} x={72 + i * 13} y="84" width="9" height="7" rx="1" />
        ))}
        {[0, 1, 2].map((i) => (
          <rect key={i} x={72 + i * 13} y="98" width="9" height="7" rx="1" />
        ))}
      </g>
      <rect x="82" y="24" width="8" height="18" fill="#f98e18" />
      <rect x="82" y="24" width="8" height="5" fill="#0b2a30" />

      {/* gövde */}
      <path d="M26 120h316l-26 44H62z" fill="#0b2a30" />
      <path d="M32 130h304l-6 10H38z" fill="#12383f" opacity=".7" />
      <path d="M52 152h270l-8 12H62z" fill="#d21327" />
      <path d="M342 120l14-8-6 20z" fill="#0b2a30" />

      {/* dalga */}
      <path
        d="M0 168c22 0 22 8 45 8s22-8 45-8 22 8 45 8 22-8 45-8 22 8 45 8 22-8 45-8 22 8 45 8 22-8 45-8v42H0z"
        fill="#5cd2b0"
        opacity=".85"
      />
      <path
        d="M0 182c22 0 22 7 45 7s22-7 45-7 22 7 45 7 22-7 45-7 22 7 45 7 22-7 45-7 22 7 45 7 22-7 45-7v28H0z"
        fill="#007f87"
      />
    </svg>
  );
}

export const vehicleArt = { kara: <TruckArt />, hava: <PlaneArt />, deniz: <ShipArt /> };
