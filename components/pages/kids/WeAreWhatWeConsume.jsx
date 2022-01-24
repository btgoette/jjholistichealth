/* Child Asssement Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import content from 'public/content/en_US/components/pages/kids/wearewhatweconsume.content'


export default function WeAreWhatWeConsume() {

  return (

    <>

      <Container fluid>
        <Container>
          <Row className="custom-row">
            <Col lg={5}>
              <figure className="rounded">
                <LazyLoadImage
                  src={content.block1.image.src}
                  alt={content.block1.image.alt} />
              </figure>
            </Col>
            <Col lg={7}>
              <div className="content">
                <h2>
                  {content.block1.h2}
                </h2>

                {content.block1.p.map(({ li }, i) => (
                  <p key={i}>
                    {li}
                  </p>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

    </>

  )
}