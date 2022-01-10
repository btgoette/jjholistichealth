// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Custom Components
import Head from 'components/layout/Head'
import BookNowCTA from 'components/common/BookNowCTA'

// Custom Styles and Content
import content from 'public/content/en_US/pages/promos/kovidKocktail.content'


export default function KovidKocktail() {

    return (

        <>
            <Head {...content} />

            <div className="promo-landing-page">

                <Container fluid className="promo">
                    <LazyLoadImage
                        src={content.promo.mobile.image.src}
                        alt={content.promo.mobile.image.alt}
                        className="d-block d-lg-none promo-image"
                    />
                    <LazyLoadImage
                        src={content.promo.desktop.image.src}
                        alt={content.promo.desktop.image.alt}
                        className="d-none d-lg-block promo-image"
                    />
                </Container>

                <Container fluid>
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ offset:2, span:8}}>
                                <div>
                                    <div>
                                        <h1>{content.section1.block1.title}</h1>
                                        {content.section1.block1.p.map(({ li }, i) => (
                                            <p key={i}>{li}</p>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h2>{content.section1.block2.title}</h2>
                                        <p>{content.section1.block2.p}</p>
                                        <ul>
                                        {content.section1.block2.ul.map(({ bold, li }, i) => (
                                            <li key={i}><strong>{bold}</strong>{li}</li>
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="custom-row">
                        <Col lg={{ offset:2, span:8}}>
                                <div>
                                    <div>
                                        <h2>{content.section1.block3.title}</h2>
                                        {content.section1.block3.p.map(({ li }, i) => (
                                            <p key={i}>{li}</p>
                                        ))}
                                        <BookNowCTA /><br/>
                                        <p className="disclaimer"><em><sup>&dagger;</sup>{content.section1.block3.disclaimer}</em></p>
                                        
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