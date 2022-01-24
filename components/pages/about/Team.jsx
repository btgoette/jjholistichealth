/* About Team Component */

//  React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'

// Component Content
import content from 'public/content/en_US/components/pages/about/team.content'


export default function TeamMembers() {

    return (

        <>

            <Container fluid>
                <Container>
                    <Row>
                        {content.team.map(({ src, alt, name, title, content }, i) => (
                            <Col lg={6} key={i} data-aos="fade-up">
                                <div itemScope itemType="https://schema.org/Person" className="aboutTeamMember">
                                    <div className="d-block text-center d-lg-flex text-lg-start align-items-center">
                                        <figure className="aboutTeamPhoto">
                                            <LazyLoadImage
                                                src={src}
                                                alt={alt}
                                            />
                                        </figure>
                                        <div className="aboutTeamTitle">
                                            <h2 itemProp="name" className="aboutTeamName">
                                                {name}
                                            </ h2>
                                            <p itempProp="jobTitle" className="aboutTeamJobTitle">
                                                {title}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="aboutTeamContent">
                                        {content.map(({ p }, i) => (
                                            <p key={i}>
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

        </>

    );
}