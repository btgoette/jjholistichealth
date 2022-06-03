/* Child Asssement Component */

//  React Components
import { Container, Row, Col } from "react-bootstrap";

// Common Components
import BookNowCTA from "components/common/BookNowCTA";

const JandJPlans = (block) => {
  return (
    <>
      <section className="bg-light-green">
        <Container>
          <Row>
            <Col lg={6} data-aos="fade-up">
              <div className="jjPlan">
                <div className="jjPlanTitle1">
                  <h3 className="mb-0 text-white">{block.block1.h3}</h3>
                  <p className="text-white">{block.block1.p}</p>
                </div>
                <div className="jjPlanContent">
                  {block.block1.ul.map(({ li }, i) => (
                    <p key={i}>
                      {li}
                      <hr />
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
                  <h3 className="mb-0 text-white">{block.block2.h3}</h3>
                  <p className="text-white">
                    {block.block2.p1}
                    <br />
                    {block.block2.p2}
                  </p>
                </div>
                <div className="jjPlanContent">
                  {block.block2.ul.map(({ li }, i) => (
                    <p key={i}>
                      {li}
                      <hr />
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
      </section>
    </>
  );
}

export default JandJPlans;