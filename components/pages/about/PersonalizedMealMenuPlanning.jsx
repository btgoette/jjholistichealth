/* About Personalized Meal Menu Planning Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Component Content
import content from 'public/content/en_US/components/pages/about/personalizedmealmenuplanning.content'


export default function PersonalizedMealMenuPlanning() {

    return (

        <>

            <Container fluid>
                    <Container>
                        <Row className="custom-row">
                            <Col lg={{ span: 6, order: 0 }}>
                                <figure className="rounded">
                                    <LazyLoadImage
                                        src={content.block1.image.src}
                                        alt={content.block1.image.alt}
                                    />
                                </figure>
                            </Col>
                            <Col lg={{ span: 6, order: 1 }}>
                                <div className="content">
                                    <h2>
                                        {content.block1.h2}
                                    </h2>
                                    {content.block1.h4.map(({ li }, i) => (
                                            <p className="h4" key={i} data-aos="fade-right">
                                                <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />{li}
                                            </p>
                                        ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container> 

        </>
        
    )
}