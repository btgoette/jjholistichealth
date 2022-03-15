// React Components
import { Container, Row, Col } from 'react-bootstrap'

// Custom Components
import Head from 'components/common/Head'
import Breadcrumbs from 'components/common/Breadcrumbs'
import FollowUpForm from 'components/forms/FollowUpForm'

// Custom Styles and Content
import styles from 'scss/pages/forms.module.scss'
import content from 'public/content/en_US/Page/Forms/followUp.content'


export default function FollowUp() {

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
                            <FollowUpForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}