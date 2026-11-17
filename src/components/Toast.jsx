import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Professional toast notification. Usage: <Toast toast={{id, type: "success" | "error", title, msg}} onClose={fn} />
export default function Toast({ toast, onClose }) {
  const [out, setOut] = useState(false);
  const timer = useRef(null);
  const left = useRef(6500);
  const start = useRef(0);

  const dismiss = () => {
    setOut(true);
    setTimeout(onClose, 300);
  };
  const run = () => {
    start.current = Date.now();
    timer.current = setTimeout(dismiss, left.current);
  };
  const pause = () => {
    clearTimeout(timer.current);
    left.current = Math.max(1200, left.current - (Date.now() - start.current));
  };

  useEffect(() => {
    if (!toast) return;
    setOut(false);
    left.current = 6500;
    run();
    return () => clearTimeout(timer.current);
  }, [toast && toast.id]);

  if (!toast) return null;
  const ok = toast.type === "success";

  return createPortal(
    <div className="toasts">
      <div
        className={`toast ${ok ? "ok" : "er"}${out ? " out" : ""}`}
        role={ok ? "status" : "alert"}
        onMouseEnter={pause}
        onMouseLeave={run}
        onFocus={pause}
        onBlur={run}
      >
        <span className="t-ic" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            {ok ? <path d="M5 12.5l4.5 4.5L19 7.5" /> : <path d="M12 7v6M12 17h.01" />}
          </svg>
        </span>
        <div className="t-tx">
          <strong>{toast.title}</strong>
          <p>{toast.msg}</p>
        </div>
        <button type="button" className="t-x" aria-label="Dismiss notification" onClick={dismiss}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <i className="t-bar" aria-hidden="true" />
      </div>
    </div>,
    document.body
  );
}
