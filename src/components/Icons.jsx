const paths = {
  pause: <><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></>,
  quota: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" /></>,
  ban: <><circle cx="12" cy="12" r="9" /><path d="M5.6 5.6l12.8 12.8" /></>,
  warehouse: <><path d="M3 10l9-6 9 6v10H3z" /><path d="M8 20v-7h8v7M8 16.5h8" /></>,
  map: <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  boxes: <><path d="M3 8l4.5-2.5L12 8l-4.5 2.5zM12 8l4.5-2.5L21 8l-4.5 2.5z" /><path d="M3 8v5l4.5 2.5M12 8v5M21 8v5l-4.5 2.5M7.5 10.5v5L12 18l4.5-2.5v-5" /></>,
  cart: <><path d="M3 4h2.5l2.2 10.5h9.6L19.5 7H6.4" /><circle cx="9" cy="19" r="1.4" /><circle cx="17" cy="19" r="1.4" /></>,
  forklift: <><path d="M3 6h7v8H3zM10 14h4l2-4V4M3 14v4h11" /><circle cx="6" cy="18.5" r="1.5" /><circle cx="14" cy="18.5" r="1.5" /><path d="M20 4v14" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" /></>,
  phone: <><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  fax: <><path d="M7 8V3h10v5M7 17H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-3" /><rect x="7" y="14" width="10" height="7" /></>,
  close: <><path d="M6 6l12 12M18 6L6 18" /></>,
  arrow: <><path d="M7 17L17 7M8 7h9v9" /></>,
  arrowRight: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  check: <><path d="M5 12.5l4.5 4.5L19 7.5" /></>,
  chevron: <><path d="M9 6l6 6-6 6" /></>,
  left: <><path d="M15 6l-6 6 6 6" /></>,
  truck: <><path d="M2 6h11v10H2zM13 9h4l3 3v4h-7" /><circle cx="6.5" cy="17.5" r="1.8" /><circle cx="16.5" cy="17.5" r="1.8" /></>,
  plane: <><path d="M21 4L3 11l6 2.5L11.5 20 14 14l7-10z" /></>,
  ship: <><path d="M3 13h18l-2.5 5h-13z" /><path d="M6 13V9h4v4M12 13V9h4v4M9 9V6h4v3" /><path d="M3 21c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
};

export function Icon({ name, size = 22, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon ${className}`}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
