/* Stress & Adrenal Function Page */

// Page Components
import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from "components/common/Section"

// Page Content
import page from "public/content/en_US/Page/Conditions/stressandadrenalfunction.content"

export default function StressAndAdrenalFunction() {
  return (
      <div className={page.slug}>
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
