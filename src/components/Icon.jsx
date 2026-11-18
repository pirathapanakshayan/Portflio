import { brand } from '../brandPaths'

// Hand-drawn line icons (24x24, stroke based)
const line = {
  desktop: <><rect x="2.5" y="4" width="19" height="12.5" rx="1.5" /><path d="M8 20.5h8M12 16.5v4" /></>,
  web: <><circle cx="12" cy="12" r="9.5" /><path d="M2.5 12h19M12 2.5c3 3.2 3 15.8 0 19M12 2.5c-3 3.2-3 15.8 0 19" /></>,
  data: <><path d="M3 20.5h18" /><rect x="5" y="11" width="3" height="7" /><rect x="10.5" y="6" width="3" height="12" /><rect x="16" y="13" width="3" height="5" /></>,
  db: <><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  uml: <><rect x="2.5" y="3" width="8" height="6" /><rect x="13.5" y="15" width="8" height="6" /><rect x="13.5" y="3" width="8" height="6" /><path d="M10.5 6h3M17.5 9v6" /></>,
  ai: <><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /><path d="M9 15l1.6-6h.8L13 15M9.6 13h3M15 9v6" /></>,
  health: <><path d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11Z" /><path d="M7 12h3l1.5-3 2 5 1.5-2H17" /></>,
  food: <><path d="M3 11h18a9 9 0 0 1-18 0Z" /><path d="M8 7c0-1.5 1-2 1-3.5M12 7c0-1.5 1-2 1-3.5M16 7c0-1.5 1-2 1-3.5" /></>,
  judo: <><path d="M4 9l8-5 8 5-3 2v9H7v-9Z" /><path d="M7 13h10M12 4v16" /></>,
  shop: <><path d="M5 8h14l-1 13H6Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
  java: <><path d="M5 10h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5Z" fill="currentColor" stroke="none" /><path d="M16 11.5h1.5a2.5 2.5 0 0 1 0 5H16M8 2.5c-1.2 1.5 1.2 2.2 0 4.5M11 1.5c-1.2 1.5 1.2 2.2 0 4.5M14 2.5c-1.2 1.5 1.2 2.2 0 4.5M3 22.5h16" /></>,
  csharp: <><path d="M12 1.5 21.5 7v10L12 22.5 2.5 17V7Z" /><text x="12" y="15.6" fontSize="9" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="Chakra Petch" fontWeight="700">C#</text></>,
  sql: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  shield: <><path d="M12 1.8 20 5v6c0 5-3.4 9.3-8 11.2C7.4 20.3 4 16 4 11V5Z" /><rect x="9" y="10.5" width="6" height="5" fill="currentColor" stroke="none" /><path d="M10 10.5V9a2 2 0 0 1 4 0v1.5" /></>,
  terminal: <><rect x="2.5" y="4" width="19" height="16" rx="1.5" /><path d="M6.5 9l3 3-3 3M12 15h5" /></>,
  mail: <><rect x="2.5" y="5" width="19" height="14" rx="1.5" /><path d="m3 6 9 7 9-7" /></>,
  arrow: <><path d="M7 17 17 7M9 7h8v8" /></>,
  github: null,
  linkedin: null,
}

const brandExtra = {
  github: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3',
  linkedin: 'M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1ZM7.1 20.5H3.6V9h3.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0',
}

export default function Icon({ name, className = 'w-6 h-6' }) {
  const fill = brand[name] || brandExtra[name]
  if (fill) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d={fill} />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {line[name] || line.terminal}
    </svg>
  )
}
