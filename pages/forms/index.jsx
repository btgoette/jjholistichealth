import {Container} from "react-bootstrap";

// Custom Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav";
import Section from "components/layout/Section"

// Page Content
import page from "public/content/en_US/Page/Forms/forms.content";

const Contact = () => {
  return (
    <div className={page.slug}>
      <JJNav />
      <Head {...page} />
      <Main>
        <Breadcrumbs {...page} />
        <section className="py-0">
          <Container>
          <h1>Contact Information &amp; Forms</h1>
          </Container>
        </section>
        <Section {...page.contact} />
        <Section {...page.formsList} />
      </Main>
    </div>
  );
}

export default Contact;