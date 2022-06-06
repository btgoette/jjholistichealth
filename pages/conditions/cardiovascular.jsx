/* Cardiovascular Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import CardioTips from "components/common/CardioTips";
import JJNav from "components/layout/JJNav.jsx"

// Page Content
import page from "public/content/en_US/Page/Conditions/cardiovascular.content";

export default function Cardiovascular() {
  return (
    <div className={page.slug}>
      <JJNav />
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Section {...page.cardiologist} />
        <Section {...page.chapmanReflex} />
        <Section {...page.cholesterol} />
        <Section {...page.avoidSugar} />
        <Section {...page.avoidHydrogenatedOils} />
        <Section {...page.diet} />
        <Section {...page.exercise} />
        <Section {...page.drinkWater} />
        <Section {...page.getEnoughRest} />
      </Main>
    </div>
  );
}
