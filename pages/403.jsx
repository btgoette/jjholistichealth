// Error Page 403

// Page Components
import Head from "components/common/Head";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/403.content";

const NotFoundPage = () => {
  return (
    <div className={page.slug}>
      <JJNav />
      <Head {...page} />
      <Main>
        <Section {...page.error403} />
      </Main>
    </div>
  );
}

export default NotFoundPage;
