/* Why Choose J&J Page */

// Page Components
import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from "components/common/Section"

// Page Content
import page from "public/content/en_US/Page/About/whychoosejandj.content"

export default function WhyChooseJJ() {
  return (
    <>
      <div className={page.slug}>
        <Head {...page} />
        <Hero {...page.hero} />
        <Section {...page.block.weInspect21Organs}/>
        <Section {...page.block.jAndJAllInWellnessPlan}/>
        <Section {...page.block.childAssessment}/>
        <Section {...page.block.foodIntoleranceAndSensitivityTest}/>
        <Section {...page.block.personalizedMealPlanning}/>
      </div>
    </>
  );
}
