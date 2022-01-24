// React Components
import { Container, Row } from 'react-bootstrap'

export default function GoogleReviews() {

    return (

        <>
            <Container fluid>
                <Container>
                    <Row className="custom-row">
                        <h2>What people are saying about us on Google</h2>
                        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                        <div className="elfsight-app-3cee1929-a72c-44f2-8c75-b03776d6d212"></div>
                    </Row>
                </Container>
            </Container>
        </>
    );
}