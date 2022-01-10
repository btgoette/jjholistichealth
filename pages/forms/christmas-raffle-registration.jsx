// React Components
import { Container, Row, Col } from 'react-bootstrap'

// Custom Components
import Head from 'components/layout/Head'
import Breadcrumbs from 'components/layout/Breadcrumbs'
import ContactForm from 'components/forms/ChristmasForm'

// Custom Styles and Content
import content from 'public/content/en_US/pages/forms/christmas.content'


export default function Contact() {

    return (

        <>
            <Head {...content} />

            <Container>
                <Breadcrumbs {...content} />
                <Row className="custom-row">
                    <Col lg={{ offset: 1, span: 10 }} className="christmas">
                        <div className="form-section">
                            <h1>{content.section1.block1.title}</h1>
                            <p>
                                {content.section1.block1.p}
                            </p>
                            <h2 className="mb-0">{content.section1.block2.h2}</h2>
                            <hr />
                            <p className="h5">{content.section1.block2.h5}</p>
                            <ul>
                                {content.section1.block2.ul.map(({ li }, i) => (
                                    <li key={i}>
                                        {li}
                                    </li>
                                ))}
                            </ul>
                            <ContactForm />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}