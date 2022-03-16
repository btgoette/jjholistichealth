// Error Page 404

// Page Components
import Head from "components/common/Head"
import Section from "components/common/Section"

// Page Content
import page from "public/content/en_US/Page/thankYou.content";

export default function ThankYou() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Section {...page.block.thankYou} />
    </div>
  );
}
