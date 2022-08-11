/* The J&J Team Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Main from "components/layout/Main";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Team from "components/common/Team";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/About/team.content";

const JJTeam = () => {
  return (
    <div className={page.slug}>
    <JJKidsNav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Team {...page.team} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
};

export default JJTeam;
