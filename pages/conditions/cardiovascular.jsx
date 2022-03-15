/* Cardiovascular Page */

// Page Components
import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from "components/common/Section"
import CardioTips from "components/common/CardioTips"

// Page Content
import page from "public/content/en_US/Page/Conditions/cardiovascular.content";

export default function Cardiovascular() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Section {...page.block.avoidSugar}/>      
      <Section {...page.block.avoidHydrogenatedOils}/>      
      <Section {...page.block.diet}/>
      <Section {...page.block.exercise}/>
      <Section {...page.block.cardiologist}/>
      <Section {...page.block.chapmanReflex}/>
      <Section {...page.block.cholesterol}/>
      <CardioTips {...page.block.cardioTips} />
    </div>
  );
}
