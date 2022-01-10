// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Custom Content
import content from 'public/content/en_US/pages/about/whychoosejandj.content'


export default function WhyChooseJJ() {

    return (

        <>

            <Head {...content} />

            <div className="why-choose-j-and-j">

                <Hero {...content} />

                <Container fluid>
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 4, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section1.block2.image1.src}
                                        alt={content.section1.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ offset: 1, span: 7, order: 1 }}>
                                <div className="content">
                                    <h2>
                                        {content.section1.block1.h2}
                                    </h2>
                                    <p>
                                        {content.section1.block1.p}
                                    </p>
                                    <p className="h4">
                                        <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                        {content.section1.block1.list1Title}
                                    </p>
                                    <ul className="fa-ul">
                                        {content.section1.block1.list1.map(({ li }, i) => (
                                            <li key={i} data-aos="fade-right">
                                                <span className="fa-li"><FontAwesomeIcon icon={['fab', 'envira']} /></span>{li}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="h4">
                                        <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                        {content.section1.block1.list2Title}
                                    </p>
                                    <ul className="fa-ul">
                                        {content.section1.block1.list2.map(({ li }, i) => (
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

                <Container fluid className="bg-light-green">
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 6, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section2.block2.image1.src}
                                        alt={content.section2.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 6, order: 0 }}>
                                <div className="content">
                                    <h2>
                                        {content.section2.block1.h2}
                                    </h2>
                                    <p className="h4">
                                        <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                        {content.section2.block1.list1Title}
                                    </p>
                                    <ul className="fa-ul">
                                        {content.section2.block1.list1.map(({ li }, i) => (
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

                <Container fluid>
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 6, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section3.block2.image1.src}
                                        alt={content.section3.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 6, order: 1 }}>
                                <div className="content">
                                    <h2>
                                        {content.section3.block1.h2}
                                    </h2>
                                    <p className="h4">
                                        <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                        {content.section3.block1.h4}
                                    </p>
                                    <p className="h4">
                                        <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                        {content.section3.block1.list1Title}
                                    </p>
                                    <ul className="fa-ul">
                                        {content.section3.block1.list1.map(({ li }, i) => (
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

                <Container fluid className="bg-brown">
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 6, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section4.block2.image1.src}
                                        alt={content.section4.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 6, order: 0 }}>
                                <div className="content">
                                    <h2>
                                        {content.section4.block1.h2}
                                    </h2>
                                    {content.section4.block1.h4.map(({ li }, i) => (
                                            <p className="h4" key={i} data-aos="fade-right">
                                                <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />{li}
                                            </p>
                                        ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container fluid>
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 6, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section5.block2.image1.src}
                                        alt={content.section5.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 6, order: 1 }}>
                                <div className="content">
                                    <h2>
                                        {content.section5.block1.h2}
                                    </h2>
                                    {content.section5.block1.h4.map(({ li }, i) => (
                                            <p className="h4" key={i} data-aos="fade-right">
                                                <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />{li}
                                            </p>
                                        ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </div>

        </>
    )
}