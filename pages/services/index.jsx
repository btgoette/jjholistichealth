// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'
import BookNowCTA from 'components/common/BookNowCTA'
import SectionHead from 'components/layout/SectionHead'

// Custom Styles and Content
import styles from 'scss/pages/services.module.scss'
import content from 'public/content/en_US/pages/services/services.content'


export default function Services() {

    return (

        <>
            <Head {...content} />

            <div className={styles.services}>

                <Hero {...content} />

                <Container fluid>
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 4, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section1.block2.image1.src}
                                        alt={content.section1.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 8, order: 0 }}>
                                <div className="content">
                                    <h2>
                                        {content.section1.block1.h2}
                                    </h2>
                                    <p>
                                        {content.section1.block1.p}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="custom-row">
                            <Col lg={{ span: 4, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section1.block4.image1.src}
                                        alt={content.section1.block4.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 8, order: 1 }}>
                                <div className="content">
                                    {content.section1.block3.p.map(({ li }, i) => (
                                        <p key={i}>
                                            {li}
                                        </p>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container fluid className="bg-light-green pt-5">
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 3, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section2.block2.image1.src}
                                        alt={content.section2.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 9, order: 0 }}>
                                <div className="content">
                                    <h2>
                                        {content.section2.block1.h2}
                                    </h2>
                                    {content.section2.block1.p.map(({ li }, i) => (
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
                                        src={content.section2.block4.image1.src}
                                        alt={content.section2.block4.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 9, order: 1 }}>
                                <div className="content">
                                    <h2>
                                        {content.section2.block3.h2}
                                    </h2>
                                    {content.section2.block3.p.map(({ li }, i) => (
                                        <p key={i}>
                                            {li}
                                        </p>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container fluid>
                    <Container>
                        <Row className="custom-row mb-0 mb-lg-5">
                            <Col lg={{ span: 3, order: 1 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.section3.block2.image1.src}
                                        alt={content.section3.block2.image1.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 9, order: 0 }}>
                                <h2>
                                    {content.section3.block1.h2}
                                </h2>
                                {content.section3.block1.p.map(({ li }, i) => (
                                    <p key={i}>
                                        {li}
                                    </p>
                                ))}
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            {content.section3.block3.list1.map(({ li, ul }, i) => (
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
                                    {content.section3.block3.h4}
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            {content.section3.block3.list2.map(({ li }, i) => (
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

                <SectionHead {...content.section4} />

                <Container fluid className="bg-light-green">
                    <Container>
                        <Row>
                            <Col lg={6} data-aos="fade-up">
                                <div className={styles.jjPlan}>
                                    <div className={styles.jjPlanTitle1}>
                                        <h3 className="mb-0 text-white">
                                            {content.section4.block1.h3}
                                        </h3>
                                        <p className="text-white">
                                            {content.section4.block1.p}
                                        </p>
                                    </div>
                                    <div className={styles.jjPlanContent}>
                                        {content.section4.block1.list1.map(({ li }, i) => (
                                            <p key={i}>
                                                {li}<hr />
                                            </p>
                                        ))}
                                        <div className="text-center">
                                            <BookNowCTA />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} data-aos="fade-up">
                                <div className={styles.jjPlan}>
                                    <div className={styles.jjPlanTitle2}>
                                        <h3 className="mb-0 text-white">
                                            {content.section4.block2.h3}
                                        </h3>
                                        <p className="text-white">
                                            {content.section4.block2.p1}<br />
                                            {content.section4.block2.p2}
                                        </p>
                                    </div>
                                    <div className={styles.jjPlanContent}>
                                        {content.section4.block2.list1.map(({ li }, i) => (
                                            <p key={i}>
                                                {li}<hr />
                                            </p>
                                        ))}
                                        <div className="text-center">
                                            <BookNowCTA />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </div>

        </>
    )
}