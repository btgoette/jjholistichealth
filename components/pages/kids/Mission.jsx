/* Kids Mission Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Component Content
import content from 'public/content/en_US/components/pages/kids/mission.content'


export default function Mission() {

    return (

        <>

            <Container fluid>
                <Container>
                    <Row className="custom-row">
                        <Col lg={5}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block1.image.src}
                                    alt={content.block1.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={7}>
                            <h2>
                                {content.block1.h2}
                            </h2>
                            <p>
                                {content.block1.p}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
        
    )
}