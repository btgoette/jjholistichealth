/* Child Asssement Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Custom Content
import content from 'public/content/en_US/components/pages/services/fullfunctionalevaluation.content'


export default function FullFunctionEvaluation() {

    return (

        <>

            <Container fluid>
                <Container>
                    <Row className="custom-row mb-0 mb-lg-5">
                        <Col lg={{ span: 3, order: 1 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block1.image.src}
                                    alt={content.block1.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 9, order: 0 }}>
                            <h2>
                                {content.block1.h2}
                            </h2>
                            {content.block1.p.map(({ li }, i) => (
                                <p key={i}>
                                    {li}
                                </p>
                            ))}
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        {content.block2.list.map(({ li, ul }, i) => (
                            <Col key={i} sm={6} lg={4}>
                                <p className="h4">
                                    <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                    {li}
                                </p>
                                <ul className="fa-ul">
                                    {ul.map(({ li }, i) => (
                                        <li key={i} data-aos-delay="0" data-aos="fade-right">
                                            <span className="fa-li"><FontAwesomeIcon icon={['fab', 'envira']} /></span>
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col>
                            <p className="h4">
                                <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                {content.block3.h4}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {content.block4.list.map(({ li }, i) => (
                            <Col sm={6} key={i}>
                                <p className="mb-0">
                                    <FontAwesomeIcon icon={['fab', 'envira']} />
                                    {li}
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

        </>

    )
}