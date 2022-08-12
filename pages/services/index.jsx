/* Services Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import Nav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Services/services.content";

const Services = () => {
  return (
    <div className={page.slug}>
      <Nav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Section {...page.weTreatEveryIndividualUniquely} />
        <Section {...page.free15MinuteConsultation} />
        <Section {...page.initialInterview} />
        <Section {...page.fullFunctionalEvaluation} />
        <Section {...page.fullFunctionalEvaluationContinued} />
        <Section {...page.understandingTheClient} />
        <Section {...page.weInspect21Organs} />
        <Section {...page.foodIntoleranceAndSensitivityTest} />
        <Section {...page.personalizedMealPlanning} />
        <Section {...page.jAndJAllInWellnessPlan} />
        <Section {...page.jAndJPlans} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
};

export default Services;
