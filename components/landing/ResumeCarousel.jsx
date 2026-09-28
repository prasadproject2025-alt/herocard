"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Search, Sparkles } from "lucide-react";
import shared from "./shared.module.css";
import s from "./ResumeCarousel.module.css";

const PIPELINE = [
  { title: "Resume analyzed", sub: "Ready in 4s", tone: s.pGreen, dot: true },
  { title: "Skills matched", sub: "Deep taxonomy", tone: s.pIndigo },
  { title: "Experience matched", sub: "Contextual seniority", tone: s.pViolet },
  { title: "1,000+ sources searched", sub: "Real-time aggregators", tone: s.pBlue },
];

const TEMPLATES = [
  { title: "Product Design Intern", desc: "Figma, wireframing, portfolio…" },
  { title: "Frontend Eng (React)", desc: "React, TypeScript, Tailwind, …" },
  { title: "Associate Data Analyst", desc: "SQL, Python, Excel, PowerBI, …" },
];

function UploadSlide() {
  return (
    <div className={`${s.frame} ${s.uploadFrame}`}>
      <span className={s.tryPill}>
        <span className={s.tryDot} />
        <span className={s.tryLabel}>TRY IT LIVE</span>
        <span className={s.tryVersion}>v2.4 AI Engine</span>
      </span>
      <h2 className={s.uploadTitle}>
        Upload your resume.
        <br />
        <span className={s.uploadBlue}>Find jobs that fit.</span>
      </h2>
      <p className={s.uploadLead}>
        Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across
        1,000+ sources.
      </p>

      <div className={s.dropWrap}>
        <span className={s.dropAura} aria-hidden="true" />
        <div className={s.dropCard}>
          <div className={s.dropArea}>
            <i className={`${s.corner} ${s.cTL}`} />
            <i className={`${s.corner} ${s.cTR}`} />
            <i className={`${s.corner} ${s.cBL}`} />
            <i className={`${s.corner} ${s.cBR}`} />
            <h3 className={s.dropTitle}>Upload your resume</h3>
            <p className={s.dropSub}>PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills and experience.</p>
            <button type="button" className={s.uploadBtn}>
              Upload resume <span className={s.uploadArrow}>↑</span>
            </button>
            <p className={s.dragText}>or drag and drop your file here</p>
            <div className={s.fileChips}>
              <span>PDF</span>
              <span>DOC</span>
              <span>DOCX</span>
            </div>
          </div>
        </div>

        <div className={`${s.floatTag} ${s.floatLeft}`}>
          <span className={`${s.floatIcon} ${s.floatIconGreen}`}>⚡</span>
          <span className={s.floatText}>
            <strong>98% Match Rate</strong>
            <small>AI semantic rank</small>
          </span>
        </div>
        <div className={`${s.floatTag} ${s.floatRight}`}>
          <span className={`${s.floatIcon} ${s.floatIconOrange}`}>🔒</span>
          <span className={s.floatText}>
            <strong>ATS Compliant</strong>
            <small>Standardized parser</small>
          </span>
        </div>
      </div>

      <div className={s.pipeline}>
        <span className={s.pipeLine} aria-hidden="true" />
        {PIPELINE.map((p) => (
          <div key={p.title} className={`${s.capsule} ${p.tone}`}>
            <span className={s.capIcon}>
              <Check strokeWidth={2.6} />
            </span>
            <span className={s.capText}>
              <strong>{p.title}</strong>
              <small>
                {p.dot && <i className={s.capDot} />}
                {p.sub}
              </small>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CandidatesSlide() {
  const [brief, setBrief] = useState("");

  return (
    <div className={`${s.frame} ${s.candFrame}`}>
      <span className={s.aiPill}>
        <i className={s.aiDot} />
        <strong>CAMPUSPE AI MATCHMAKER</strong>
        <span className={s.aiSep}>|</span>
        <span>500+ Verified Universities</span>
      </span>
      <h2 className={s.candTitle}>
        Find candidates in <span className={s.candGradient}>seconds.</span>
      </h2>
      <p className={s.candLead}>
        Paste any job description or hiring brief. CampusPe extracts required skills, maps them across 250,000+
        verified student profiles, and delivers ranked shortlists instantly.
      </p>

      <div className={s.briefCard}>
        <textarea
          className={s.brief}
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          placeholder="e.g. We are looking for a Junior Full Stack Engineer with strong proficiency in React, Node.js, and PostgreSQL. The candidate should have hands-on project experience..."
          aria-label="Job description"
        />
        <span className={s.briefHint}>Supports text, bullet points, or raw JD format</span>
        <button type="button" className={s.findBtn}>
          <Search strokeWidth={2.4} />
          Find Candidates Now
          <ArrowRight strokeWidth={2.4} />
        </button>
      </div>

      <div className={s.uploadRow}>
        <span>Have a PDF instead?</span>
        <button type="button" className={s.uploadLink}>
          Upload JD file
        </button>
        <span className={s.dotSep}>·</span>
        <span className={s.mono}>PDF</span>
        <span className={s.mono}>DOCX</span>
      </div>

      <div className={s.templates}>
        <div className={s.templatesHead}>
          <span className={s.templatesLabel}>
            <Sparkles strokeWidth={2.2} />
            OR TRY KEY ROLE PROMPT TEMPLATES:
          </span>
          <button type="button" className={s.templatesMore}>
            Explore 20+ roles
          </button>
        </div>
        <div className={s.templateRow}>
          {TEMPLATES.map((t) => (
            <button type="button" key={t.title} className={s.template} onClick={() => setBrief(`${t.title} — ${t.desc}`)}>
              <span className={s.templateTitle}>
                {t.title}
                <em>↗</em>
              </span>
              <span className={s.templateDesc}>{t.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ResumeCarousel() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  // Advances every 2s; holds while the cursor (or keyboard focus) is on the section.
  useEffect(() => {
    if (paused) return undefined;
    const id = setTimeout(() => setSlide((p) => (p + 1) % 2), 2000);
    return () => clearTimeout(id);
  }, [paused, slide]);

  return (
    <section
      className={`${shared.section} ${s.section}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <span className={`${shared.glow} ${s.gTop}`} aria-hidden="true" />
      <span className={`${shared.glow} ${s.gCyan}`} aria-hidden="true" />
      <span className={`${shared.glow} ${s.gViolet}`} aria-hidden="true" />
      <span className={`${shared.glow} ${s.gBottom}`} aria-hidden="true" />

      <div className={s.viewport}>
        <div className={s.track} style={{ transform: `translate3d(-${slide * 100}%, 0, 0)` }}>
          <div className={s.page} aria-hidden={slide !== 0}>
            <UploadSlide />
          </div>
          <div className={s.page} aria-hidden={slide !== 1}>
            <CandidatesSlide />
          </div>
        </div>
      </div>

      <div className={`${shared.dots} ${s.dots}`} aria-label="Resume section slides">
        {[0, 1].map((i) => (
          <button
            key={i}
            type="button"
            className={`${shared.dot} ${slide === i ? shared.dotActive : ""}`}
            onClick={() => setSlide(i)}
            aria-label={i === 0 ? "Show upload resume" : "Show find candidates"}
          />
        ))}
      </div>
    </section>
  );
}
