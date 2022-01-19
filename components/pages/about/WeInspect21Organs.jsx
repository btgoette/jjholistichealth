/* About We Inspect 21 Organs Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Component Content
import content from 'public/content/en_US/components/pages/about/weinspect21organs.content'


export default function WeInspect21Organs() {

    return (

        <>

            <Container fluid>
                <Container>
                    <Row className="custom-row">
                        <Col lg={{ span: 4, order: 0 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block1.image.src}
                                    alt={content.block1.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ offset: 1, span: 7, order: 1 }}>
                            <div className="content">
                                <h2>
                                    {content.block1.h2}
                                </h2>
                                <p>
                                    {content.block1.p}
                                </p>
                                <p className="h4">
                                    <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                    {content.block1.list1Title}
                                </p>
                                <ul className="fa-ul">
                                    {content.block1.list1.map(({ li }, i) => (
                                        <li key={i} data-aos="fade-right">
                                            <span className="fa-li"><FontAwesomeIcon icon={['fab', 'envira']} /></span>{li}
                                        </li>
                                    ))}
                                </ul>
                                <p className="h4">
                                    <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                    {content.block1.list2Title}
                                </p>
                                <ul className="fa-ul">
                                    {content.block1.list2.map(({ li }, i) => (
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