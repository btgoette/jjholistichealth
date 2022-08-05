/* Home Conditions Component */

//  React Components
import { Card, Container } from "react-bootstrap";
import Link from "next/link";

const ConditionsKids = (block) => {
  return (
    <>
      <Container className="kids-home-conditions-grid">
        {block.condition.map(({ src, alt, name, content }, i) => (
          <div key={i} className="card-block">
            <Card block-aos="fade-up">
              <Card.Body>
                <Card.Img className="text-center" src={src} alt={alt} />
                <div className="card-content">
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{content}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Container>
    </>
  );
};

export default ConditionsKids;
