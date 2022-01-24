/* Home Conditions Component */

//  React Components
import { Card, Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

// Layout Components
import SectionHead from 'components/layout/SectionHead'

// Component Content
import content from 'public/content/en_US/components/pages/conditions/conditions.content'


export default function ConditionsHome() {

    return (

        <>

            <SectionHead {...content} />

            <Container fluid className="bg-light-green">
                <Container>
                    <Row>

                        {content.condition.map(({ src, alt, name, content }, i) => (

                            <Col key={i} md={6} lg={4} className="card-block">
                                <Card content-aos="fade-up">
                                    <Card.Body>
                                        <Link href="/conditions" passHref>
                                            <a>
                                                <Card.Img
                                                    className="text-center"
                                                    src={src}
                                                    alt={alt}
                                                />
                                                <div className="card-content">
                                                    <Card.Title>
                                                        {name}
                                                    </Card.Title>
                                                    {/* <Card.Text>
                                                {content}
                                            </Card.Text> */}
                                                </div>
                                            </a>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))}

                    </Row>
                </Container>
            </Container>

        </>

    )
}
