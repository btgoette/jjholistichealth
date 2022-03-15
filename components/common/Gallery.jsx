// React Components
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Row, Container, Col } from "react-bootstrap";

export default function Gallery(block) {
  return (
    <section className="bg-light-green">
      <Container>
        <Row className="photo-gallery">
          <Col className="photos rounded">
            {block.img.map(({ order, src, fullsrc, alt }, i) => (
              <div key={i} className={order}>
                <Link href={fullsrc} passHref>
                  <LazyLoadImage src={src} alt={alt} />
                </Link>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
