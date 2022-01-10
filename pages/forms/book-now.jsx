// React Components
import { Container, Row, Col } from 'react-bootstrap'

// Custom Components
import Head from 'components/layout/Head'
import Breadcrumbs from 'components/layout/Breadcrumbs'
import BookNowForm from 'components/forms/BookNowForm'

// Custom Styles and Content
import content from 'public/content/en_US/pages/forms/bookNow.content'


export default function BookNow() {

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
                            <BookNowForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}