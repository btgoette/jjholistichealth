// React Components
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Custom Components
import Head from 'components/layout/Head'
import Breadcrumbs from 'components/layout/Breadcrumbs'
import ContactForm from 'components/forms/ContactForm'

// Custom Styles and Content
import styles from 'scss/pages/forms.module.scss'
import content from 'public/content/en_US/pages/forms/contact.content'


export default function Contact() {

    return (

        <>
            <Head {...content} />

            <div className={styles.contact}>
                <Container>
                    <Breadcrumbs {...content} />
                    <Row className="custom-row">
                        <Col lg={{ span: 7, order: 2 }}>
                            <div className={styles.contactUsBlock}>
                                <div className={styles.contactUs}>
                                    <h1>{content.section1.block1.title}</h1>
                                    <p>
                                        {content.section1.block1.p}
                                    </p>
                                    <ContactForm />
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 5, order: 1 }}>
                            <div className={styles.contactInfo}>
                                <h2 className={styles.contactInfoTitle}>Info</h2>
                                <p>
                                    <FontAwesomeIcon icon={['fas', 'phone']} />
                                    <a className={styles.contactLink} href={content.section1.block2.phone.link}>
                                        {content.section1.block2.phone.li}
                                    </a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={['fas', 'envelope']} />
                                    <a className={styles.contactLink}
                                        href={content.section1.block2.email.link}>
                                        {content.section1.block2.email.li}
                                    </a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={['fas', 'building']} />
                                    <div className="d-block">
                                        {content.section1.block2.address.map(({ li }, i) => (
                                            <span key={i}>
                                                {li}<br />
                                            </span>
                                        ))}
                                    </div>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={['fas', 'clock']} />
                                    <div className="d-block">
                                        {content.section1.block2.hours.map(({ li }, i) => (
                                            <span key={i}>
                                                {li}<br />
                                            </span>
                                        ))}
                                    </div>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}