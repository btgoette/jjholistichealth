// React Components
import { Card, Container, Row, Col } from 'react-bootstrap'

// Custom Data
import data from 'public/content/en_US/data/conditions/conditions.data'


export default function ConditionsHome() {
    return (
        <Container fluid className="bg-light-green">
            <Container>
                <Row>
                    <Col xs={12}>
                        <p>
                            Many conditions can be alleviated or at least improved using nutrition, including some of today’s most common issues, these include:
                        </p>
                    </Col>

                    {data.condition.map(({ src, alt, name, content }, i) => (

                        <Col key={i} sm={6} lg={4} xl={3} className="card-block">
                            <Card data-aos="fade-up">
                                <Card.Body>
                                    <Card.Img
                                        className="text-center"
                                        src={src}
                                        alt={alt}
                                    />
                                    <div className="card-content">
                                        <Card.Title>
                                            {name}
                                        </Card.Title>
                                        <Card.Text>
                                            {content}
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        </Container>
    )
}
