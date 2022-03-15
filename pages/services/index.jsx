/* Services Page */

// Page Components
import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from "components/common/Section"
import FullFunctionEvaluation from "components/common/FullFunctionalEvaluation"
import JandJPlan from "components/common/JandJPlans"

// Page Content
import page from "public/content/en_US/Page/Services/services.content";

export default function Services() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Section {...page.block.weTreatEveryIndividualUniquely} />
      <Section {...page.block.ourServices} />
      <Section {...page.block.free15MinuteConsultation} />
      <Section {...page.block.initialInterview} />
      <Section {...page.block.fullFunctionalEvaluation} />
      <FullFunctionEvaluation {...page.block.feLists} />
      <JandJPlan {...page.block.jAndJPlans} />
    </div>
  );
}
