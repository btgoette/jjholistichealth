/* Kids Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import Nav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/kids.content";

const Kids = () => {
  return (
    <div className={page.slug}>
      <Nav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Section {...page.nutritionalMedicine} />
        <Section {...page.weAreWhatWeConsume} />
        <Section {...page.conditions} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default Kids;