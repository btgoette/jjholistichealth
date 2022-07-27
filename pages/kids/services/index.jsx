/* Services Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/Services/services.content";

const Services = () => {
  return (
    <div className={page.slug}>
      <JJKidsNav />
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Section {...page.weTreatEveryIndividualUniquely} />
        <Section {...page.forPreteensAndTeenagers} />
        <Section {...page.adolescents} />
        <Section {...page.free15MinuteConsultation} />
        <Section {...page.initialInterview} />
        <Section {...page.childAssessment} />
        <Section {...page.foodIntoleranceAndSensitivityTest} />
        <Section {...page.personalizedMealPlanning} />
        <Section {...page.jAndJPlans} />
      </Main>
    </div>
  );
};

export default Services;
