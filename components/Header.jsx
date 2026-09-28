"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Colleges", href: "#colleges" },
  { label: "Employers", href: "#employers" },
  { label: "Jobs", href: "#jobs" },
  { label: "Blogs", href: "#blogs" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape, and when the layout grows back to the desktop nav
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo} aria-label="CampusPe home">
        <img src="/assets/logo.png" alt="CampusPe" width={445} height={135} />
      </Link>

      <nav className={styles.nav} aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.actions}>
        <Link href="#signin" className={styles.signIn}>
          Sign In
        </Link>
        <Link href="#signup" className={styles.signUp}>
          Sign Up
        </Link>
        {/* After the links so `.signIn:hover ~ .pill` can move it; z-index keeps it behind them */}
        <span className={styles.pill} aria-hidden="true" />
      </div>

      {/* Mobile / tablet: everything above lives behind this hamburger */}
      <button
        type="button"
        className={styles.menuBtn}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        {menuOpen ? <X strokeWidth={2} /> : <Menu strokeWidth={2} />}
      </button>

      <div id="mobile-menu" className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav} aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={styles.mobileLink} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileActions}>
          <Link href="#signin" className={styles.mobileSignIn} onClick={closeMenu}>
            Sign In
          </Link>
          <Link href="#signup" className={styles.mobileSignUp} onClick={closeMenu}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
