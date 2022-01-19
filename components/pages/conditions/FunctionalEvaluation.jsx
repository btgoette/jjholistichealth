/* Functional Evaluation Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col, Button } from 'react-bootstrap'

// Component Content
import content from 'public/content/en_US/components/pages/conditions/functionalEvaluation.content'


export default function FunctionalEvaluation() {
    return (

        <>

            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <figure className="human-anatomy">
                                <LazyLoadImage
                                    src={content.block1.image1.src}
                                    alt={content.block1.image1.alt}
                                />
                                {content.block1.list1.map(({ id, classes, number, condition }, i) => (
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
                                    {content.block2.h2}
                                </h2>
                                <p>
                                    {content.block2.p}
                                </p>
                                <ol>
                                    {content.block2.list1.map(({ li }, i) => (
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

        </>

    )
}