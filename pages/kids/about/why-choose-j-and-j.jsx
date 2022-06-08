/* Why Choose J&J Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/About/whychoosejandj.content";

export default function WhyChooseJJ() {
  return (
    <>
      <div className={page.slug}>
      <JJKidsNav/>
        <Head {...page} />
        <Hero {...page.hero} />
        <Main>
          <Section {...page.forPreteensAndTeenagers} />
          <Section {...page.adolescents} />
          <Section {...page.childAssessment} />
          <Section {...page.foodIntoleranceAndSensitivityTest} />
          <Section {...page.personalizedMealPlanning} />
        </Main>
      </div>
    </>
  );
}
