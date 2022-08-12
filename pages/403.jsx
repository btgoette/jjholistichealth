// Error Page 403

// Page Components
import Head from "components/common/Head";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import Nav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/403.content";

const NotFoundPage = () => {
  return (
    <div className={page.slug}>
      <Nav/>
      <Head {...page} />
      <Main>
        <Section {...page.error403} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default NotFoundPage;
