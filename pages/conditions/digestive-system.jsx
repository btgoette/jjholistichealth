/* Digestive System Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Main from "components/layout/Main";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import DigestiveSystem from "components/common/DigestiveSystem";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Conditions/digestivesystem.content";

const HealthConditions = () => {
  return (
    <div className={page.slug}>
      <JJNav />
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <DigestiveSystem {...page.digestiveSystem} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default HealthConditions;
