/* Immune System Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Conditions/immunesystem.content";

const ImmuneSystem = () => {
  return (
    <div className={page.slug}>
    <JJNav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
      <Section {...page.stressFactors} />
      <Section {...page.chapmanReflexes} />
      <Section {...page.avoidSugar} />
      <Section {...page.avoidHydrogenatedOils} />
      <Section {...page.diet} />
      <Section {...page.exercise} />
      <Section {...page.drinkWater} />
      <Section {...page.getEnoughRest} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default ImmuneSystem;