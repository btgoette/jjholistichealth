// React Components
import { Container, Row, Col } from "react-bootstrap";

// Custom Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import Covid19Form from "components/forms/Covid19Form";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Forms/covid19.content";

const Covid19 = () => {
  return (
    <div className={page.slug}>
      <JJNav />
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
                  <Covid19Form />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Main>
    </div>
  );
}

export default Covid19;