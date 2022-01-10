// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Custom Content
import content from 'public/content/en_US/pages/conditions/immunesystem.content'


export default function ImmuneSystem() {

    return (

        <>

            <Head {...content} />

            <div className="immune-system">

                <Hero {...content} />

                <Container fluid>
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section2.block2.image1.src}
                                        alt={content.section2.block2.image1.alt}
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
                        </Row>

                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section2.block4.image1.src}
                                        alt={content.section2.block4.image1.alt}
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
                        </Row>
                    </Container>
                </Container>

                <Container fluid className="bg-light-green">
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section3.block2.image1.src}
                                        alt={content.section3.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 0 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section3.block1.h4}
                                    </p>
                                    <p>
                                        {content.section3.block1.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section3.block4.image1.src}
                                        alt={content.section3.block4.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 0 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section3.block3.h4}
                                    </p>
                                    <p>
                                        {content.section3.block3.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Container>

                <Container fluid >
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section4.block2.image1.src}
                                        alt={content.section4.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 0 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section4.block1.h4}
                                    </p>
                                    <p>
                                        {content.section4.block1.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section4.block4.image1.src}
                                        alt={content.section4.block4.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 0 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section4.block3.h4}
                                    </p>
                                    <p>
                                        {content.section4.block3.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container fluid className="bg-brown">
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section5.block2.image1.src}
                                        alt={content.section5.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 0 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section5.block1.h4}
                                    </p>
                                    <p>
                                        {content.section5.block1.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section5.block4.image1.src}
                                        alt={content.section5.block4.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 0 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section5.block3.h4}
                                    </p>
                                    <p>
                                        {content.section5.block3.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section5.block6.image1.src}
                                        alt={content.section5.block6.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 1 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section5.block5.h4}
                                    </p>
                                    <p>
                                        {content.section5.block5.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </div>

        </>
    );
}