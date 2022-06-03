// React Components
import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "public/fonts/FontAwesome/fontawesome";

// Custom Components
import BlogSlider from "components/common/BlogSlider";
import Newsletter from "components/forms/NewsletterForm";

// Custom Data
import content from "public/content/en_US/Components/Layout/Footer/footer.content";

const Footer = () => {
  const today = new Date();

  return (
    <footer>

      <BlogSlider/>

      <section className={content.section1.background}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
                <Newsletter />
            </Col>
          </Row>
        </Container>
      </section>

      <Container fluid className={content.footer.background}>
        <Container>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <ul>
                <li className="text-center">
                  <Link href={content.footer.block1.logo.link} passHref>
                    <figure className="footer-logo logo">
                      <LazyLoadImage
                        src={content.footer.block1.logo.image.src}
                        alt={content.footer.block1.logo.image.alt}
                      />
                    </figure>
                  </Link>
                </li>
                <li>
                  <ul className="footer-social">
                    <li>
                      <a
                        href={content.footer.block1.social.facebook}
                        rel="noreferrer"
                        aria-label="Facebook"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={content.footer.block1.social.instagram}
                        rel="noreferrer"
                        aria-label="Instagram"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={content.footer.block1.social.twitter}
                        rel="noreferrer"
                        aria-label="Twitter"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <a
                    href={content.footer.block1.bbb.link}
                    rel="noreferrer"
                    target="_blank"
                    aria-label="BBB"
                  >
                    <figure className="footer-bbb">
                      <LazyLoadImage
                        src={content.footer.block1.bbb.image.src}
                        alt={content.footer.block1.bbb.image.alt}
                      />
                    </figure>
                  </a>
                </li> */}
              </ul>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <h3>{content.footer.block2.h3}</h3>
              <ul className="footer-contact">
                <li>
                  <FontAwesomeIcon icon={["fab", "wpforms"]} />
                  <Link href={content.footer.block2.contact.link}>
                    {content.footer.block2.contact.li}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={["far", "calendar-check"]} />
                  <Link href={content.footer.block2.book.link}>
                    {content.footer.block2.book.li}
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={["fas", "phone"]} />
                  <a href={content.footer.block2.phone.link}>
                    {content.footer.block2.phone.li}
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                  <a href={content.footer.block2.email.link}>
                    {content.footer.block2.email.li}
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <h3>{content.footer.block3.h3}</h3>
              <ul className="footer-address">
                {content.footer.block3.address.map(({ li }, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <h3>{content.footer.block4.h3}</h3>
              <ul className="footer-resources">
                {content.footer.block4.links.map(({ li, link }, i) => (
                  <li key={i}>
                    <Link href={link}>{li}</Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={content.copyright.background}>
        <Container>
          <Row>
            <Col>
              &copy; {today.getFullYear()} {content.copyright.title}
            </Col>
          </Row>
          <Row>
            <Col className="footer-policy-links">
              <Link href={content.copyright.privacyPolicy.link}>
                {content.copyright.privacyPolicy.li}
              </Link>
              <Link href={content.copyright.cookiePolicy.link}>
                {content.copyright.cookiePolicy.li}
              </Link>
              <Link href={content.copyright.cancellationPolicy.link}>
                {content.copyright.cancellationPolicy.li}
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;