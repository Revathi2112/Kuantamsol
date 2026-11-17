const p = { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 2.25, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const ICONS = {
  plan: (<svg {...p}><circle cx="24" cy="24" r="16" /><circle cx="24" cy="24" r="5" /><path d="M24 4v8M24 36v8M4 24h8M36 24h8" /></svg>),
  exec: (<svg {...p}><path d="M8 36l14-14 6 6 14-14" /><path d="M32 14h10v10" /></svg>),
  data: (<svg {...p}><path d="M10 38V26M22 38V16M34 38V8" /><path d="M6 42h36" /></svg>),
  ai: (<svg {...p}><path d="M24 6l4 12 12 4-12 4-4 12-4-12-12-4 12-4z" /></svg>),
  cust: (<svg {...p}><circle cx="24" cy="16" r="8" /><path d="M8 42c2-10 9-14 16-14s14 4 16 14" /></svg>),
  pers: (<svg {...p}><path d="M6 14h36M6 24h36M6 34h36" /><circle cx="16" cy="14" r="3.5" fill="currentColor" /><circle cx="32" cy="24" r="3.5" fill="currentColor" /><circle cx="22" cy="34" r="3.5" fill="currentColor" /></svg>),
  rt: (<svg {...p}><path d="M4 26h8l5-14 8 26 5-12h14" /></svg>),
  scale: (<svg {...p}><path d="M30 8h10v10M18 40H8V30M40 8L28 20M8 40l12-12" /></svg>),
  globe: (<svg {...p}><circle cx="24" cy="24" r="17" /><ellipse cx="24" cy="24" rx="7" ry="17" /><path d="M7 24h34" /></svg>),
};

const s = { viewBox: "0 0 24 24", "aria-hidden": true };
export const SOCIAL_ICONS = {
  Facebook: (<svg {...s}><path className="f" d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" /></svg>),
  LinkedIn: (<svg {...s}><path className="f" d="M4 9h4v11H4zM6 3.5a2.2 2.2 0 110 4.4 2.2 2.2 0 010-4.4zM10 9h3.8v1.6c.6-1 1.9-1.9 3.8-1.9 3.5 0 4.4 2.3 4.4 5.3V20h-4v-5.2c0-1.3-.1-2.8-1.8-2.8s-2.2 1.2-2.2 2.7V20h-4z" /></svg>),
  Instagram: (<svg {...s}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className="f" cx="17.5" cy="6.5" r="1.2" /></svg>),
};

export const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3.5 7.5l8.5 6 8.5-6" /></svg>
);
export const Arrow = () => (
  <svg className="arr" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
);
