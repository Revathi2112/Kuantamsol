import { useState } from "react";
import GemMark from "./GemMark";
import { SOCIAL_ICONS, MailIcon } from "./icons";
import { EMAIL, SOCIAL, SUBSCRIBE, COPYRIGHT, NAV } from "../content";
import config from "../config";
import Toast from "./Toast";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [trap, setTrap] = useState(""); // hidden spam-trap field, humans never fill it
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [msg, setMsg] = useState("");
  const [toast, setToast] = useState(null);
  const done = status === "sent";

  const submit = async (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus("error");
      setMsg("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    setMsg("");
    let realSend = true;
    try {
      if (config.mailScript) {
        // Google Apps Script web app. text/plain avoids the CORS preflight Apps Script cannot answer.
        const r = await fetch(config.mailScript, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ kind: "subscribe", website: trap, email: value }),
        });
        const j = await r.json();
        if (!j.ok) throw new Error("send");
      } else {
        realSend = false;
        // No script URL yet: open the visitor's mail app so nothing is silently lost.
        window.location.href =
          "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Subscribe request") +
          "&body=" + encodeURIComponent("Please subscribe this email: " + value);
      }
      setStatus("sent");
      setMsg("Thank you for subscribing!");
      if (realSend)
        setToast({
          id: Date.now(),
          type: "success",
          title: "Thank you for your interest!",
          msg: "You are subscribed. Our team will connect with you shortly.",
        });
    } catch (err) {
      setStatus("error");
      setMsg("Something went wrong. Please try again.");
      setToast({
        id: Date.now(),
        type: "error",
        title: "Subscription failed",
        msg: "We could not add you just now. Please try again in a moment.",
      });
    }
  };

  return (
    <footer className="ft" id="contact">
      <Toast toast={toast} onClose={() => setToast(null)} />
      {/* Subtle brand watermark */}
      <GemMark className="ft-gem" />

      {/* Main Light Footer Container */}
      <div className="ft-in">
        {/* Left: Brand, Email & Social Links */}
        <div className="ft-brand">
          <a className="ft-logo" href="/" aria-label="Kuantam Solutions home">
            <img alt="Kuantam Solutions" src="/KuantomSol-02.png" />
          </a>
          <a className="ft-mail" href={`mailto:${EMAIL}`}>
            <MailIcon />
            <span>{EMAIL}</span>
          </a>
          <div className="ft-soc">
            {SOCIAL.map(([n, h]) => (
              <a
                key={n}
                href={h}
                aria-label={n}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SOCIAL_ICONS[n]}
              </a>
            ))}
          </div>
        </div>

        {/* Middle: Header Navigation Links (Two-Column Layout) */}
        <nav className="ft-nav" aria-label="Footer navigation">
          {NAV.map(([t, h]) => (
            <a key={t} href={h} className="ft-nav-link">
              <span className="ft-nav-dot" aria-hidden="true" />
              <span>{t}</span>
            </a>
          ))}
        </nav>

        {/* Right: Pill Email Subscription */}
        <div className="ft-sub">
          <h3>{SUBSCRIBE.title}</h3>
          <p>{SUBSCRIBE.body}</p>
          <form
            className={`ft-form${done ? " is-done" : ""}`}
            noValidate
            onSubmit={submit}
          >
            <span className="ft-form-ic" aria-hidden="true">
              <MailIcon />
            </span>
            <input
              type="email"
              name="email"
              value={done ? "" : email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              disabled={done || status === "sending"}
              placeholder={
                done ? "Thank you for subscribing!" : "Enter your email address"
              }
              aria-label="Email address"
              aria-invalid={status === "error" ? "true" : "false"}
            />
            <input
              className="hp"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={trap}
              onChange={(e) => setTrap(e.target.value)}
            />
            <button
              type="submit"
              disabled={done || status === "sending"}
              aria-label={done ? "Subscribed" : status === "sending" ? "Sending" : "Subscribe"}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {done ? (
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </form>
          <p className={`ft-msg${status === "error" ? " is-error" : ""}`} role="status" aria-live="polite">
            {status === "error" ? msg : ""}
          </p>
        </div>
      </div>

      {/* Bottom Dark Bar: Copyright (Left) & Powered By (Right) */}
      <div className="ft-bar">
        <div className="ft-bar-in">
          <p className="ft-copy">{COPYRIGHT}</p>
          <p className="ft-powered">
            Powered by{" "}
            <a
              href="https://pulsedigimedia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pulsedigimedia.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}