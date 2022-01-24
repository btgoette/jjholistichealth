/* Women Blood Chemistry Panel Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Component Content
import content from 'public/content/en_US/components/pages/conditions/womenbloodchemistrypanel.content'


export default function WomenBloodChemistryPanel() {

    return (

        <>

            <Container fluid className="bg-brown">
                <Container>
                    <Row className="custom-row">
                        <Col lg={{ span: 5, order: 0 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block1.image.src}
                                    alt={content.block1.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 7, order: 0 }}>
                            <div className="content">
                                <p className="h4">
                                    {content.block1.h4}
                                </p>
                                <p>
                                    {content.block1.p}
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="custom-row">
                        <Col lg={{ span: 5, order: 1 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block2.image.src}
                                    alt={content.block2.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 7, order: 0 }}>
                            <div className="content">
                                <p className="h4">
                                    {content.block2.h4}
                                </p>
                                <p>
                                    {content.block2.p}
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="custom-row">
                        <Col lg={{ span: 5, order: 0 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block3.image.src}
                                    alt={content.block3.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 7, order: 1 }}>
                            <div className="content">
                                <p className="h4">
                                    {content.block3.h4}
                                </p>
                                <p>
                                    {content.block3.p}
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="custom-row">
                        <Col>
                            <p className="h4">
                                {content.block4.h4}
                            </p>
                            {content.block4.p.map(({ li }, i) => (
                                <p key={i}>
                                    {li}
                                </p>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>

    )
}