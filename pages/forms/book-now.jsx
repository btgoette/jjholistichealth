// React Components
import { Container, Row, Col } from "react-bootstrap";

// Custom Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import BookNowForm from "components/forms/BookNowForm";

// Page Content
import page from "public/content/en_US/Page/Forms/bookNow.content";

export default function BookNow() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Breadcrumbs {...page} />
      <Container>
        <Row className="custom-row">
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
              <BookNowForm />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
