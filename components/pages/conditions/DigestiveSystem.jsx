// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import BookNowCTA from 'components/common/BookNowCTA'

// Custom Content
import content from 'public/content/en_US/components/pages/conditions/digestiveSystem.content'


export default function FunctionalEvaluation() {
    return (
        <Container fluid id="digestion">
            <Container>
                <Row>
                    <Col lg={6}>
                        <figure className="digestive-system">
                            <LazyLoadImage
                                src={content.block1.image.src}
                                alt={content.block1.image.alt}
                            />
                            {content.block1.digestiveList.map(({ id, classes, title, description }, i) => (
                                <button key={i} href={id} className={classes} aria-label={title}>
                                    <FontAwesomeIcon icon={['far', 'dot-circle']} />
                                    <p className="digestion-box bg-green m-0 text-left text-white">
                                        <strong className="ds-title">{title}</strong><br />
                                        {description}
                                    </p>
                                </button>
                            ))}
                        </figure>
                    </Col>
                    <Col lg={6}>
                        <div className="content">
                            <h2>
                                {content.block1.h2}
                            </h2>
                            <p>
                                {content.block1.p}
                            </p>
                            <h3>
                                {content.block1.h3}
                            </h3>
                            {content.block1.ul.map(({ li }, i) => (
                                <p className="h4" key={i}>
                                    <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
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