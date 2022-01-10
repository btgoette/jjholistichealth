// React Components
import { Container, Row, Col } from 'react-bootstrap'

export default function SectionHead(section) {

    return (
        <Container fluid className={section.background}>
            <Container>
                <Row>
                    <Col>
                        <h2>
                            {section.title}
                        </h2>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}