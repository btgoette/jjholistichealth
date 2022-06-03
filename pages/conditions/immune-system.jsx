/* Immune System Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/common/Section";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Conditions/immunesystem.content";

export default function ImmuneSystem() {
  return (
    <div className={page.slug}>
    <JJNav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Section {...page.block.avoidSugar} />
      <Section {...page.block.avoidHydrogenatedOils} />
      <Section {...page.block.diet} />
      <Section {...page.block.drinkWater} />
      <Section {...page.block.getEnoughRest} />
      <Section {...page.block.exercise} />
      <Section {...page.block.stressFactors} />
      <Section {...page.block.chapmanReflexes} />
      <Section {...page.block.immuneSupport} />
    </div>
  );
}
