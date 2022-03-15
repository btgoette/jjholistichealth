/* Home Conditions Component */

//  React Components
import { Card, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

// Page Components
import SectionHead from "components/common/SectionHead";

export default function ConditionsHome(block) {
  return (
    <>
      <SectionHead {...block} />
      <section className="bg-light-green">
        <Container>
          <Row>
            {block.condition.map(({ src, alt, name }, i) => (
              <Col key={i} md={6} lg={4} className="card-block">
                <Card block-aos="fade-up">
                  <Card.Body>
                    <Link href="/conditions" passHref>
                      <a>
                        <Card.Img className="text-center" src={src} alt={alt} />
                        <div className="card-content">
                          <Card.Title>{name}</Card.Title>
                          {/* <Card.Text>
                                                {block}
                                            </Card.Text> */}
                        </div>
                      </a>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
