/* About Vision Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Layout Components
import SectionHead from 'components/layout/SectionHead'

// Component Content
import content from 'public/content/en_US/components/pages/about/vision.content'


export default function Vision() {

  return (

    <>

      <SectionHead {...content} />

      <Container fluid>
        <Container>
          <Row className="custom-row">
            <Col lg={6}>
              <figure className="rounded">
                <LazyLoadImage
                  src={content.block1.image.src}
                  alt={content.block1.image.alt} />
              </figure>
            </Col>
            <Col lg={6}>
              <div className="content.block1">
                <p>
                  {content.block1.p}
                </p>
                <h2>
                  {content.block1.h2}
                </h2>
                <ul className="fa-ul">
                  {content.block1.ul.map(({ li }, i) => (
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