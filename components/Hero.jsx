import { ArrowRight, Bell, Zap } from "lucide-react";
import Header from "./Header";
import OptionCard from "./OptionCard";
import styles from "./Hero.module.css";

const OPTIONS = [
  {
    type: "college",
    badge: "Coming Soon",
    title: "College",
    description: ["Explore colleges, courses,fees,", "placements & more"],
    features: [
      "Search by course, location, fees",
      "Connect directly with colleges",
      "Improve student placements",
    ],
    cta: { label: "Join Waitlist", href: "#waitlist-college", icon: <Bell size={14} /> },
  },
  {
    type: "job",
    badge: "Available Now",
    title: "I'm Looking for a Job",
    description: ["Upload your resume. We'll find jobs", "that fit you."],
    features: [
      "Jobs from 1000+ sources",
      "AI powered matching",
      "WhatsApp & email alerts",
    ],
    checkTone: "rose",
    cta: { label: "Explore Jobs", href: "#jobs", icon: <ArrowRight size={15} /> },
  },
  {
    type: "hiring",
    badge: "Coming Soon",
    title: "I'm Hiring",
    description: [
      "Connect with colleges and find",
      "candidates — from students to graduates.",
    ],
    features: [
      "Connect directly with colleges",
      "Find the right candidates",
      "Simplify your hiring",
    ],
    cta: { label: "Join Waitlist", href: "#waitlist-hiring", icon: <Bell size={14} /> },
  },
];

const MATCHED_AVATARS = [
  { initials: "AK", color: "#3C82F6" },
  { initials: "PR", color: "#5047E5" },
  { initials: "SN", color: "#07B6D4" },
];

export default function Hero() {
  return (
    <section className={styles.root} aria-labelledby="hero-title">
      <div className={styles.stage}>
        <div className={styles.headerSlot}>
          <Header />
        </div>

        {/* ---------- Floating highlights ---------- */}
        <aside className={`${styles.float} ${styles.whatsapp}`}>
          <p className={styles.floatTitleRow}>
            <img src="/assets/Icons.svg" alt="" width={20} height={20} className={styles.whatsappIcon} />
            <span className={styles.whatsappTitle}>WhatsApp Alert</span>
          </p>
          <p className={styles.floatHeading}>Get notified on whatsapp</p>
          <p className={styles.floatBody}>
            You&apos;ll get all important
            <br />
            updates on your whatsapp
          </p>
        </aside>

        <aside className={`${styles.float} ${styles.resume}`}>
          <p className={styles.floatTitleRow}>
            <Zap size={15} fill="#7F3DFF" color="#7F3DFF" className={styles.boltIcon} />
            <span className={styles.resumeTitle}>Resume Builder</span>
          </p>
          <p className={styles.floatHeading}>Build Your Resume</p>
          <p className={styles.floatBody}>
            Our resume builder gives you
            <br />
            dynamic options to build better &amp;
            <br />
            faster resume that got you hired
          </p>
        </aside>

        <aside className={`${styles.chip} ${styles.students}`}>
          <span className={styles.avatars}>
            {MATCHED_AVATARS.map((a) => (
              <span
                key={a.initials}
                className={styles.avatar}
                style={{ background: a.color }}
              >
                {a.initials}
              </span>
            ))}
          </span>
          <span className={styles.chipText}>
            <span className={styles.chipMain}>
              <i className={styles.liveDot} aria-hidden="true" />
              <span aria-hidden="true">🔥</span> 142 students matched today
            </span>
            <span className={styles.chipSub}>Just now • IIT, BITS, VIT</span>
          </span>
        </aside>

        <aside className={`${styles.chip} ${styles.recruiter}`}>
          <span className={styles.recruiterLogo} aria-hidden="true">
            💼
          </span>
          <span className={styles.chipText}>
            <span className={styles.chipMain}>
              <span className={styles.recruiterName}>Radiant Info</span>
              <span className={styles.recruiterAction}>
                shortlisted 8 interns
              </span>
            </span>
            <span className={styles.verified}>
              <i className={styles.verifiedDot} aria-hidden="true" />
              Verified recruiter • 2 days ago
            </span>
          </span>
        </aside>

        {/* ---------- Headline ---------- */}
        <div className={styles.center}>
          <span className={styles.aiPill}>
            <img src="/assets/SVGRepo_iconCarrier.svg" alt="" width={26} height={20} className={styles.aiIcon} />
            AI-Powered Campus Assistant
          </span>

          <h1 id="hero-title" className={styles.title}>
            Connect <span className={styles.titleAccent}>10X Faster.</span>
          </h1>

          <p className={styles.subtitle}>
            One platform connecting students, colleges &amp; employers — faster.
          </p>

          <h2 className={styles.question}>
            <img src="/assets/SparkleIcon.svg" alt="" width={26} height={19} className={styles.sparkle} />
            What are you looking for?
            <img src="/assets/SparkleIcon.svg" alt="" width={26} height={19} className={`${styles.sparkle} ${styles.sparkleRight}`} />
          </h2>
        </div>

        {/* ---------- Options ---------- */}
        <div className={styles.cards}>
          {OPTIONS.map((option) => (
            <OptionCard key={option.type} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
}
