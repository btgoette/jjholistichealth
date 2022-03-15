/* Kids Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/common/Section";
import HomeConditions from "components/common/HomeConditions"

// Page Content
import page from "public/content/en_US/Page/Kids/kids.content";

export default function Kids() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Section {...page.block.mission}/>
      <Section {...page.block.vision}/>
      <Section {...page.block.coreValues}/>
      <Section {...page.block.nutritionalMedicine}/>
      <Section {...page.block.weAreWhatWeConsume}/>
      <HomeConditions {...page.block.conditions}/>
      <Section {...page.block.forPreteensAndTeenagers}/>
      <Section {...page.block.adolescents}/>
    </div>
  );
}
