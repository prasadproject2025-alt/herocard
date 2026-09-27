import { ArrowUpRight, Mail, Phone, PhoneCall } from "lucide-react";
import shared from "./shared.module.css";
import s from "./SupportFooter.module.css";

const COLUMNS = [
  { title: "For Students", wide: true, links: ["Explore Colleges", "Find Opportunities", "Internships", "Full-time Jobs", "Part-time & Gig", "Application Tracker"] },
  { title: "For Colleges", links: ["List Your College", "Admissions", "Fee Collection", "Placements"] },
  { title: "For Employers", links: ["Post a Job", "Find Talent", "Campus Hiring"] },
  { title: "Company", links: ["About Us", "Contact Us", "Blogs", "Careers"] },
];

const LEGAL = ["Privacy Policy", "Terms & Conditions", "Refund & Cancellation Policy", "Cookie Policy", "Grievance Redressal", "Job & Internship Disclaimer"];

const SOCIALS = [
  { href: "https://in.linkedin.com/company/campupe-official", label: "LinkedIn", icon: "SVGRepo_iconCarrier.png" },
  { href: "https://www.instagram.com/campuspe_official/", label: "Instagram", icon: "Icon.png" },
  { href: "#", label: "Twitter", icon: "SVGRepo_iconCarrier-1.png" },
  { href: "#", label: "Facebook", icon: "SVGRepo_iconCarrier-2.png" },
  { href: "#", label: "WhatsApp", icon: "SVGRepo_iconCarrier-3.png" },
  { href: "https://www.youtube.com/@campuspe-tech", label: "YouTube", icon: "Icon-1.png" },
];

const CTAS = [
  { label: "Explore Colleges", href: "#colleges", primary: true },
  { label: "Find Opportunities", href: "#jobs", primary: true },
  { label: "List Your College", href: "#colleges" },
  { label: "Post a Job", href: "#employers" },
];

export default function SupportFooter() {
  return (
    <>
      <section className={`${shared.section} ${s.support}`}>
        <span className={`${shared.glow} ${s.gCyan}`} aria-hidden="true" />
        <span className={`${shared.glow} ${s.gViolet}`} aria-hidden="true" />
        <div className={`${shared.inner} ${s.supportInner}`}>
          <div className={s.card}>
            <h2 className={s.cardTitle}>Still have questions?</h2>
            <p className={s.cardText}>Our support team is here to help you succeed. Get in touch anytime.</p>
            <div className={s.cardButtons}>
              <a href="mailto:contactus@campuspe.com" className={`${s.btn} ${s.btnPrimary}`}>
                Contact Support
                <span className={s.bubble}>
                  <ArrowUpRight strokeWidth={2} />
                </span>
              </a>
              <a href="tel:+916362606464" className={`${s.btn} ${s.btnOutline}`}>
                Schedule a Call
                <span className={s.bubble}>
                  <PhoneCall strokeWidth={1.8} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="blogs" className={`${shared.section} ${s.footer}`}>
        <div className={`${shared.inner} ${s.footerInner}`}>
          <div className={s.banner}>
            <div className={s.bannerCopy}>
              <h2 className={s.bannerTitle}>Ready for what’s next?</h2>
              <p className={s.bannerText}>
                Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.
              </p>
            </div>
            <div className={s.bannerButtons}>
              {CTAS.map((cta) => (
                <a key={cta.label} href={cta.href} className={`${s.bannerBtn} ${cta.primary ? s.bannerPrimary : s.bannerSecondary}`}>
                  {cta.label} <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className={s.columns}>
            <div className={s.brand}>
              <img src="/assets/Layer_1.png" alt="CampusPe" className={s.logo} />
              <p className={s.brandLead}>From choosing a college to finding your next opportunity.</p>
              <p className={s.brandText}>CampusPe connects students, colleges and employers in one place.</p>
            </div>

            {COLUMNS.map((col) => (
              <nav key={col.title} className={`${s.col} ${col.wide ? s.colWide : ""}`} aria-label={col.title}>
                <h3 className={s.colTitle}>{col.title}</h3>
                {col.links.map((link) => (
                  <a key={link} href="#" className={s.link}>
                    {link}
                  </a>
                ))}
              </nav>
            ))}

            <nav className={`${s.col} ${s.legal}`} aria-label="Legal and policies">
              <h3 className={s.colTitle}>Legal &amp; Policies</h3>
              {LEGAL.map((link) => (
                <a key={link} href="#" className={s.link}>
                  {link}
                </a>
              ))}
              <a href="#" className={s.allPolicies}>
                View all policies <span aria-hidden="true">→</span>
              </a>
              <p className={s.note}>Separate user, institution and employer terms can live inside the full Policies page.</p>
            </nav>
          </div>

          <div className={s.bar}>
            <div className={s.contacts}>
              <a href="mailto:contactus@campuspe.com" className={s.contact}>
                <span className={s.contactIcon}>
                  <Mail strokeWidth={1.8} />
                </span>
                contactus@campuspe.com
              </a>
              <a href="tel:+916362606464" className={s.contact}>
                <span className={s.contactIcon}>
                  <Phone strokeWidth={1.8} />
                </span>
                +91 6362606464
              </a>
            </div>
            <span className={s.audience}>
              <i className={s.audienceDot} />
              Students · Colleges · Employers
            </span>
          </div>

          <div className={`${s.bar} ${s.bottom}`}>
            <p className={s.copyright}>
              2026 CampusPe Technologies Pvt. Ltd.
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Grievance</a>
            </p>
            <div className={s.socials}>
              {SOCIALS.map((so) => (
                <a key={so.label} href={so.href} target="_blank" rel="noopener noreferrer" aria-label={so.label} className={s.social}>
                  <img src={`/assets/${so.icon}`} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
