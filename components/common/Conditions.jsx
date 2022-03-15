/* Conditions Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Layout Component
import SectionHead from 'components/common/SectionHead'

export default function ConditionsIndex(block) {

    return (
        <>
            <SectionHead {...block} />
            <section className="bg-light-green">
                <Container>
                    <Row>
                        {block.condition.map(({ src, alt, name, bullet }, i) => (
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
            </section>
        </>
    )
}
