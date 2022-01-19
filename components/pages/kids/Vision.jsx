/* Child Asssement Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Component Content
import content from 'public/content/en_US/components/pages/kids/vision.content'


export default function Vision() {

  return (

    <>

      <Container fluid className="bg-light-green">
        <Container>
          <Row className="custom-row">
            <Col lg={{ span: 5, order: 1 }}>
              <figure className="rounded">
                <LazyLoadImage
                  src={content.block1.image.src}
                  alt={content.block1.image.alt}
                />
              </figure>
            </Col>
            <Col lg={{ span: 7, order: 0 }}>
              <div className="content">
                <h2>
                  {content.block1.h2}
                </h2>
                <p>
                  {content.block1.p}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

    </>

  )
}