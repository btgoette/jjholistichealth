/* Home You Are What You Eat Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Component Content
import content from 'public/content/en_US/components/pages/home/youarewhatyoueat.content'


export default function YouAreWhatYouEat() {

  return (

    <>

      <Container fluid className="youAreWhatYouEat">
        <Container>
          <Row className="custom-row">

            <Col lg={{ span: 6, order: 0 }} className="youAreWhatYouEatImage">
              <figure className="healthyWoman">
                <LazyLoadImage
                  src={content.block1.healthyWoman.src}
                  alt={content.block1.healthyWoman.alt}
                />
              </figure>
              <figure className="healthyMan">
                <LazyLoadImage
                  src={content.block1.healthyMan.src}
                  alt={content.block1.healthyMan.alt}
                />
              </figure>
            </Col>

            <Col lg={{ span: 6, order: 1 }} >
              <div className="content">
                <h2>
                  {content.block1.h2}
                </h2>
                <p>
                  {content.block1.p}
                </p>
              </div>
              <figure className="fruit">
                <LazyLoadImage
                  src={content.block1.fruit.src}
                  alt={content.block1.fruit.alt}
                />
              </figure>
            </Col>

          </Row>
        </Container>
      </Container >

    </>

  )
}
