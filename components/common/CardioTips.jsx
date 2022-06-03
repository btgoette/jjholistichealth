/* Cardio Tips Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CardioTips = (block) => {

    return (

        <>
            <section className={block.slug}>
                <Container>
                    <Row>
                        {block.list.map(({ img, h3 }, i) => (
                            <Col key={i} lg={4} md={6} data-aos-delay="0" data-aos="fade-up">
                                <figure className="round">
                                    <LazyLoadImage
                                        src={img.src}
                                        alt={img.alt}
                                    />
                                </figure>
                                <p className="h4">
                                    <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                    {h3}
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

        </>

    )
}

export default CardioTips;