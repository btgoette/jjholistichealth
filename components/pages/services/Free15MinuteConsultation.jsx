/* Child Asssement Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Common Components
import BookNowCTA from 'components/common/BookNowCTA'

// Component Content
import content from 'public/content/en_US/components/pages/services/free15minuteconsultation.content'


export default function Free15MinuteConsultation() {

    return (
        <>

            <Container fluid className="bg-light-green pt-5">
                <Container>
                    <Row className="custom-row">
                        <Col lg={{ span: 3, order: 1 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block1.image.src}
                                    alt={content.block1.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 9, order: 0 }}>
                            <div className="content">
                                <h2>
                                    {content.block1.h2}
                                </h2>
                                {content.block1.p.map(({ li }, i) => (
                                    <p key={i}>
                                        {li}
                                    </p>
                                ))}
                                <BookNowCTA />
                            </div>
                        </Col>
                    </Row>
                    <Row className="custom-row">
                        <Col lg={{ span: 3, order: 0 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block2.image.src}
                                    alt={content.block2.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 9, order: 1 }}>
                            <div className="content">
                                <h2>
                                    {content.block2.h2}
                                </h2>
                                {content.block2.p.map(({ li }, i) => (
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