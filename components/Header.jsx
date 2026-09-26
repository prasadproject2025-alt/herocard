import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Colleges", href: "#colleges" },
  { label: "Employers", href: "#employers" },
  { label: "Jobs", href: "#jobs" },
  { label: "Blogs", href: "#blogs" },
];

export default function Header() {
  return (
    <header className={styles.header}>
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
      </div>
    </header>
  );
}
