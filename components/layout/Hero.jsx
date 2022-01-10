// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
// Custom Components
import BookNowCTA from 'components/common/BookNowCTA'


export default function Hero(page) {

    return (

        <Container fluid className={page.hero.background}>
            <Container className="hero-container">
                <Row className="align-items-center hero-block">
                    <Col lg={8}>
                        <div className="hero-content">
                            <h1>
                                {page.hero.title}
                            </h1>
                            {page.hero.h2 &&
                                <h2>
                                    {page.hero.h2}
                                </h2>
                            }
                            {page.hero.p.map(({ li }, i) => (
                                <p key={i}>
                                    {li}
                                </p>
                            ))}
                            <BookNowCTA />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

