/* Stress & Adrenal Function Page */

// Page Components
import Head from "components/common/Head"
import Hero from "components/common/Hero"
import Section from "components/layout/Section"
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import Nav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Conditions/stressandadrenalfunction.content"

const StressAndAdrenalFunction = () => {
  return (
      <div className={page.slug}>
      <Nav/>
        <Head {...page} />
        <Hero {...page.hero} />
        <Main>
        <Section {...page.findingProblemsWithStress}/>
        <Section {...page.exercise}/>
        <Section {...page.sportsAndHobbies}/>
        <Section {...page.diet}/>
        <Section {...page.meditation}/>
        <TestimonialVideoFooter />
        </Main>
      </div>
  )
}

export default StressAndAdrenalFunction;
