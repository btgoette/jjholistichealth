/* Stress & Adrenal Function Page */

// Page Components
import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from "components/common/Section"
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Conditions/stressandadrenalfunction.content"

export default function StressAndAdrenalFunction() {
  return (
      <div className={page.slug}>
      <JJNav/>
        <Head {...page} />
        <Hero {...page.hero} />
        <Section {...page.block.exercise}/>
        <Section {...page.block.sportsAndHobbies}/>
        <Section {...page.block.diet}/>
        <Section {...page.block.meditation}/>
        <Section {...page.block.findingProblemsWithStress}/>
      </div>
  )
}
