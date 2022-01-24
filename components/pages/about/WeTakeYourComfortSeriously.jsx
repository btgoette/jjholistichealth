/* About We Take Your Comfort Seriously Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Common Components
import Gallery from 'components/common/Gallery'
import BookNowCTA from 'components/common/BookNowCTA'

// Component Content
import content from 'public/content/en_US/components/pages/about/wetakeyourcomfortseriously.content'


export default function WeTakeYourComfortSeriously() {

    return (

        <>

            <Container fluid>
                <Container>
                    <Row className="custom-row">

                        <Col lg={6}>
                            <figure className="rounded">
                                <LazyLoadImage
                                    src={content.block1.image.src}
                                    alt={content.block1.image.alt}
                                />
                            </figure>
                        </Col>

                        <Col lg={6}>
                            <h2>
                                {content.block1.h2}
                            </h2>
                            <p>
                                {content.block1.p}
                            </p>
                            <BookNowCTA />
                        </Col>

                    </Row>

                    <Gallery />

                </Container>
            </Container>

        </>

    )
}