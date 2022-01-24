/* Cardio Avoid Hydrogenated Oil Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Layout Component
import SectionHead from 'components/layout/SectionHead'

// Component Content
import content from 'public/content/en_US/components/pages/conditions/cardioavoidsugar.content'


export default function CardioAvoidHydrogenatedOil() {

    return (

        <>

            <SectionHead {...content} />

            <Container fluid className="bg-brown">
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
                        <Col lg={{ span: 5, order: 0 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block2.image.src}
                                    alt={content.block2.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 7, order: 1 }}>
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
                </Container>
            </Container>

        </>

    )
}