// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import BookNowCTA from 'components/common/BookNowCTA'

// Custom Content
import data from 'public/content/en_US/data/conditions/digestiveSystem.data'


export default function FunctionalEvaluation() {
    return (
        <Container fluid id="digestion">
            <Container>
                <Row>
                    <Col lg={6}>
                        <figure className="digestive-system">
                            <LazyLoadImage
                                src={data.block1.image1.src}
                                alt={data.block1.image1.alt}
                            />
                            {data.block1.list1.map(({ id, classes, title, description }, i) => (
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
                                {data.block2.h2}
                            </h2>
                            <p>
                                {data.block2.p}
                            </p>
                            <h3>
                                {data.block2.list1Title}
                            </h3>
                            {data.block2.list1.map(({ li }, i) => (
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