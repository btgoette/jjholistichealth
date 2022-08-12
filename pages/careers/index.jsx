import {Container} from "react-bootstrap";

// Custom Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import Main from "components/layout/Main";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Nav from "components/layout/JJNav";
import Section from "components/layout/Section"

// Page Careers
import page from "public/content/en_US/Page/Careers/careers.content";

const Careers = () => {
  return (
    <div className={page.slug}>
      <Nav/>
      <Head {...page} />
      <Main>
        <Breadcrumbs {...page} />
        <section className="py-0">
          <Container>
          <h1>Careers</h1>
          </Container>
        </section>
        <Section {...page.careersForm} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default Careers;