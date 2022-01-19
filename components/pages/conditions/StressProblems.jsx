/* Stress Problems Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Layout Component
import SectionHead from 'components/layout/SectionHead'

// Component Content
import content from 'public/content/en_US/components/pages/conditions/stressproblems.content'


export default function StressProblems() {

    return (

        <>

            <SectionHead {...content} />

            <Container fluid>
                <Container>
                    <Row>
                        {content.block1.ul.map(({ h4, p }, i) => (
                            <Col key={i} lg={6}>
                                <p className="h4">
                                    {h4}
                                </p>
                                <p>
                                    {p}
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

        </>

    )
}