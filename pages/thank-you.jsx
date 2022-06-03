// Error Page 404

// Page Components
import Head from "components/common/Head"
import Section from "components/common/Section"
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/thankYou.content";

export default function ThankYou() {
  return (
    <div className={page.slug}>
      
      <JJNav/>
      <Head {...page} />
      <Section {...page.block.thankYou} />
    </div>
  );
}
