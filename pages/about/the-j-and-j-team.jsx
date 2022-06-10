/* The J&J Team Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Main from "components/layout/Main";
import Team from "components/common/Team";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/About/team.content";

const JJTeam = () => {
  return (
    <div className={page.slug}>
    <JJNav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Team {...page.team} />
      </Main>
    </div>
  );
};

export default JJTeam;
