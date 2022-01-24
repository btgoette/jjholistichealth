/* Cardio Avoid Hydrogenated Oil Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Component Content
import content from 'public/content/en_US/components/pages/conditions/cardioavoidhydrogenatedoil.content'


export default function CardioAvoidHydrogenatedOil() {

    return (

        <>

            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={{ span: 5, order: 1 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block1.image.src}
                                    alt={content.block1.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 7, order: 0 }}>
                            <div className="content">
                                {content.block1.ul.map(({ h4, p }, i) => (
                                    <div key={i}>
                                        <p className="h4">
                                            {h4}
                                        </p>
                                        <p>
                                            {p}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>


        </>

    )
}