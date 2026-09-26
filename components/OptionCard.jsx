import Link from "next/link";
import { CardIcon, CheckIcon } from "./icons";
import styles from "./OptionCard.module.css";

export default function OptionCard({
  type,
  badge,
  title,
  description,
  features,
  checkTone = "slate",
  cta,
}) {
  return (
    <article className={styles.card}>
      <img src={`/assets/hero-${type}-art.svg`} alt="" aria-hidden="true" className={styles.art} />
      {type === "hiring" && <span className={styles.code} aria-hidden="true">&lt;/&gt;</span>}

      <div className={styles.head}>
        <span className={styles.iconWrap}>
          <CardIcon type={type} />
        </span>
        <span className={styles.badge}>{badge}</span>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
        {description.map((line) => (
          <span key={line} className={styles.descriptionLine}>
            {line}
          </span>
        ))}
      </p>

      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature} className={styles.feature}>
            <span className={`${styles.check} ${styles[`check_${checkTone}`]}`}>
              <CheckIcon />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Link href={cta.href} className={styles.cta}>
        {cta.label}
        {cta.icon}
      </Link>
    </article>
  );
}
