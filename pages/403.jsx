// Error Page 403

// Page Components
import Head from "components/common/Head"
import Section from "components/common/Section"

// Custom Styles and Content
import page from "public/content/en_US/Page/403.content";

export default function NotFoundPage() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Section {...page.block.error403} />
    </div>
  );
}
