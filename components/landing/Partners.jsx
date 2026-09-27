import shared from "./shared.module.css";
import s from "./Partners.module.css";

// Box sizes are the Figma layer frames; logos are fitted inside each box.
const LOGOS = [
  { src: "/assets/image 15142.png", alt: "Ginserv", w: 250, h: 79 },
  { src: "/assets/image 15144.png", alt: "Startup Karnataka", w: 364, h: 80 },
  { src: "/assets/image 15143.png", alt: "Government of Karnataka", w: 81, h: 109 },
  { src: "/assets/partner-talentspotify.png", alt: "TalentSpotify", w: 131, h: 110 },
  { src: "/assets/partner-radiant.png", alt: "Radiant Info", w: 115, h: 115 },
  { src: "/assets/partner-dpiit.png", alt: "DPIIT Startup India", w: 290, h: 104 },
];

function LogoSet({ hidden }) {
  return (
    <div className={s.set} aria-hidden={hidden || undefined}>
      {LOGOS.map((logo) => (
        <span key={logo.src} className={s.logoBox} style={{ "--w": logo.w, "--h": logo.h }}>
          <img src={logo.src} alt={hidden ? "" : logo.alt} className={s.logo} />
        </span>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <section className={`${shared.section} ${s.section}`}>
      <h2 className={s.title}>Trusted by partners across India</h2>
      <div className={s.marquee}>
        <div className={s.track}>
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </section>
  );
}
