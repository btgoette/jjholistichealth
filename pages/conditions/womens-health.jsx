/* Women's Health Issues Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Conditions/womenshealthissues.content";

export default function WomensHealthIssues() {
  return (
    <div className={page.slug}>
      <JJNav />
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Section {...page.naturalApproachToPMS} />
        <Section {...page.bloodCount} />
        <Section {...page.bloodChemistryPanel} />
        <Section {...page.thyroidPanel} />
        <Section {...page.hormonePanel} />
        <Section {...page.otherTests} />
      </Main>
    </div>
  );
}
