// React Components
import { Container, Row, Col } from "react-bootstrap";

// Custom Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import FoodIntoleranceForm from "components/forms/FoodIntoleranceForm";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Forms/foodIntolerance.content";

const FoodIntolerance = () => {
  return (
    <div className={page.slug}>
      <JJNav />
      <Head {...page} />
      <Main>
        <Breadcrumbs {...page} />
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
                <FoodIntoleranceForm />
              </div>
            </Col>
          </Row>
        </Container>
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default FoodIntolerance;