/* Services Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Services/services.content";

export default function Services() {
  return (
    <div className={page.slug}>
      
      <JJNav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Section {...page.weTreatEveryIndividualUniquely} />
        <Section {...page.free15MinuteConsultation} />
        <Section {...page.initialInterview} />
        <Section {...page.fullFunctionalEvaluation} />
        <Section {...page.jAndJPlans} />
      </Main>
    </div>
  );
}
