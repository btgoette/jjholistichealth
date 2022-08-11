/* About Page */

// Page Components
import Head from "components/common/Head";
import Video from "components/common/Video";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/About/about.content";

const About = () => {
  return (
    <div className={page.slug}>
      <JJNav />
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Section {...page.naturalCare} />
        <Section {...page.ourStory} />
        <Section {...page.mission} />
        <Section {...page.vision} />
        <Section {...page.coreValues} />        
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
};

export default About;
