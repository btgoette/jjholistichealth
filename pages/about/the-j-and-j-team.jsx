/* The J&J Team Page */

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Team from "components/common/Team";

// Page Content
import page from "public/content/en_US/Page/About/team.content";

export default function JJTeam() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Hero {...page.hero} />
      <Team {...page.block} />
    </div>
  )
}
