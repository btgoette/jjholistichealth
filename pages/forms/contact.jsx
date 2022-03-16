// React Components
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Custom Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import ContactForm from "components/forms/ContactForm";

// Page Content
import page from "public/content/en_US/Page/Forms/contact.content";

export default function Contact() {
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
            <div className={"form-section " + page.block.form.slug}>
              <h1>{page.block.form.title}</h1>
              {page.block.form.text.map(({ p }, i) => (
                <p key={i}>{p}</p>
              ))}
              <ContactForm />
            </div>
          </Col>
          <Col
            lg={{
              offset: page.block.contactInfo.column[0].offset,
              span: page.block.contactInfo.column[0].span,
              order: page.block.contactInfo.column[0].order,
            }}
          >
            <div className={page.block.contactInfo.slug}>
              <h2>{page.block.contactInfo.title}</h2>
              <p>
                <FontAwesomeIcon icon={["fas", "phone"]} />
                <a href={page.block.contactInfo.phone.link}>
                  {page.block.contactInfo.phone.li}
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "envelope"]} />
                <a href={page.block.contactInfo.email.link}>
                  {page.block.contactInfo.email.li}
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "building"]} />
                <div className="d-block">
                  {page.block.contactInfo.address.map(({ li }, i) => (
                    <span key={i}>
                      {li}
                      <br />
                    </span>
                  ))}
                </div>
              </p>
              <p>
                <FontAwesomeIcon icon={["fas", "clock"]} />
                <div className="d-block">
                  {page.block.contactInfo.hours.map(({ li }, i) => (
                    <span key={i}>{li}<br/></span>
                  ))}
                </div>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
