# Kuantam Solutions — Version 4

Premium Corporate — Playfair Display + Inter. Hairline structure, squared corners, editorial numbered service rows, uppercase nav, offset-shadow cards, restrained motion.

React + Vite + Tailwind CSS (same stack as your project, **no new dependencies**). Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
```

## Where things are
| What | File |
|---|---|
| **All website text (verbatim from kuantamsol.com)** | `src/content.js` |
| Shared layout + design tokens | `src/base.css` |
| This version's look | `src/versions/v4.css` |
| Hero visual + effects switches | `src/config.js` |
| Sections | `src/components/Sections.jsx`, `Hero.jsx`, `Footer.jsx`, `Header.jsx`, `Topbar.jsx` |

## Content notes
- Only sections you asked for: top bar, header, hero, Kuantam Points, How It Work?, Key Features, and the footer (email, social links, Subscribe Now, copyright). No other sections or text were added.
- All text lives in `src/content.js`, word for word from kuantamsol.com (including headings such as "How It Work?").
- "About Us" still points to #aboutus, which has no target section (as in your original).
- Subscribe form: add your mailing-list call at the TODO in `Footer.jsx`.
- Animations respect prefers-reduced-motion.
