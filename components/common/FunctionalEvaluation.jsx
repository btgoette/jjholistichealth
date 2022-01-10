// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col, Button } from 'react-bootstrap'

// Custom Content
import data from 'public/content/en_US/data/conditions/functionalEvaluation.data'


export default function FunctionalEvaluation() {
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col lg={6}>
                        <figure className="human-anatomy">
                            <LazyLoadImage
                                src={data.block1.image1.src}
                                alt={data.block1.image1.alt}
                            />
                            {data.block1.list1.map(({ id, classes, number, condition }, i) => (
                                <button key={i} href={id} aria-label={condition} className={classes}>{number}
                                    <p className="conditions-box bg-green m-0 text-center text-white">
                                        {condition}
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
                            <ol>
                                {data.block2.list1.map(({ li }, i) => (
                                    <li key={i}>
                                        {li}
                                    </li>
                                ))}
                            </ol>
                            <Button
                                re="noreferer" target="_blank"
                                href="/docs/Functional-Evaluation-with-label.pdf">
                                Download FE PDF
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}