// React Components
import { Container, Row, Col } from 'react-bootstrap'

// Custom Components
import Head from 'components/layout/Head'
import Breadcrumbs from 'components/layout/Breadcrumbs'
import EndocrineSteamIntakeForm from 'components/forms/EndocrineSteamIntakeForm'

// Custom Styles and Content
import styles from 'scss/pages/forms.module.scss'
import content from 'public/content/en_US/pages/forms/endocrineSteamIntake.content'


export default function EndocrineSteamIntake() {

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
                            <EndocrineSteamIntakeForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}