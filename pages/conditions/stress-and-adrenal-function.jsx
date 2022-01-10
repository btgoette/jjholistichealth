// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'
import SectionHead from 'components/layout/SectionHead'

// Custom Content
import content from 'public/content/en_US/pages/conditions/stressandadrenalfunction.content'

export default function StressAndAdrenalFunction() {

    return (

        <>

            <Head {...content} />

            <div className="stress-and-adrenal-function">

                <Hero {...content} />

                <Container fluid>
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section2.block1.image1.src}
                                        alt={content.section2.block1.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 0 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section2.block1.h4}
                                    </p>
                                    <p>
                                        {content.section2.block1.p}
                                    </p>
                                </div>
                            </Col>
                            <Col lg={{ span: 5, order: 2 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section2.block2.image1.src}
                                        alt={content.section2.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 3 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section2.block2.h4}
                                    </p>
                                    <p>
                                        {content.section2.block2.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container fluid className="bg-light-green">
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section2.block3.image1.src}
                                        alt={content.section2.block3.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 0 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section2.block3.h4}
                                    </p>
                                    <p>
                                        {content.section2.block3.p}
                                    </p>
                                </div>
                            </Col>
                            <Col lg={{ span: 5, order: 2 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section2.block4.image1.src}
                                        alt={content.section2.block4.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 3 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section2.block4.h4}
                                    </p>
                                    <p>
                                        {content.section2.block4.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <SectionHead {...content.section3} />

                <Container fluid>
                    <Container>
                        <Row>
                            {content.section3.block1.list1.map(({ h4, p }, i) => (
                                <Col key={i} lg={6}>
                                    <p className="h4">
                                        {h4}
                                    </p>
                                    <p>
                                        {p}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Container>

            </div>

        </>

    )
}