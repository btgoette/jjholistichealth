/* Stress & Adrenal Function Page */

// Page Components
import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from "components/layout/Section"
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Conditions/stressandadrenalfunction.content"

export default function StressAndAdrenalFunction() {
  return (
      <div className={page.slug}>
      <JJNav/>
        <Head {...page} />
        <Hero {...page.hero} />
        <Main>
        <Section {...page.findingProblemsWithStress}/>
        <Section {...page.exercise}/>
        <Section {...page.sportsAndHobbies}/>
        <Section {...page.diet}/>
        <Section {...page.meditation}/>
        </Main>
      </div>
  )
}
