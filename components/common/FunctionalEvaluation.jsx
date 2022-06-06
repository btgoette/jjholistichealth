/* Functional Evaluation Component */

//  React Components
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col, Button } from "react-bootstrap";

const FunctionalEvaluation = (block) => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg={6}>
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
          <Col lg={6}>
            <div className="content">
              <h2>{block.article.title}</h2>
              {block.article.text.map(({ p }, j) => (
                <p key={j}>{p}</p>
              ))}
              <ol>
                {block.article.list.map(({ li }, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ol>
              <Button
                re="noreferer"
                target="_blank"
                href="/docs/Functional-Evaluation-with-label.pdf"
              >
                Download FE PDF
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FunctionalEvaluation;