/* Services Page */

// Page Components
import Breadcrumbs from "components/common/Breadcrumbs";
import Head from "components/common/Head";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import Nav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Services/highfrequencyendocrinesteam.content";

const Services = () => {
  return (
    <div className={page.slug}>
      <Nav/>
      <Head {...page} />
      <Main>
        <Breadcrumbs {...page} />
        <Section {...page.highFrequencyEndocrineSteam} />
        <Section {...page.theExperience} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
};

export default Services;
