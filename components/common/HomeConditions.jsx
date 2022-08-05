/* Home Conditions Component */

//  React Components
import { Card, Container } from "react-bootstrap";
import Link from "next/link";

const ConditionsHome = (block) => {
  return (
    <>
      <Container className="home-conditions-grid">
        {block.condition.map(({ src, alt, name, content }, i) => (
          <div key={i} className="card-block">
            <Card block-aos="fade-up">
              <Card.Body>
                <Link href="/conditions" passHref>
                  <a>
                    <Card.Img className="text-center" src={src} alt={alt} />
                    <div className="card-content">
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{content}</Card.Text>
                    </div>
                  </a>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Container>
    </>
  );
};

export default ConditionsHome;
