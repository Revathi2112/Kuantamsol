import { useEffect, useRef } from "react";

// Thin scroll-progress bar (used by the interactive versions).
export default function Progress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const f = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
      });
    };
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", f); };
  }, []);
  return <div className="progress" aria-hidden="true"><i ref={ref} /></div>;
}
