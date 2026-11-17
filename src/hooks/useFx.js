import { useEffect } from "react";

// Pointer effects via one delegated listener (no per-card handlers):
//   [data-spot]     -> --mx / --my  (cursor spotlight on cards)
//   [data-tilt]     -> --rx / --ry  (gentle 3D tilt on cards)
//   [data-parallax] -> --px / --py  (hero visual follows the pointer)
// Only runs for a fine pointer (mouse/trackpad) and when motion is allowed.
export default function useFx({ spot, tilt, parallax }) {
  useEffect(() => {
    const fine = window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    let raf = 0;
    const move = (e) => {
      const t = e.target instanceof Element ? e.target : null;
      if (!t) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const s = spot && t.closest("[data-spot]");
        if (s) {
          const r = s.getBoundingClientRect();
          s.style.setProperty("--mx", `${e.clientX - r.left}px`);
          s.style.setProperty("--my", `${e.clientY - r.top}px`);
        }
        const c = tilt && t.closest("[data-tilt]");
        if (c) {
          const r = c.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          c.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
          c.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
        }
        const p = parallax && t.closest("[data-parallax]");
        if (p) {
          const r = p.getBoundingClientRect();
          p.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
          p.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
        }
      });
    };
    const leave = (e) => {
      const c = e.target instanceof Element && e.target.closest?.("[data-tilt]");
      if (c) { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); }
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerout", leave, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", leave);
    };
  }, [spot, tilt, parallax]);
}
