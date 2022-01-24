/* Cardio Tips Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Component Content
import content from 'public/content/en_US/components/pages/conditions/cardiotips.content'


export default function CardioTips() {

    return (

        <>

            <Container fluid className="bg-light-green">
                <Container>
                    <Row>
                        {content.block1.ul.map(({ image, h4 }, i) => (
                            <Col key={i} lg={4} md={6} data-aos-delay="0" data-aos="fade-up">
                                <figure className="round">
                                    <LazyLoadImage
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                </figure>
                                <p className="h4">
                                    <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                    {h4}
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

        </>

    )
}