"use client";

import { useEffect, useState } from "react";
import shared from "./shared.module.css";
import s from "./AppShowcase.module.css";

const SCREENS = [
  "/assets/mobile-screen-1.png",
  "/assets/mobile-screen-2.png",
  "/assets/mobile-screen-3.png",
  "/assets/mobile-screen-4.png",
  "/assets/mobile-screen-5.png",
];

const SLOT_CLASS = [s.slot0, s.slot1, s.slot2, s.slot3, s.slot4];

export default function AppShowcase() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setStep((p) => (p + 1) % SCREENS.length), 2000);
    return () => clearTimeout(id);
  }, [step]);

  return (
    <section className={`${shared.section} ${s.section}`}>
      <span className={s.hazeSmall} aria-hidden="true" />
      <span className={`${shared.glow} ${s.gViolet}`} aria-hidden="true" />
      <span className={`${shared.glow} ${s.gCyan}`} aria-hidden="true" />

      <div className={`${shared.inner} ${s.inner}`}>
        <div className={s.intro}>
          <h2 className={s.title}>Checkout Our App Interface Look</h2>
          <p className={s.desc}>
            Experience the power of a unified campus ecosystem right in your pocket. <strong>CampusPe</strong> offers a
            tailored interface for every user: students can explore trending courses, colleges can showcase their
            campus life, and companies can post job vacancies directly to a pool of qualified candidates.
          </p>
        </div>

        <div className={s.stage}>
          <span className={s.haze} aria-hidden="true" />
          {SCREENS.map((src, i) => {
            const slot = (i + step) % SCREENS.length;
            return (
              <img
                key={src}
                src={src}
                alt={slot === 2 ? "CampusPe mobile app screen" : ""}
                aria-hidden={slot !== 2}
                className={`${s.phone} ${SLOT_CLASS[slot]}`}
              />
            );
          })}
        </div>

        <div className={s.dots} aria-label="App screens">
          {SCREENS.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`${s.dot} ${step === i ? s.dotActive : ""}`}
              onClick={() => setStep(i)}
              aria-label={`Show app screen ${i + 1}`}
            />
          ))}
        </div>

        <div className={s.download}>
          <h2 className={s.title}>Download App Now</h2>
          <p className={s.downloadDesc}>
            Elevate your academic journey with CampusPe, the all-in-one digital ecosystem designed to bridge the gap
            between education and industry. Whether you&apos;re a student seeking your next big internship, a college
            looking to empower your cohort, or a company scouting for top-tier talent, CampusPe streamlines the
            connection. Your career doesn&apos;t start at graduation—it starts here.
          </p>
          <div className={s.stores}>
            <a href="#" className={s.store} aria-label="Get it on Google Play">
              <img src="/assets/google-play-badge.svg" alt="Get it on Google Play" className={s.google} />
            </a>
            <a href="#" className={s.store} aria-label="Download on the App Store">
              <img src="/assets/app-store-badge.svg" alt="Download on the App Store" className={s.apple} />
            </a>
          </div>
        </div>

        <img src="/assets/iPhone 12 Pro.png" alt="CampusPe mobile app on two phones" className={s.devices} />
      </div>
    </section>
  );
}
