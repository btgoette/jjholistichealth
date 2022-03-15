/* Women's Health Issues Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/common/Section";

// Page Content
import page from "public/content/en_US/Page/Conditions/womenshealthissues.content";

export default function WomensHealthIssues() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Section {...page.block.avoidSugar} />
      <Section {...page.block.avoidHydrogenatedOils} />
      <Section {...page.block.drinkMoreWater} />
      <Section {...page.block.avoidChemicalAdditives} />
      <Section {...page.block.naturalApproachToPMS} />
      <Section {...page.block.bloodCount} />
      <Section {...page.block.bloodChemistryPanel} />
      <Section {...page.block.thyroidPanel} />
      <Section {...page.block.hormonePanel} />
      <Section {...page.block.otherTests} />
    </div>
  )
}
