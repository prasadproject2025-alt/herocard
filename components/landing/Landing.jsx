import Partners from "./Partners";
import OpportunityCarousel from "./OpportunityCarousel";
import ResumeCarousel from "./ResumeCarousel";
import Colleges from "./Colleges";
import Employers from "./Employers";
import AppShowcase from "./AppShowcase";
import SupportFooter from "./SupportFooter";
import s from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={s.page}>
      <div className={s.scale}>
        <Partners />
        <OpportunityCarousel />
        <ResumeCarousel />
        <Colleges />
        <Employers />
        <AppShowcase />
        <SupportFooter />
      </div>
    </div>
  );
}
