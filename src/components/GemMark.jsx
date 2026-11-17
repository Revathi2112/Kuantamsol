// The Kuantam gem outline (same geometry as the original project's gem).
export default function GemMark({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 400 360" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" aria-hidden="true">
      <polygon points="90,30 310,30 385,125 200,330 15,125" />
      <path d="M15 125H385M90 30L140 125L200 330M310 30L260 125L200 330M140 125L200 30L260 125" />
    </svg>
  );
}
