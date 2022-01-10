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
import content from 'public/content/en_US/pages/conditions/cardiovascular.content'

export default function Contact() {

    return (

        <>

            <Head {...content} />

            <div className="cardiovascular">

                <Hero {...content} />


                <Container fluid>
                    <Container>
                        <Row>
                            <Col lg={{ span: 5, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section2.block2.image1.src}
                                        alt={content.section2.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 0 }}>
                                <div className="content">
                                    {content.section2.block1.list1.map(({ h4, p }, i) => (
                                        <div key={i}>
                                            <p className="h4">
                                                {h4}
                                            </p>
                                            <p>
                                                {p}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container fluid className="bg-light-green">
                    <Container>
                        <Row>
                            {content.section3.block1.list1.map(({ image1, h4 }, i) => (
                                <Col key={i} lg={4} md={6} data-aos-delay="0" data-aos="fade-up">
                                    <figure className="round">
                                        <LazyLoadImage
                                            src={image1.src}
                                            alt={image1.alt}
                                        />
                                    </figure>
                                    <p className="h4">
                                        <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                        {h4}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Container>

                <Container fluid>
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
                                    <p>
                                        {content.section4.block3.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section4.block6.image1.src}
                                        alt={content.section4.block6.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 1 }}>
                                <div className="content">
                                    <p>
                                        {content.section4.block5.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <SectionHead {...content.section5}/>

                <Container fluid className="bg-brown">
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 1 }}>
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
                            <Col lg={{ span: 5, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section5.block4.image1.src}
                                        alt={content.section5.block4.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 1 }}>
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
                    </Container>
                </Container>

                <Container fluid>
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section6.block2.image1.src}
                                        alt={content.section6.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 0 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section6.block1.h4}
                                    </p>
                                    <p>
                                        {content.section6.block1.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="custom-row">
                            <Col lg={{ span: 5, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section6.block4.image1.src}
                                        alt={content.section6.block4.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 7, order: 1 }}>
                                <div className="content">
                                    <p className="h4">
                                        {content.section6.block3.h4}
                                    </p>
                                    <p>
                                        {content.section6.block3.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </div>

        </>
    )
}