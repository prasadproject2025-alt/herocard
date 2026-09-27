"use client";

import { useEffect, useState } from "react";
import { ArrowRight, BadgeCheck, Check, Search, Zap } from "lucide-react";
import { FeedMetaIcon, GoogleLogo, HandArrow, IimbLogo, NotionLogo } from "./icons";
import shared from "./shared.module.css";
import s from "./OpportunityCarousel.module.css";

const SLIDES = 3;

const STEPS = [
  { n: "01", title: "Set your preferences", desc: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.", tag: "Smart Profile", tone: s.tagIndigo },
  { n: "02", title: "Discover relevant opportunities", desc: "Explore colleges and career opportunities matched to your profile, interests and goals", tag: "AI Ranked", tone: s.tagSlate },
  { n: "03", title: "Get notified when something fits", desc: "Get notified when a relevant college or new opportunity is found, so you can act early.", tag: "Instant Alerts", tone: s.tagGreen },
];

const FEED = [
  {
    logo: <IimbLogo className={s.logoIimb} />,
    title: "IIM Bangalore",
    chip: "Top College",
    chipTone: s.chipPurple,
    meta: [["book", "MBA"], ["pin", "Bengaluru"]],
    pay: "₹ 3L+",
    note: "India's premier management institute with global exposer...",
    cta: "View Details",
  },
  {
    logo: <GoogleLogo className={s.logoMark} />,
    title: "Product Intern",
    chip: "Internship",
    chipTone: s.chipBlue,
    meta: [["pin", "Bengaluru"], ["monitor", "Hybrid"]],
    pay: "₹ 35K/mo",
    note: "Work on real products, learn from top engineers and build...",
    cta: "Apply Now",
  },
  {
    logo: <NotionLogo className={s.logoMark} />,
    title: "Marketing Gig",
    chip: "Freelance",
    chipTone: s.chipGreen,
    meta: [["home", "Remote"], ["briefcase", "Freelance"]],
    pay: "₹ 10K - ₹ 25K",
    note: "Create content and help with social media campaigns for...",
    cta: "View Details",
  },
];

const COLLEGES = [
  { short: "IIT", name: "IIM Bangalore", match: "96% match", tone: s.cLogoWarm, verified: true },
  { short: "CH", name: "Christ University", match: "93% match", tone: s.cLogoBlue },
  { short: "JAIN", name: "Jain University", match: "89% match", tone: s.cLogoPurple },
];

const DISCOVERY = [
  { n: "01", title: "Filter by what matters", desc: "Find colleges based on course, fees, location, placements and your goals." },
  { n: "02", title: "Explore your options", desc: "Put the important college information side by side before you decide." },
  { n: "03", title: "Connect directly with admission officers", desc: "Ask questions, clarify eligibility, and get answers before you apply." },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Pill({ children }) {
  return (
    <span className={shared.pill}>
      <span className={shared.pillDot} />
      <span className={shared.pillText}>{children}</span>
    </span>
  );
}

function OpportunityDiscovery() {
  return (
    <div className={`${s.frame} ${s.f1}`}>
      <div className={`${s.col} ${s.fromLeft} ${s.f1Left}`}>
        <Pill>01 • OPPORTUNITY DISCOVERY</Pill>
        <h2 className={`${shared.h2} ${s.f1Title}`}>
          Stop searching.
          <br />
          <span className={shared.blue}>Start getting matched.</span>
        </h2>
        <p className={`${shared.lead} ${s.f1Lead}`}>
          Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job
          sources, find opportunities that match you, <br className={s.deskBreak} />
          and notify you when they appear.
        </p>
        <ol className={s.steps}>
          {STEPS.map((step, i) => (
            <li key={step.n} className={`${s.step} ${i === 0 ? s.stepActive : ""}`}>
              <span className={s.stepNum}>{step.n}</span>
              <div className={s.stepBody}>
                <div className={s.stepHead}>
                  <h3 className={s.stepTitle}>{step.title}</h3>
                  <span className={`${s.stepTag} ${step.tone}`}>{step.tag}</span>
                </div>
                <p className={s.stepDesc}>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <button type="button" className={`${shared.cta} ${s.exploreBtn}`} onClick={() => scrollToId("jobs")}>
          Explore opportunities <ArrowRight strokeWidth={2.5} />
        </button>
      </div>

      <div className={`${s.col} ${s.fromRight} ${s.f1Right}`}>
        <div className={s.feedCard}>
          <div className={s.feedHeader}>
            <div className={s.feedBrand}>
              <span className={s.feedFlash}>
                <Zap fill="currentColor" strokeWidth={0} />
              </span>
              <div>
                <h3 className={s.feedTitle}>CampusPe Opportunity Feed</h3>
                <p className={s.feedSub}>Colleges &amp; opportunities matched to you</p>
              </div>
            </div>
            <span className={s.feedLive}>
              <span className={s.feedLiveDot} />
              12 new matches today
            </span>
          </div>

          <div className={s.tabs}>
            {["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"].map((tab, i) => (
              <span key={tab} className={`${s.tab} ${i === 0 ? s.tabActive : ""}`}>
                {tab}
              </span>
            ))}
          </div>

          <div className={s.feedList}>
            {FEED.map((item) => (
              <div key={item.title} className={s.feedItem}>
                <div className={s.feedRow}>
                  <div className={s.feedMain}>
                    <span className={s.feedLogo}>{item.logo}</span>
                    <div className={s.feedText}>
                      <div className={s.feedTitleRow}>
                        <h4 className={s.feedItemTitle}>{item.title}</h4>
                        <span className={`${s.chip} ${item.chipTone}`}>{item.chip}</span>
                      </div>
                      <div className={s.metaRow}>
                        {item.meta.map(([icon, label]) => (
                          <span key={label} className={s.meta}>
                            <FeedMetaIcon type={icon} className={s.metaIcon} />
                            {label}
                          </span>
                        ))}
                        <span className={s.pay}>{item.pay}</span>
                      </div>
                    </div>
                  </div>
                  <button type="button" className={s.feedAction}>
                    {item.cta}
                  </button>
                </div>
                <p className={s.feedNote}>{item.note}</p>
              </div>
            ))}
          </div>

          <div className={s.feedFooter}>
            <a href="#jobs" className={s.feedLink} onClick={(e) => { e.preventDefault(); scrollToId("jobs"); }}>
              View all matched opportunities <ArrowRight strokeWidth={2.2} />
            </a>
            <span className={s.feedMeta}>Curated for you • Updated daily</span>
          </div>
        </div>

        <div className={s.handNote}>
          <HandArrow className={s.handArrow} />
          <p className={s.handText}>
            A mix of colleges, jobs,
            <br />
            internships and gigs — all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}

function StudentExperience() {
  return (
    <div className={`${s.frame} ${s.f2}`}>
      <div className={`${s.col} ${s.fromLeft} ${s.f2Left}`}>
        <Pill>01 • FOR STUDENTS</Pill>
        <h2 className={`${shared.h2} ${s.f2Title}`}>
          Fresh opportunities.
          <br />
          <span className={shared.blue}>Direct recruiter access.</span>
        </h2>
        <p className={`${shared.lead} ${s.f2Lead}`}>
          <strong>Stop spending searching for jobs across hundreds of websites.</strong>
          <br />
          CampusPe continuously scans <strong>1,000+ company career pages</strong>, refreshes opportunities{" "}
          <strong>every 2 hours</strong>, and surfaces the roles that match you all in one place.
        </p>
        <a href="#jobs" className={s.studentLink} onClick={(e) => { e.preventDefault(); scrollToId("jobs"); }}>
          <span>See full student experience</span>
          <span className={s.studentLinkIcon}>
            <ArrowRight strokeWidth={2.5} />
          </span>
        </a>
      </div>

      <div className={`${s.col} ${s.fromRight} ${s.f2Right}`}>
        <article className={s.sCard}>
          <div className={s.sMain}>
            <span className={`${s.sNum} ${s.sNumActive}`}>01</span>
            <div className={s.sBody}>
              <div className={s.sHead}>
                <h3 className={s.sTitle}>
                  Discover jobs from
                  <br />
                  1,000+ sources
                </h3>
                <span className={`${s.sBadge} ${s.badgeBlue}`}>AI RANKED</span>
              </div>
              <p className={s.sDesc}>
                Full-time jobs, internships, part-time roles, freelance and gig opportunities — continuously fetched
                from company career pages and refreshed every 2 hours.
              </p>
            </div>
          </div>
          <div className={`${s.sSide} ${s.sSideBorder}`}>
            <div className={s.sSideRow}>
              <span className={s.portals}>1,000+ Portals</span>
              <span className={s.matchTag}>98% Match</span>
            </div>
            <span className={s.meter}>
              <i />
            </span>
          </div>
        </article>

        <article className={s.sCard}>
          <div className={s.sMain}>
            <span className={s.sNum}>03</span>
            <div className={s.sBody}>
              <div className={s.sHead}>
                <h3 className={s.sTitle}>See your best matches first</h3>
                <span className={`${s.sBadge} ${s.badgeGreen}`}>
                  <i className={s.badgeDot} />
                  VERIFIED
                </span>
              </div>
              <p className={s.sDesc}>
                Roles ranked around your skills, experience, location, preferences, and the kind of opportunities
                you&apos;re looking for.
              </p>
            </div>
          </div>
          <div className={`${s.sSide} ${s.sSideEnd}`}>
            <div className={s.sChips}>
              <span className={s.sChip}>Profile match</span>
              <span className={`${s.sChip} ${s.sChipBlue}`}>Real ROI</span>
            </div>
            <span className={s.sNote}>
              <Check className={s.sNoteIcon} strokeWidth={2.5} />
              Zero sponsored bias
            </span>
          </div>
        </article>

        <article className={s.sCard}>
          <div className={s.sMain}>
            <span className={s.sNum}>02</span>
            <div className={s.sBody}>
              <div className={s.sHead}>
                <h3 className={`${s.sTitle} ${s.sTitleNarrow}`}>Connect directly with recruiters</h3>
                <span className={`${s.sBadge} ${s.badgeBlueDark}`}>DIRECT</span>
              </div>
              <p className={s.sDesc}>
                Connect with recruiters and hiring teams through <strong>WhatsApp</strong>, <strong>call or email</strong>{" "}
                where direct contact is available.
              </p>
            </div>
          </div>
          <div className={`${s.sSide} ${s.sSideBorder} ${s.sSideEnd}`}>
            <div className={s.sChips}>
              <span className={`${s.sChip} ${s.sChipGreen}`}>
                <i className={s.chipDot} />
                Whatsapp
              </span>
              <span className={`${s.sChip} ${s.sChipGrey}`}>Direct Call</span>
            </div>
            <span className={s.sNote}>Instant admission line</span>
          </div>
        </article>

        <article className={s.sCard}>
          <div className={s.sMain}>
            <span className={s.sNum}>04</span>
            <div className={s.sBody}>
              <div className={s.sHead}>
                <h3 className={s.sTitle}>Keep every application on track</h3>
                <span className={`${s.sBadge} ${s.badgeOrange}`}>REAL-TIME</span>
              </div>
              <p className={s.sDesc}>
                See your job, internship and gig applications in one place, from submitted to final outcome.
              </p>
            </div>
          </div>
          <div className={`${s.sSide} ${s.sSideBorder} ${s.sSideBottom}`}>
            <div className={s.sSideRow}>
              <span className={s.pipeline}>
                <i className={s.pipelineDot} />
                Live Pipeline
              </span>
              <span className={s.active}>4 Active</span>
            </div>
            <span className={s.bars}>
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </article>
      </div>
    </div>
  );
}

function CollegeDiscovery() {
  return (
    <div className={`${s.frame} ${s.f3}`}>
      <div className={`${s.col} ${s.fromLeft} ${s.f3Left}`}>
        <div className={s.cWrap}>
          <span className={s.cAura} aria-hidden="true" />
          <div className={s.cCard}>
            <div className={s.cSearch}>
              <span className={s.cSearchField}>
                <Search className={s.cSearchIcon} strokeWidth={2} />
                MBA • Bengaluru • Under ₹3L
              </span>
              <kbd className={s.cKbd}>⌘K</kbd>
            </div>
            <div className={s.cFilters}>
              {["Best match", "Fees", "Placements", "Location"].map((f, i) => (
                <span key={f} className={`${s.cFilter} ${i === 0 ? s.cFilterActive : ""}`}>
                  {f}
                </span>
              ))}
            </div>
            <div className={s.cList}>
              {COLLEGES.map((c) => (
                <div key={c.name} className={s.cRow}>
                  <div className={s.cRowMain}>
                    <span className={`${s.cLogo} ${c.tone}`}>{c.short}</span>
                    <div className={s.cInfo}>
                      <h4 className={s.cName}>
                        {c.name}
                        {c.verified && <BadgeCheck className={s.cVerified} fill="#2563eb" color="#fff" strokeWidth={2} />}
                      </h4>
                      <p className={s.cMeta}>Bengaluru • Management</p>
                    </div>
                  </div>
                  <span className={s.cMatch}>{c.match}</span>
                </div>
              ))}
            </div>
            <div className={s.cFooter}>
              <span className={s.cNirf}>
                <Check className={s.cNirfIcon} strokeWidth={2.5} />
                Verified NIRF data
              </span>
              <span className={s.cShowing}>Showing 3 of 42 matches</span>
            </div>
          </div>
          <span className={s.cFloat}>
            <i className={s.cFloatDot} />
            <Zap className={s.cFloatIcon} fill="#7c3aed" strokeWidth={0} />
            Personalized matches
          </span>
        </div>
      </div>

      <div className={`${s.col} ${s.fromRight} ${s.f3Right}`}>
        <span className={s.cPill}>
          <i className={s.cPillDot} />
          <span className={shared.pillText}>01 • 1000+ COLLEGE DISCOVERY</span>
        </span>
        <h2 className={`${shared.h2} ${s.f3Title}`}>
          1000+ colleges.
          <br />
          <span className={s.gradientText}>Find the ones that fit you.</span>
        </h2>
        <p className={`${shared.lead} ${s.f3Lead}`}>
          Search and shortlist colleges by course, fees, location and placements without opening endless tabs.
        </p>
        <ol className={s.dList}>
          {DISCOVERY.map((d, i) => (
            <li key={d.n} className={s.dItem}>
              <span className={`${s.dNum} ${i === 0 ? s.dNumActive : ""}`}>{d.n}</span>
              <div className={s.dBody}>
                <h3 className={s.dTitle}>{d.title}</h3>
                <p className={s.dDesc}>{d.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <a href="#colleges" className={s.dLink} onClick={(e) => { e.preventDefault(); scrollToId("colleges"); }}>
          Explore all college rankings &amp; verified fees <ArrowRight strokeWidth={2.2} />
        </a>
      </div>
    </div>
  );
}

const SLIDE_BG = [s.bg1, s.bg2, s.bg3];

export default function OpportunityCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setActive((p) => (p + 1) % SLIDES), 2500);
    return () => clearInterval(id);
  }, [paused]);

  const slides = [<OpportunityDiscovery key="a" />, <StudentExperience key="b" />, <CollegeDiscovery key="c" />];

  return (
    <section
      id="jobs"
      className={`${shared.section} ${s.section}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={s.stack}>
        {slides.map((slide, i) => (
          <div key={i} className={`${s.slide} ${SLIDE_BG[i]} ${active === i ? s.slideActive : ""}`} aria-hidden={active !== i}>
            {slide}
          </div>
        ))}
      </div>

      <div className={`${shared.dots} ${s.dots}`} aria-label="Opportunity carousel slides">
        {Array.from({ length: SLIDES }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`${shared.dot} ${active === i ? shared.dotActive : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
