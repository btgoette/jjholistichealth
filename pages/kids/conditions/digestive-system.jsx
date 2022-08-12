/* Digestive System Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Main from "components/layout/Main";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import DigestiveSystem from "components/common/DigestiveSystem";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/Conditions/digestivesystem.content";

const KidsDigestive = () => {
  return (
    <div className={page.slug}>
      <JJKidsNav />
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <DigestiveSystem {...page.digestiveSystem} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default KidsDigestive;
