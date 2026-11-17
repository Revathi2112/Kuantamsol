// Title (+ optional original sub-text). No invented eyebrow labels.
export default function SectionHead({ title, sub, center = false }) {
  return (
    <header className={`sh${center ? " sh-c" : ""}`} data-rv>
      <h2>{title}</h2>
      {sub && <p className="sh-sub">{sub}</p>}
    </header>
  );
}
