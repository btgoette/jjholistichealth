// Error Page 404

// Page Components
import Head from "components/common/Head"
import Section from "components/common/Section"

// Page Content
import page from "public/content/en_US/Page/404.content";

export default function NotFoundPage() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Section {...page.block.error404} />
    </div>
  );
}
