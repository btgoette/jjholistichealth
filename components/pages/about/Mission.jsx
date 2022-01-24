/* About Mission Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Layout Components
import SectionHead from 'components/layout/SectionHead'

// Component Content
import content from 'public/content/en_US/components/pages/about/mission.content'


export default function Mission() {

    return (

        <>

            <SectionHead {...content} />

            <Container fluid className="bg-light-green">
                <Container>
                    <Row className="custom-row">
                        <Col lg={{ span: 6, order: 1 }}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block1.image.src}
                                    alt={content.block1.image.alt}
                                />
                            </figure>
                        </Col>
                        <Col lg={{ span: 6, order: 0 }}>
                            <div className="content">
                                {content.block1.p.map(({ li }, i) => (
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