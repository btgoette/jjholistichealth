// React Components
import { Container, Row, Col } from "react-bootstrap";

// Custom Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import EndocrineSteamIntakeForm from "components/forms/EndocrineSteamIntakeForm";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import Nav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Forms/endocrineSteamIntake.content";

const EndocrineSteamIntake = () => {
  return (
    <div className={page.slug}>
      <Nav/>
      <Head {...page} />
      <Main>
        <Breadcrumbs {...page} />
        <section className="pt-0">
          <Container>
            <Row>
              <Col
                lg={{
                  offset: page.block.form.column[0].offset,
                  span: page.block.form.column[0].span,
                  order: page.block.form.column[0].order,
                }}
              >
                <div className="form-section">
                  <h1>{page.block.form.title}</h1>
                  {page.block.form.text.map(({ p }, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <EndocrineSteamIntakeForm />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default EndocrineSteamIntake;