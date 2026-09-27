import { ArrowRight, Calendar, CircleCheck, Zap } from "lucide-react";
import shared from "./shared.module.css";
import s from "./Employers.module.css";

const CARDS = [
  {
    n: "01",
    title: "Post a role in minutes",
    desc: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
    primary: { text: "5 Min Deployment", tone: s.pGreen, Icon: Zap },
    secondary: { text: "500+ Campus Network" },
  },
  {
    n: "02",
    title: "Receive a matched shortlist",
    desc: "Get candidates matched to your role by skills, experience, location and hiring requirements.",
    primary: { text: "Zero CV Clutter", tone: s.pPurple, Icon: CircleCheck },
    secondary: { text: "Tier 1–Tier 3 Parity" },
  },
  {
    n: "03",
    title: "Connect with candidates directly",
    desc: "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
    primary: { text: "In-App Scheduling", tone: s.pBlue, Icon: Calendar },
    secondary: { text: "1-Click Video / Chat" },
  },
  {
    n: "04",
    title: "Reduce your time-to-hire",
    desc: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
    primary: { text: "<2 DAYS", tone: s.pSolid },
    secondary: { text: "57% Faster Hiring", tone: s.sGreen },
  },
];

export default function Employers() {
  return (
    <section id="employers" className={`${shared.section} ${s.section}`}>
      <span className={`${shared.glow} ${s.g1}`} aria-hidden="true" />
      <span className={`${shared.glow} ${s.g2}`} aria-hidden="true" />
      <span className={`${shared.glow} ${s.g3}`} aria-hidden="true" />

      <div className={`${shared.inner} ${s.inner}`}>
        <div className={s.copy}>
          <span className={shared.pill}>
            <span className={shared.pillDot} />
            <span className={shared.pillText}>03 • FOR EMPLOYERS</span>
          </span>
          <h2 className={`${shared.h2} ${s.title}`}>
            Stop running
            <br />
            campus drives.
            <br />
            <span className={shared.blue}>Start hiring the right people.</span>
          </h2>
          <p className={`${shared.lead} ${s.lead}`}>
            Post a role in minutes and reach relevant candidates without the time, travel and coordination of
            traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.
          </p>
          <a href="#employers" className={`${shared.cta} ${s.cta}`}>
            Post a Job <ArrowRight strokeWidth={2.5} />
          </a>
        </div>

        <div className={s.cards}>
          {CARDS.map(({ n, title, desc, primary, secondary }) => (
            <article key={n} className={s.card}>
              <div className={s.info}>
                <span className={s.num}>{n}</span>
                <div className={s.body}>
                  <div className={s.head}>
                    <h3 className={s.cardTitle}>{title}</h3>
                    <span className={s.setup}>INSTANT SETUP</span>
                  </div>
                  <p className={s.cardDesc}>{desc}</p>
                </div>
              </div>
              <div className={s.hud}>
                <span className={`${s.primary} ${primary.tone}`}>
                  {primary.Icon && <primary.Icon className={s.primaryIcon} strokeWidth={2.2} />}
                  {primary.text}
                </span>
                <span className={`${s.secondary} ${secondary.tone || ""}`}>{secondary.text}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
