/* Health Conditions Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import FunctionalEvaluation from "components/common/FunctionalEvaluation";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import Nav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/Conditions/conditions.content";

const KidsHealthConditions = () => {
  return (
    <>
      <div className={page.slug}>
        <Nav/>
        <Head {...page} />
        <Hero {...page.hero} />
        <Main>
          <FunctionalEvaluation {...page.functionalEvaluation} />
          <Section {...page.conditions} />
        <TestimonialVideoFooter />
        </Main>
      </div>
    </>
  );
};

export default KidsHealthConditions;
