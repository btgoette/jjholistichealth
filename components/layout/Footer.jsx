// React Components
import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import BookNowCTA from 'components/common/BookNowCTA'

// Custom Data
import data from 'public/content/en_US/data/footer/footer.data'


export default function Footer() {

    const today = new Date();

    return (

        <footer>
            <Container fluid className={data.section1.background}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="holistic-counseling-block">
                                <h2>
                                    {data.section1.block1.h2}
                                </h2>
                                <p>
                                    {data.section1.block1.p.strong}
                                </p>
                                <p>
                                    {data.section1.block1.p.li}
                                </p>
                                <BookNowCTA />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className={data.footer.background}>
                <Container>
                    <Row>
                        <Col md={6} lg={3} className="mb-4">
                            <ul>
                                <li className="text-center">
                                    <Link href={data.footer.block1.logo.link} passHref>
                                        <figure className="footer-logo logo">
                                            <LazyLoadImage
                                                src={data.footer.block1.logo.image.src}
                                                alt={data.footer.block1.logo.image.alt}
                                            />
                                        </figure>
                                    </Link>
                                </li>
                                <li>
                                    <ul className="footer-social">
                                        <li>
                                            <a
                                                href={data.footer.block1.social.facebook} rel="noreferrer" aria-label="Facebook" target="_blank">
                                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href={data.footer.block1.social.instagram} rel="noreferrer" aria-label="Instagram" target="_blank">
                                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href={data.footer.block1.social.twitter} rel="noreferrer" aria-label="Twitter" target="_blank">
                                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href={data.footer.block1.bbb.link} rel="noreferrer" target="_blank" aria-label="BBB">
                                        <figure className="footer-bbb">
                                            <LazyLoadImage
                                                src={data.footer.block1.bbb.image.src}
                                                alt={data.footer.block1.bbb.image.alt}
                                            />
                                        </figure>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6} lg={3} className="mb-4">
                            <h3>
                                {data.footer.block2.h3}
                            </h3>
                            <ul className="footer-contact">
                                <li>
                                    <FontAwesomeIcon icon={['fab', 'wpforms']} />
                                    <Link href={data.footer.block2.contact.link}>
                                        {data.footer.block2.contact.li}
                                    </Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={['far', 'calendar-check']} />
                                    <Link href={data.footer.block2.book.link}>
                                        {data.footer.block2.book.li}
                                    </Link>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={['fas', 'phone']} />
                                    <a href={data.footer.block2.phone.link}>
                                        {data.footer.block2.phone.li}
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={['fas', 'envelope']} />
                                    <a href={data.footer.block2.email.link}>
                                        {data.footer.block2.email.li}
                                    </a>
                                </li>
                                
                            </ul>
                        </Col>
                        <Col md={6} lg={3} className="mb-4">
                            <h3>
                                {data.footer.block3.h3}
                            </h3>
                            <ul className="footer-address">
                                {data.footer.block3.address.map(({ li }, i) => (
                                    <li key={i}>
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={6} lg={3} className="mb-4">
                            <h3>
                                {data.footer.block4.h3}
                            </h3>
                            <ul className="footer-resources">
                                {data.footer.block4.links.map(({ li, link}, i) => (
                                    <li key={i}><Link href={link}>{li}</Link></li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className={data.copyright.background}>
                <Container>
                    <Row>
                        <Col>
                            &copy; {today.getFullYear()} {data.copyright.title}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="footer-policy-links">
                            <Link href={data.copyright.privacyPolicy.link}>{data.copyright.privacyPolicy.li}</Link>&nbsp;&nbsp;&nbsp;
                            <Link href={data.copyright.cookiePolicy.link}>{data.copyright.cookiePolicy.li}</Link>&nbsp;&nbsp;&nbsp;
                            <Link href={data.copyright.cancellationPolicy.link}>{data.copyright.cancellationPolicy.li}</Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </footer>
    );
}