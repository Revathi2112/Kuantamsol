import { HERO } from "../content";
import GemMark from "./GemMark";
import config from "../config";

/* ---------- Enhanced Revenue Transformation & Growth Visual ---------- */
function RevenueGrowthVisual() {
  return (
    <div className="rev-hero-stage" aria-hidden="true">
      {/* Dynamic ambient background aura */}
      <div className="rev-aura" />

      {/* Main Glassmorphic Dashboard Panel */}
      <div className="rev-board">
        <div className="rev-board-header">
          <div className="rev-board-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="rev-board-status">
            <span className="rev-live-dot" />
            <span className="rev-status-tag">TRANSFORMATION ENGINE</span>
          </div>
        </div>

        {/* Dynamic SVG Analytics Layer */}
        <svg className="rev-svg" viewBox="0 0 520 340" fill="none">
          <defs>
            <linearGradient id="revAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C42B8F" stopOpacity="0.32" />
              <stop offset="65%" stopColor="#7F3F98" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#7F3F98" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="revStrokeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7F3F98" />
              <stop offset="45%" stopColor="#9C3A9B" />
              <stop offset="100%" stopColor="#C42B8F" />
            </linearGradient>
            <linearGradient id="barG1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A872BE" /><stop offset="1%" stopColor="#7F3F98" />
            </linearGradient>
            <linearGradient id="barG2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D0309A" /><stop offset="1" stopColor="#9C3A9B" />
            </linearGradient>
            <linearGradient id="barG3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F266B5" /><stop offset="1" stopColor="#C42B8F" />
            </linearGradient>
          </defs>

          {/* Grid Guideline Mesh */}
          <line x1="40" y1="80" x2="480" y2="80" stroke="rgba(70, 48, 79, 0.08)" strokeDasharray="4 6" />
          <line x1="40" y1="150" x2="480" y2="150" stroke="rgba(70, 48, 79, 0.08)" strokeDasharray="4 6" />
          <line x1="40" y1="220" x2="480" y2="220" stroke="rgba(70, 48, 79, 0.08)" strokeDasharray="4 6" />
          <line x1="40" y1="290" x2="480" y2="290" stroke="rgba(70, 48, 79, 0.15)" />

          {/* Background Gem Motif Watermark */}
          <g transform="translate(300, 40) scale(0.48)" stroke="rgba(127, 63, 152, 0.08)" strokeWidth="2.5" fill="none">
            <polygon points="90,30 310,30 385,125 200,330 15,125" />
            <path d="M15 125H385M90 30L140 125L200 330M310 30L260 125L200 330M140 125L200 30L260 125" />
          </g>

          {/* Stepped Performance Bars */}
          <g className="rev-bars">
            <rect x="75" y="200" width="36" height="90" rx="4" fill="url(#barG1)" opacity="0.85" className="rev-bar-el b1" />
            <rect x="150" y="160" width="36" height="130" rx="4" fill="url(#barG1)" opacity="0.9" className="rev-bar-el b2" />
            <rect x="225" y="125" width="36" height="165" rx="4" fill="url(#barG2)" opacity="0.95" className="rev-bar-el b3" />
            <rect x="300" y="85" width="36" height="205" rx="4" fill="url(#barG2)" className="rev-bar-el b4" />
            <rect x="375" y="45" width="36" height="245" rx="4" fill="url(#barG3)" className="rev-bar-el b5" />
          </g>

          {/* Upward Growth Curved Area */}
          <path
            d="M 60 250 C 140 230, 200 170, 290 120 S 410 40, 460 30 L 460 290 L 60 290 Z"
            fill="url(#revAreaGrad)"
          />

          {/* Exponential Trajectory Curve */}
          <path
            className="rev-curve"
            d="M 60 250 C 140 230, 200 170, 290 120 S 410 40, 460 30"
            fill="none"
            stroke="url(#revStrokeGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Pulsing Trajectory Data Nodes */}
          <circle cx="150" cy="210" r="5" fill="#fff" stroke="#7F3F98" strokeWidth="2.5" />
          <circle cx="280" cy="130" r="5" fill="#fff" stroke="#9C3A9B" strokeWidth="2.5" />
          <circle className="rev-beacon" cx="460" cy="30" r="14" fill="#C42B8F" opacity="0.25" />
          <circle cx="460" cy="30" r="7" fill="#fff" stroke="#C42B8F" strokeWidth="3" />
        </svg>
      </div>

      {/* Floating 3D Metric Card 1: Performance Surge */}
      <div className="rev-float-badge rev-badge-top">
        <div className="rev-badge-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        </div>
        <div className="rev-badge-info">
          <span className="rev-badge-kpi">+148%</span>
          <span className="rev-badge-lbl">Revenue Velocity</span>
        </div>
      </div>

      {/* Floating 3D Metric Card 2: Precision Gem Security */}
      <div className="rev-float-badge rev-badge-bottom">
        <GemMark className="rev-badge-gem" />
        <div className="rev-badge-info">
          <span className="rev-badge-kpi">End-to-End</span>
          <span className="rev-badge-lbl">Lead-to-Revenue</span>
        </div>
      </div>
    </div>
  );
}

/* Fallback mappings if switching in config */
const VISUALS = {
  growth: RevenueGrowthVisual,
  iso: RevenueGrowthVisual,
  network: RevenueGrowthVisual,
};

export default function Hero() {
  const Vis = VISUALS[config.heroVisual] || RevenueGrowthVisual;

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow" data-rv>{HERO.eyebrow}</p>
          <h1 id="hero-title" data-rv style={{ "--d": ".08s" }}>{HERO.title}</h1>
          <p className="lead" data-rv style={{ "--d": ".16s" }}>{HERO.body}</p>
        </div>
        <div className="hero-vis" data-rv style={{ "--d": ".2s" }}>
          <Vis />
        </div>
      </div>
    </section>
  );
}