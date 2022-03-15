// React Components
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import Head from 'components/common/Head'
import Breadcrumbs from 'components/common/Breadcrumbs'

// Custom Styles and Content
import content from 'public/content/en_US/Page/Forms/forms.content'



export default function Contact() {

    return (

        <>
            <Head {...content} />

            <Container>
                <Breadcrumbs {...content} />
                <Row className="custom-row">
                    <Col>
                        <div className="content">
                            <h1>{content.section1.block1.title}</h1>
                            <p>
                                {content.section1.block1.p}
                            </p>
                            <ul className="fa-ul">
                                {content.section1.block1.ul.map(({ li, link }, i) => (
                                    <li key={i}><span className="fa-li"><FontAwesomeIcon icon={['fab', 'envira']} /></span><Link href={link}>{li}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}