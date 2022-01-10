// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
// Custom Styles and Data
import styles from 'scss/pages/about.module.scss'
import teamData from 'public/content/en_US/data/about/team.data'

export default function TeamMembers() {

    return (

        <>
            <Container fluid>
                <Container>
                    <Row>
                        {
                            teamData.team.map(({ src, alt, name, title, content }, i) => (
                                <Col lg={6} key={i} data-aos="fade-up">
                                    <div itemScope itemType="https://schema.org/Person" className={styles.aboutTeamMember}>
                                        <div className="d-block text-center d-lg-flex text-lg-start align-items-center">
                                            <figure className={styles.aboutTeamPhoto}>
                                                <LazyLoadImage
                                                    src={src}
                                                    alt={alt}
                                                />
                                            </figure>
                                            <div className={styles.aboutTeamTitle}>
                                                <h2 itemProp="name" className={styles.aboutTeamName}>
                                                    {name}
                                                </ h2>
                                                <p itempProp="jobTitle" className={styles.aboutTeamJobTitle}>
                                                    {title}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.aboutTeamContent}>
                                            {content.map(({ p }, i) => (
                                                <p key={i}>
                                                    {p}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </Container>
        </>
    );
}