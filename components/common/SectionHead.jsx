// React Components
import { Container, Row, Col } from 'react-bootstrap'

export default function SectionHead(section) {

    return (
        <Container fluid className={section.sectionTitleBackground}>
            <Container>
                <Row>
                    <Col>
                        <h2>
                            {section.sectionTitle}
                        </h2>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}