import { ArrowRight } from "lucide-react";
import { ChipIcon } from "./icons";
import shared from "./shared.module.css";
import s from "./Colleges.module.css";

const CARDS = [
  {
    n: "01",
    label: "VERIFIED PROFILE",
    title: "Build your college profile",
    desc: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.",
    chips: (
      <>
        <span className={`${s.chip} ${s.chipGreen}`}>
          <ChipIcon type="verified" className={s.chipIcon} />
          NAAC A++ Ready
        </span>
        <span className={`${s.chip} ${s.chipMatch}`}>98% Match</span>
      </>
    ),
  },
  {
    n: "02",
    label: "DIRECT ENROLL",
    title: "Students discover and connect",
    desc: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.",
    chips: (
      <>
        <span className={`${s.chip} ${s.chipBlue}`}>
          <ChipIcon type="chat" className={s.chipIcon} />
          Direct Enquiries
        </span>
        <span className={`${s.chip} ${s.chipSlate}`}>
          <i className={s.dotGreen} />
          WHATSAPP / CHAT
        </span>
        <span className={s.chipNote}>Avg. response: &lt;15 min</span>
      </>
    ),
  },
  {
    n: "03",
    label: "CAMPUS RECRUITING",
    title: "Recruiters discover your College",
    desc: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.",
    chips: (
      <>
        <span className={`${s.chip} ${s.chipPurple}`}>
          <ChipIcon type="building" className={s.chipIcon} />
          500+ Hiring Partners
        </span>
        <span className={`${s.chip} ${s.chipIndigo}`}>
          <ChipIcon type="scale" className={s.chipIcon} />
          Connect Directly
        </span>
      </>
    ),
  },
  {
    n: "04",
    label: "LIVE HUD",
    title: "Track placements in real time",
    desc: "Track students, interviews, offers and placements from one centralized dashboard.",
    chips: (
      <>
        <span className={`${s.chip} ${s.chipRed}`}>
          <i className={s.liveDot} />
          LIVE PLACEMENTS
        </span>
        <span className={`${s.chip} ${s.chipSolid}`}>Students · Interviews · Offers</span>
      </>
    ),
  },
];

export default function Colleges() {
  return (
    <section id="colleges" className={`${shared.section} ${s.section}`}>
      <span className={`${shared.glow} ${s.g1}`} aria-hidden="true" />
      <span className={`${shared.glow} ${s.g2}`} aria-hidden="true" />
      <span className={`${shared.glow} ${s.g3}`} aria-hidden="true" />

      <div className={`${shared.inner} ${s.inner}`}>
        <div className={s.copy}>
          <span className={shared.pill}>
            <span className={shared.pillDot} />
            <span className={shared.pillText}>02 • FOR COLLEGES</span>
          </span>
          <h2 className={`${shared.h2} ${s.title}`}>
            Get Discovered
            <br />
            by <span className={shared.blue}>Students and</span>
            <br />
            <span className={shared.blue}>Recruiters.</span>
          </h2>
          <p className={`${shared.lead} ${s.lead}`}>
            Put your college in front of students searching for the right course and recruiters looking for the right
            talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.
          </p>
          <a href="#colleges" className={`${shared.cta} ${s.cta}`}>
            List Your College <ArrowRight strokeWidth={2.5} />
          </a>
        </div>

        <div className={s.cards}>
          {CARDS.map((card) => (
            <article key={card.n} className={s.card}>
              <div className={s.cardLeft}>
                <div className={s.eyebrow}>
                  <span className={s.num}>{card.n}</span>
                  <span className={s.label}>{card.label}</span>
                </div>
                <h3 className={s.cardTitle}>{card.title}</h3>
                <p className={s.cardDesc}>{card.desc}</p>
              </div>
              <div className={s.chips}>{card.chips}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
