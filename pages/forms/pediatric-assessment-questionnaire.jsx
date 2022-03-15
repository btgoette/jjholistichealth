// React Components
import { Container, Row, Col } from 'react-bootstrap'

// Custom Components
import Head from 'components/common/Head'
import Breadcrumbs from 'components/common/Breadcrumbs'
import PediatricAssessment from 'components/forms/PediatricAssessment'

// Custom Styles and Content
import styles from 'scss/pages/forms.module.scss'
import content from 'public/content/en_US/Page/Forms/pediatricAssessment.content.json'



export default function PediatricAssessmentQuestionnaire() {

    return (

        <>
            <Head {...content} />

            <Container>
                <Breadcrumbs {...content} />
                <Row className="custom-row">
                    <Col lg={{ span: 8, order: 2, offset: 2 }}>
                        <div className="form-section">
                            <h1>{content.section1.block1.title}</h1>
                            <p>
                                {content.section1.block1.p}</p>
                            <PediatricAssessment />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}