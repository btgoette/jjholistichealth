/* About Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/About/about.content";

const About = () => {
  return (
    <div className={page.slug}>
      <JJKidsNav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Section {...page.naturalCare} />
        <Section {...page.mission} />
        <Section {...page.vision} />
        <Section {...page.coreValues} />
      </Main>
    </div>
  );
};

export default About;
