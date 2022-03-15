/* About Team Component */

//  React Components
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";

export default function TeamMembers(block) {
  return (
    <>
      <section>
        <Container>
          <Row>
            {block.team.map(({ src, alt, name, title, text }, i) => (
              <Col lg={6} key={i} data-aos="fade-up">
                <div
                  itemScope
                  itemType="https://schema.org/Person"
                  className="about-team-member"
                >
                  <div className="d-block text-center d-lg-flex text-lg-start align-items-center">
                    <figure className="about-team-photo">
                      <LazyLoadImage src={src} alt={alt} />
                    </figure>
                    <div className="about-team-title">
                      <h2 itemProp="name" className="about-team-name">
                        {name}
                      </h2>
                      <p itempProp="jobTitle" className="about-team-job-title">
                        {title}
                      </p>
                    </div>
                  </div>
                  <div className="about-team-content">
                    {text.map(({ p }, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
