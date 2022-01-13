// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Custom Data
import data from 'public/content/en_US/data/conditions/conditions.data'


export default function ConditionsIndex() {
    return (
        <Container fluid className="bg-light-green">
            <Container>
                <Row>

                    {data.condition.map(({ src, alt, name, bullet }, i) => (

                        <Col key={i} md={6} lg={4} data-aos-delay="0" data-aos="fade-up">
                            <figure className="round">
                                <LazyLoadImage
                                    src={src}
                                    alt={alt}
                                />
                            </figure>
                            <h3 className="text-center">{name}</h3>
                            {bullet.map(({ li }, i) => (
                                <p className="h4" key={i}>
                                    <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />{li}
                                </p>
                            ))}
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        </Container>
    )
}
