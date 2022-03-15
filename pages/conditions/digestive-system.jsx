/* Digestive System Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import DigestiveSystem from "components/common/DigestiveSystem";

// Page Content
import page from "public/content/en_US/Page/Conditions/digestivesystem.content";

export default function HealthConditions() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <DigestiveSystem {...page.block.digestiveSystem}/>
    </div>
  );
}
