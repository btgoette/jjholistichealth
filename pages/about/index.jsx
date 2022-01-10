// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'
import SectionHead from 'components/layout/SectionHead'
import BookNowCTA from 'components/common/BookNowCTA'
import Gallery from 'components/common/Gallery'

// Custom Content
import content from 'public/content/en_US/pages/about/about.content'


export default function About() {

    return (

        <>
            <Head {...content} />

            <div className="about">

                <Hero {...content} />

                <Container fluid>
                    <Container>
                        <Row className="custom-row">

                            <Col lg={6}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section1.block2.image1.src}
                                        alt={content.section1.block2.image1.alt}
                                    />
                                </figure>
                            </Col>

                            <Col lg={6}>
                                <h2>
                                    {content.section1.block1.h2}
                                </h2>
                                <p>
                                    {content.section1.block1.p}
                                </p>
                                <BookNowCTA />
                            </Col>

                        </Row>

                        <Gallery />

                    </Container>
                </Container>

                <SectionHead {...content.section2} />

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
                                    {content.section2.block1.p.map(({ li }, i) => (
                                        <p key={i}>
                                            {li}
                                        </p>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <SectionHead {...content.section3} />

                <Container fluid>
                    <Container>
                        <Row className="custom-row">
                            <Col lg={6}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section3.block2.image1.src}
                                        alt={content.section3.block2.image1.alt} />
                                </figure>
                            </Col>
                            <Col lg={6}>
                                <div className="content">
                                    <p>
                                        {content.section3.block1.p}
                                    </p>
                                    <h2>
                                        {content.section3.block1.h2}
                                    </h2>
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

                <SectionHead {...content.section4} />

                <Container fluid className="bg-brown">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="content">
                                    {content.section4.block1.p.map(({ li }, i) => (
                                        <p key={i}>
                                            {li}
                                        </p>
                                    ))}
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="content">
                                    <ul className="fa-ul">
                                        {content.section4.block2.list1.map(({ li }, i) => (
                                            <li key={i} data-aos="fade-right">
                                                <span className="fa-li"><FontAwesomeIcon icon={['fab', 'envira']} /></span>{li}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="content">
                                    {content.section4.block3.p.map(({ li }, i) => (
                                        <p key={i}>
                                            {li}
                                        </p>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div >

        </>
    )
}