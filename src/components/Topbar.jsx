import { EMAIL, SOCIAL } from "../content";
import { SOCIAL_ICONS, MailIcon } from "./icons";

// Original top bar: email + social icons.
export default function Topbar() {
  return (
    <div className="tb">
      <div className="tb-in">
        <a className="tb-mail" href={`mailto:${EMAIL}`}><MailIcon />{EMAIL}</a>
        <div className="tb-soc">
          {SOCIAL.map(([n, h]) => (
            <a key={n} href={h} aria-label={n} target="_blank" rel="noopener noreferrer">{SOCIAL_ICONS[n]}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
