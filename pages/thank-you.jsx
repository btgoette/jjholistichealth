// Error Page 404

// Page Components
import Head from "components/common/Head";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import Nav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/thankYou.content";

const ThankYou = () => {
  return (
    <div className={page.slug}>
      <Nav/>
      <Head {...page} />
      <Main>
        <Section {...page.thankYou} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default ThankYou;
