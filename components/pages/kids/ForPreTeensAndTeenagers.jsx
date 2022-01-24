/* Kids For Pre-Teen and Teenagers Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Component Content 
import content from 'public/content/en_US/components/pages/kids/forpreteensandteenagers.content'


export default function ForPreTeensAndTeenagers() {

  return (

    <>

      <Container fluid>
        <Container>
          <Row className="custom-row">
            <Col lg={{ span: 5, order: 1 }}>
              <figure className="rounded">
                <LazyLoadImage
                  src={content.block1.image.src}
                  alt={content.block1.image.alt} />
              </figure>
            </Col>
            <Col lg={{ span: 7, order: 0 }}>
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
          <Row className="custom-row">
            <Col lg={{ span: 5, order: 2 }}>
              <figure className="rounded">
                <LazyLoadImage
                  src={content.block2.image.src}
                  alt={content.block2.image.alt} />
              </figure>
            </Col>
            <Col lg={{ span: 7, order: 3 }}>
              <div className="content">
                <br />
                <p>
                  {content.block2.p}
                </p>
                <ul className="fa-ul">
                  {content.block2.ul.map(({ li }, i) => (
                    <li key={i} data-aos="fade-right">
                      <span className="fa-li"><FontAwesomeIcon icon={['fab', 'envira']} /></span>{li}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

    </>

  )
}