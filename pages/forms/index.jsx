import {Container} from "react-bootstrap";

// Custom Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import Main from "components/layout/Main";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Nav from "components/layout/JJNav";
import Section from "components/layout/Section"

// Page Content
import page from "public/content/en_US/Page/Forms/forms.content";

const Contact = () => {
  return (
    <div className={page.slug}>
      <Nav/>
      <Head {...page} />
      <Main>
        <Breadcrumbs {...page} />
        <section className="py-0">
          <Container>
          <h1>Contact Information &amp; Forms</h1>
          </Container>
        </section>
        <Section {...page.formsList} />
        <Section {...page.contact} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default Contact;