/* Digestive System Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Main from "components/layout/Main";
import DigestiveSystem from "components/common/DigestiveSystem";
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Conditions/digestivesystem.content";

export default function HealthConditions() {
  return (
    <div className={page.slug}>
    <JJNav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <DigestiveSystem {...page.block.digestiveSystem}/>
    </div>
  );
}
