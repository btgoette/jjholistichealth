/* About Testimonial Hero Component */

//  React Components
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";

const TestimonialHero = (hero) => {
  return (
    <Container fluid className="testimonials-section">
      <Container>
        <Row>
          <Col>
            <h1>{hero.title}</h1>
          </Col>
        </Row>
        <Row className="custom-row service-testimonial">
          <Col lg={{ span: 4, order: 1 }}>
            <figure className="service-testimonial-image">
              <LazyLoadImage src={hero.img.src} alt={hero.img.alt} />
            </figure>
            <p className="testimonial-name h5">-{hero.name}</p>
          </Col>
          <Col lg={{ spand: 8, order: 0 }}>
            <div className="content">
              <h2 className="left-quote">&ldquo;</h2>
              <div className="service-quote">
                {hero.p.map(({ li }, i) => (
                  <p key={i}>{li}</p>
                ))}
              </div>
              <h2 className="right-quote">&rdquo;</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default TestimonialHero;