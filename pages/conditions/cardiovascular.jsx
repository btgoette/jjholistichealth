/* Cardiovascular Page */

// Page Components
import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from "components/common/Section"
import Main from "components/layout/Main";
import CardioTips from "components/common/CardioTips"
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Conditions/cardiovascular.content";

export default function Cardiovascular() {
  return (
    <div className={page.slug}>
    <JJNav/>
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
