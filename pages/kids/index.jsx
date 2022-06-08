/* Kids Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
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
        <Section {...page.conditions} />
      </Main>
    </div>
  );
}
