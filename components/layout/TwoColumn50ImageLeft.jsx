import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'


export default function TwoColumn50(block, styles) {
    return (
        <Container fluid className={block.background}>
            <Container>
                <Row className="custom-row">
                    <Col lg={{ span: 6, order: 0 }}>
                        <figure className="rounded">
                            <LazyLoadImage
                                src={block.image.src}
                                alt={block.image.alt}
                            />
                        </figure>
                    </Col>
                    <Col lg={{ span: 6, order: 1 }}>
                        <div className="content">
                            <h2>{block.h2}</h2>
                            {block.p.map(({ li }, i) => (
                                <p key={i}>
                                    {li}
                                </p>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}