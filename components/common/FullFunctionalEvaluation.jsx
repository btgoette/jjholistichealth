/* Child Asssement Component */

//  React Components
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function FullFunctionEvaluation(block) {

    return (
            <section>
                <Container>
                    <Row className="mb-4">
                        {block.LNT.list.map(({ li, ul }, i) => (
                            <Col key={i} sm={6} lg={4}>
                                <p className="h4">
                                    <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                    {li}
                                </p>
                                <ul className="fa-ul">
                                    {ul.map(({ li }, i) => (
                                        <li key={i} data-aos-delay="0" data-aos="fade-right">
                                            <span className="fa-li"><FontAwesomeIcon icon={['fab', 'envira']} /></span>
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col>
                            <p className="h4">
                                <FontAwesomeIcon icon={['fas', 'mortar-pestle']} />
                                {block.otherServices.title}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {block.otherServices.list.map(({ li }, i) => (
                            <Col sm={6} key={i}>
                                <p className="mb-0">
                                    <FontAwesomeIcon icon={['fab', 'envira']} />
                                    {li}
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
    )
}