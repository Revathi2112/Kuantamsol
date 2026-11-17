import { useState } from "react";
import SectionHead from "./SectionHead";
import GemMark from "./GemMark";
import { ICONS } from "./icons";
import {
  POINTS,
  POINTS_TITLE,
  STEPS,
  STEPS_TITLE,
  FEATURES,
  FEATURES_TITLE,
} from "../content";

const rv = (i = 0, step = 0.1) => ({
  "data-rv": true,
  style: { "--d": `${i * step}s` },
});

/* ===================== Kuantam Points (Unchanged) ===================== */
export function KuantamPoints() {
  return (
    <section id="keypoints" className="sec sec-points">
      <div className="wrap">
        <SectionHead title={POINTS_TITLE} />

        <div className="kp-stage">
          <div className="kp-track-line" aria-hidden="true">
            <span className="kp-track-beam" />
          </div>

          <div className="kp-grid">
            {POINTS.map((x, i) => (
              <div key={x.t} className={`kp-col kp-step-${i + 1}`} {...rv(i, 0.14)}>
                <div className="kp-prism" tabIndex={0}>
                  <div className="kp-depth-shadow" aria-hidden="true" />
                  <div className="kp-glass-face">
                    <div className="kp-specular" aria-hidden="true" />
                    <GemMark className="kp-gem-3d" />
                    <div className="kp-top-row">
                      <div className="kp-float-orb">
                        <div className="kp-orb-halo" />
                        <div className="kp-orb-ic">{ICONS[x.k]}</div>
                      </div>
                      <div className="kp-stage-indicator">
                        <span className="kp-pulse-dot" />
                        <span className="kp-stage-tag">{`STAGE 0${i + 1}`}</span>
                      </div>
                    </div>
                    <div className="kp-content-3d">
                      <h3 className="kp-title">{x.t}</h3>
                      <p className="kp-desc">{x.d}</p>
                    </div>
                    <div className="kp-energy-bar" aria-hidden="true" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== How It Work? (Vertical Timeline Layout) ===================== */
export function HowItWorks() {
  return (
    <section id="howitworks" className="sec sec-steps">
      <div className="wrap st-layout">
        <div className="st-left">
          <SectionHead title={STEPS_TITLE} />
        </div>

        <div className="st-right">
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.t} className="st-item" {...rv(i, 0.12)}>
                <span className="st-n" aria-hidden="true">
                  <span className="st-n-dot" />
                </span>
                <article className="st-c" data-spot>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ===================== Key Features (Interactive Split Showcase) ===================== */
export function KeyFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = FEATURES.length;
  const activeFeature = FEATURES[activeIndex] || FEATURES[0];

  const pad = (n) => String(n + 1).padStart(2, "0");
  const totalPad = String(total).padStart(2, "0");

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const progressPct = ((activeIndex + 1) / total) * 100;

  return (
    <section id="features" className="sec sec-features">
      <div className="wrap">
        <SectionHead title={FEATURES_TITLE} />

        <div className="kf-stage" {...rv(0, 0.08)}>
          {/* Left Feature Navigation Panel */}
          <div className="kf-nav-panel">
            <ul className="kf-nav-list" role="tablist" aria-label={FEATURES_TITLE}>
              {FEATURES.map(({ t }, i) => {
                const isActive = i === activeIndex;
                return (
                  <li key={t} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id={`kf-tab-${i}`}
                      aria-selected={isActive}
                      aria-controls="kf-detail-panel"
                      className={`kf-nav-btn${isActive ? " is-active" : ""}`}
                      onClick={() => setActiveIndex(i)}
                    >
                      <span className="kf-nav-num">{pad(i)}</span>
                      <span className="kf-nav-radio" aria-hidden="true">
                        <span className="kf-nav-radio-dot" />
                      </span>
                      <span className="kf-nav-label">{t}</span>
                      {isActive && (
                        <span className="kf-nav-eq" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Feature Detail Card */}
          <div
            id="kf-detail-panel"
            role="tabpanel"
            aria-labelledby={`kf-tab-${activeIndex}`}
            className="kf-detail-card"
          >
            <div className="kf-card-top">
              <div className="kf-cap-meta">
                <span>TRANSFORMATION CAPABILITY</span>
                <span className="kf-cap-sep" aria-hidden="true">|</span>
                <span className="kf-cap-count">{`${pad(activeIndex)} / ${totalPad}`}</span>
              </div>

              <div className="kf-card-arrows">
                <button
                  type="button"
                  className="kf-arrow-btn"
                  onClick={handlePrev}
                  aria-label="Previous feature"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="kf-arrow-btn"
                  onClick={handleNext}
                  aria-label="Next feature"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div key={activeFeature.t} className="kf-card-body">
              <div className="kf-card-icon" aria-hidden="true">
                {ICONS[activeFeature.k]}
              </div>
              <div className="kf-card-copy">
                <h3 className="kf-card-title">{activeFeature.t}</h3>
                <p className="kf-card-desc">{activeFeature.d}</p>
              </div>
            </div>

            <div className="kf-progress-track" aria-hidden="true">
              <div
                className="kf-progress-fill"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}