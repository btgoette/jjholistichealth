/* Why Choose J&J Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/About/whychoosejandj.content";

const WhyChooseJJ = () => {
  return (
    <>
      <div className={page.slug}>
      <JJNav/>
        <Head {...page} />
        <Hero {...page.hero} />
        <Main>
          <Section {...page.understandingTheClient} />
          <Section {...page.weInspect21Organs} />
          <Section {...page.jAndJAllInWellnessPlan} />
          <Section {...page.childAssessment} />
          <Section {...page.foodIntoleranceAndSensitivityTest} />
          <Section {...page.personalizedMealPlanning} />
        </Main>
      </div>
    </>
  );
}

export default WhyChooseJJ;
