/* Kids Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/kids.content";

export default function Kids() {
  return (
    <div className={page.slug}>
    <JJKidsNav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
      <Section {...page.nutritionalMedicine} />
        <Section {...page.weAreWhatWeConsume} />
        <Section {...page.mission} />
        <Section {...page.vision} />
        <Section {...page.coreValues} />
        <Section {...page.conditions} />
        <Section {...page.conditionsContinued} />
        <Section {...page.forPreteensAndTeenagers} />
        <Section {...page.adolescents} />
      </Main>
    </div>
  );
}
