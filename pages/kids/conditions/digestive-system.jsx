/* Digestive System Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Main from "components/layout/Main";
import DigestiveSystem from "components/common/DigestiveSystem";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/Conditions/digestivesystem.content";

const HealthConditions = () => {
  return (
    <div className={page.slug}>
      <JJKidsNav />
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <DigestiveSystem {...page.digestiveSystem} />
      </Main>
    </div>
  );
}

export default HealthConditions;
