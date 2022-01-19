/* About Child Asssement Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Component Content
import content from 'public/content/en_US/components/pages/about/childassessment.content'


export default function ChildAssessment() {

    return (

        <>

            <Container fluid>
                <Container>
                    <Row className="custom-row">
                        <Col lg={{ span: 6, order: 0 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block1.image.src}
                                    alt={content.block1.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 6, order: 1 }}>
                            <div className="content">
                                <h2>
                                    {content.block1.h2}
                                </h2>
                                <p className="h4">
                                    <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                    {content.block1.h4}
                                </p>
                                <p className="h4">
                                    <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                    {content.block1.listTitle}
                                </p>
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