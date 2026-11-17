import { useEffect, useState } from "react";
import { NAV } from "../content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const f = () => setStuck(window.scrollY > 8);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  // highlight the nav link of the section in view
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const ids = NAV.map(([, h]) => h).filter((h) => h.startsWith("#")).map((h) => h.slice(1));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`hd${stuck ? " is-stuck" : ""}${open ? " is-open" : ""}`}>
      <div className="hd-in">
        <a className="hd-logo" href="/" aria-label="Kuantam Solutions home">
          <img src="/KuantomSol-02.png" alt="Kuantam Solutions" />
        </a>
        <nav className="hd-nav" aria-label="Primary">
          {NAV.map(([t, h]) => (
            <a key={t} href={h} className={active === h ? "is-active" : ""}>{t}</a>
          ))}
        </nav>
        <button type="button" className="hd-burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="hd-menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div id="hd-menu" className="hd-menu">
          {NAV.map(([t, h]) => (
            <a key={t} href={h} onClick={close}>{t}</a>
          ))}
        </div>
      )}
    </header>
  );
}
