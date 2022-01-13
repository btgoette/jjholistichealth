// React Components
import { Card, Container, Row, Col } from 'react-bootstrap'

// Custom Data
import data from 'public/content/en_US/data/conditions/kidsConditions.data'


export default function ConditionsKids() {
    return (
        <>
            {data.condition.map(({ src, alt, name, content }, i) => (

                <Col key={i} md={6} lg={4} className="card-block">
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
        </>
    )
}
