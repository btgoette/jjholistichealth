/* Cardiovascular Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import Nav from "components/layout/JJNav.jsx"

// Page Content
import page from "public/content/en_US/Page/Conditions/cardiovascular.content";

const Cardiovascular = () => {
  return (
    <div className={page.slug}>
      <Nav/>
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
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default Cardiovascular;