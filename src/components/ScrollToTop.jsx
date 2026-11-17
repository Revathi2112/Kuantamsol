import { useEffect, useState } from "react";

const RADIUS = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setVisible(scrollY > 320);
      setProgress(docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <button
      type="button"
      className={`scroll-top${visible ? " is-visible" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      title="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg
        className="scroll-top-ring"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="scrollTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F3F98" />
            <stop offset="100%" stopColor="#C42B8F" />
          </linearGradient>
        </defs>
        <circle
          className="scroll-top-track"
          cx="24"
          cy="24"
          r={RADIUS}
        />
        <circle
          className="scroll-top-progress"
          cx="24"
          cy="24"
          r={RADIUS}
          stroke="url(#scrollTopGrad)"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 24 24)"
        />
      </svg>

      <svg
        className="scroll-top-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}