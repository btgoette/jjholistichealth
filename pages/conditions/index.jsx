/* Health Conditions Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import FunctionalEvaluation from "components/common/FunctionalEvaluation";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Conditions/conditions.content";

const HealthConditions = () => {
  return (
    <>
      <div className={page.slug}>
        <JJNav />
        <Head {...page} />
        <Hero {...page.hero} />
        <Main>
          <FunctionalEvaluation {...page.functionalEvaluation} />
          <Section {...page.conditions} />
        </Main>
      </div>
    </>
  );
};

export default HealthConditions;
