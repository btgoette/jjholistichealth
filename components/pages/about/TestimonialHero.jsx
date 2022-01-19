/* About Testimonial Hero Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Common Components
import Breadcrumbs from 'components/layout/Breadcrumbs'

// Component Content
import content from 'public/content/en_US/pages/about/testimonials.content'


export default function TestimonialHero() {

    return (

        <>

            <Container fluid className="testimonials-section">
                <Container>
                    <Breadcrumbs {...content} />
                    <Row>
                        <Col>
                            <h1>{content.hero.title}</h1>
                        </Col>
                    </Row>
                    <Row className="custom-row service-testimonial">
                        <Col lg={{ span: 4, order: 1 }}>
                            <figure className="service-testimonial-image">
                                <LazyLoadImage
                                    src={content.hero.image}
                                    alt={content.hero.alt}
                                />
                            </figure>
                            <p className="testimonial-name h5">-{content.hero.name}</p>
                        </Col>
                        <Col lg={{ spand: 8, order: 0 }}>
                            <div className="content">
                                <h2 className="left-quote">&ldquo;</h2>
                                <div className="service-quote">
                                    {content.hero.p.map(({ li }, i) => (
                                        <p key={i}>
                                            {li}
                                        </p>
                                    ))}
                                </div>
                                <h2 className="right-quote">&rdquo;</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>

    )
}