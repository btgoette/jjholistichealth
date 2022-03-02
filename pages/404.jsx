import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Custom Components
import Head from 'components/layout/Head'

// Custom Styles and Content
import styles from 'scss/pages/errorpage.module.scss'
import content from 'public/content/en_US/pages/404.content'

export default function NotFoundPage() {
    return (
        <>
            <Head {...content} />

            <div className={styles.error}>

                <Container fluid className="pt-2">
                    <Container>
                        <Row className="custom-row pt-5">
                            <Col className="text-center">
                                <h1>{content.section1.title}</h1>
                                <h2>{content.section1.block1.h2}</h2>
                                <Link href={content.section1.block1.link} passHref>
                                    <figure className="logo">
                                        <LazyLoadImage
                                            src={content.section1.block1.logo.src}
                                            alt={content.section1.block1.logo.alt}
                                        />
                                    </figure>
                                    </Link><br/>
                                <Link href={content.section1.block1.link} passHref>
                                    {content.section1.block1.p}
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        </>
    )
}