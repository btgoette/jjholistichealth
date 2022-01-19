/* Child Asssement Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Layout Components
import SectionHead from 'components/layout/SectionHead'

// Common Components
import BookNowCTA from 'components/common/BookNowCTA'

// Custom Content
import content from 'public/content/en_US/components/pages/services/jandjplans.content'


export default function JandJPlans() {

    return (
        <>


            <SectionHead {...content} />

            <Container fluid className="bg-light-green">
                <Container>
                    <Row>
                        <Col lg={6} data-aos="fade-up">
                            <div className="jjPlan">
                                <div className="jjPlanTitle1">
                                    <h3 className="mb-0 text-white">
                                        {content.block1.h3}
                                    </h3>
                                    <p className="text-white">
                                        {content.block1.p}
                                    </p>
                                </div>
                                <div className="jjPlanContent">
                                    {content.block1.ul.map(({ li }, i) => (
                                        <p key={i}>
                                            {li}<hr />
                                        </p>
                                    ))}
                                    <div className="text-center">
                                        <BookNowCTA />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} data-aos="fade-up">
                            <div className="jjPlan">
                                <div className="jjPlanTitle2">
                                    <h3 className="mb-0 text-white">
                                        {content.block2.h3}
                                    </h3>
                                    <p className="text-white">
                                        {content.block2.p1}<br />
                                        {content.block2.p2}
                                    </p>
                                </div>
                                <div className="jjPlanContent">
                                    {content.block2.ul.map(({ li }, i) => (
                                        <p key={i}>
                                            {li}<hr />
                                        </p>
                                    ))}
                                    <div className="text-center">
                                        <BookNowCTA />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </>
    )
}