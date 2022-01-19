/* Child Asssement Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Custom Content
import content from 'public/content/en_US/components/pages/services/wetreateveryindividualuniquely.content'


export default function WeTreatEveryIndividualUniquely() {

    return (

        <>

            <Container fluid>
                <Container>
                    <Row className="custom-row">
                        <Col lg={{ span: 4, order: 1 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block1.image.src}
                                    alt={content.block1.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 8, order: 0 }}>
                            <div className="content">
                                <h2>
                                    {content.block1.h2}
                                </h2>
                                <p>
                                    {content.block1.p}
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="custom-row">
                        <Col lg={{ span: 4, order: 0 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block2.image.src}
                                    alt={content.block2.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 8, order: 1 }}>
                            <div className="content">
                                {content.block2.ul.map(({ li }, i) => (
                                    <p key={i}>
                                        {li}
                                    </p>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
        
    )
}