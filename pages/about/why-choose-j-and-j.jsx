/* Why Choose J&J Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/About/whychoosejandj.content";

export default function WhyChooseJJ() {
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
