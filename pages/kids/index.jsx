// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'
import ConditionsKids from 'components/common/ConditionsKids'

// Custom Content
import content from 'public/content/en_US/pages/kids/kids.content'


export default function Kids() {

  return (

    <>
      <Head {...content} />

      {/* <Promo {...content.promo}/> */}

      <div className="about">

        <Hero {...content} />

        <Container fluid>
          <Container>
            <Row className="custom-row">

              <Col lg={5}>
                <figure className="rounded">
                  <LazyLoadImage
                    src={content.section1.block2.image1.src}
                    alt={content.section1.block2.image1.alt}
                  />
                </figure>
              </Col>

              <Col lg={7}>
                <h2>
                  {content.section1.block1.title}
                </h2>
                <p>
                  {content.section1.block1.p}
                </p>
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
                    src={content.section2.block2.image1.src}
                    alt={content.section2.block2.image1.alt}
                  />
                </figure>
              </Col>
              <Col lg={{ span: 7, order: 0 }}>
                <div className="content">
                  <h2>
                    {content.section2.block1.title}
                  </h2>
                  <p>
                    {content.section2.block1.p}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid>
          <Container>
            <Row className="custom-row">
              <Col lg={5}>
                <figure className="rounded">
                  <LazyLoadImage
                    src={content.section3.block2.image1.src}
                    alt={content.section3.block2.image1.alt} />
                </figure>
              </Col>
              <Col lg={7}>
                <div className="content">
                  <h2>
                    {content.section3.block1.title}
                  </h2>
                  <ul className="fa-ul">
                    {content.section3.block1.ul.map(({ li }, i) => (
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
              <Col lg={{ span: 5, order: 1 }}>
                <figure className="rounded">
                  <LazyLoadImage
                    src={content.section4.block2.image1.src}
                    alt={content.section4.block2.image1.alt} />
                </figure>
              </Col>
              <Col lg={{ span: 7, order: 0 }}>
                <div className="content">
                  <h2>
                    {content.section4.block1.title}
                  </h2>
                  {content.section4.block1.p.map(({ li }, i) => (
                    <p key={i}>
                      {li}
                    </p>
                  ))}
                </div>
              </Col>

            </Row>
          </Container>
        </Container>

        <Container>
          <Container>
            <Row className="custom-row">
              <Col lg={5}>
                <figure className="rounded">
                  <LazyLoadImage
                    src={content.section5.block2.image1.src}
                    alt={content.section5.block2.image1.alt} />
                </figure>
              </Col>
              <Col lg={7}>
                <div className="content">
                  <h2>
                    {content.section5.block1.title}
                  </h2>

                  {content.section5.block1.p.map(({ li }, i) => (
                    <p key={i}>
                      {li}
                    </p>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid className="bg-light-green">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="content">
                  <h2>
                    {content.section6.block1.title}
                  </h2>
                </div>
              </Col>
              <ConditionsKids />
              <Col lg={12}>
                <p>
                  <br />
                  {content.section6.block1.p}
                </p>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container>
          <Container>
            <Row className="custom-row">
              <Col lg={{ span: 5, order: 1 }}>
                <figure className="rounded">
                  <LazyLoadImage
                    src={content.section7.block2.image1.src}
                    alt={content.section7.block2.image1.alt} />
                </figure>
              </Col>
              <Col lg={{ span: 7, order: 0 }}>
                <div className="content">
                  <h2>
                    {content.section7.block1.title}
                  </h2>

                  {content.section7.block1.p.map(({ li }, i) => (
                    <p key={i}>
                      {li}
                    </p>
                  ))}
                </div>
              </Col>
            </Row>
            <Row className="custom-row">
              <Col lg={{ span: 5, order: 2 }}>
                <figure className="rounded">
                  <LazyLoadImage
                    src={content.section7.block4.image1.src}
                    alt={content.section7.block4.image1.alt} />
                </figure>
              </Col>
              <Col lg={{ span: 7, order: 3 }}>
                <div className="content">
                  <br />
                  <p>
                    {content.section7.block3.p}
                  </p>
                  <ul className="fa-ul">
                    {content.section7.block3.ul.map(({ li }, i) => (
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

      </div >

    </>
  )
}