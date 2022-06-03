// React Components
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "public/fonts/FontAwesome/fontawesome";

// Custom Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";
// Page Content
import page from "public/content/en_US/Page/Forms/forms.content";

export default function Contact() {
  return (
    <div className={page.slug}>
    <JJNav/>
      <Head {...page} />
      <Breadcrumbs {...page} />
      <Container>
        <Row className="custom-row">
          <Col>
            <div className="content">
              <h1>{page.block.formsList.title}</h1>
              {page.block.formsList.text.map(({p}, i) =>(
                <p key={i}>{p}</p>
              ))}
              <ul className="fa-ul">
                {page.block.formsList.list.map(({ li, href }, j) => (
                  <li key={j}>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={["fab", "envira"]} />
                    </span>
                    <Link href={href}>{li}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
