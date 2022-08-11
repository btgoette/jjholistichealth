/* Services Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
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
        <Section {...page.free15MinuteConsultation} />
        <Section {...page.initialInterview} />
        <Section {...page.pediatricFullFunctionalEvaluation} />
        <Section {...page.childAssessment} />
        <Section {...page.forPreteensAndTeenagers} />
        <Section {...page.adolescents} />
        <Section {...page.foodIntoleranceAndSensitivityTest} />
        <Section {...page.personalizedMealPlanning} />
        <Section {...page.jAndJPlans} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
};

export default Services;
