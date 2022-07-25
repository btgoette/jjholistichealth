/* Functional Evaluation Component */

//  React Components
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col, Button } from "react-bootstrap";

const FunctionalEvaluation = (block) => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={{span:7 }}>
          <div className="content">
              <h2>{block.article.title}</h2>
              {block.article.text.map(({ p }, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
            <figure className="human-anatomy">
              <LazyLoadImage
                src={block.chart.img.src}
                alt={block.chart.img.alt}
              />
              {block.chart.list.map(({ id, classes, number, condition }, i) => (
                <button
                  key={i}
                  href={id}
                  aria-label={condition}
                  className={classes}
                >
                  {number}
                  <p className="conditions-box bg-green m-0 text-center text-white">
                    {condition}
                  </p>
                </button>
              ))}
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FunctionalEvaluation;