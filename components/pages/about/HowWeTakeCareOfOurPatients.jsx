/* About How We Take Care Of Our Patients Component */

//  React Components
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Layout Components
import SectionHead from 'components/layout/SectionHead'

// Component Content
import content from 'public/content/en_US/components/pages/about/howwetakecareofourpatients.content'


export default function HowWeTakeCareOfOurPatients() {

    return (

        <>

            <SectionHead {...content} />

            <Container fluid className="bg-brown">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <div className="content">
                                {content.block1.p.map(({ li }, i) => (
                                    <p key={i}>
                                        {li}
                                    </p>
                                ))}
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="content">
                                <ul className="fa-ul">
                                    {content.block1.ul.map(({ li }, i) => (
                                        <li key={i} data-aos="fade-right">
                                            <span className="fa-li"><FontAwesomeIcon icon={['fab', 'envira']} /></span>{li}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="content">
                                {content.block2.ul.map(({ li }, i) => (
                                    <p key={i}>
                                        {li}
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