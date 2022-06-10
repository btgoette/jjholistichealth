import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";

// Custom Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Policies/cancellation.content";

const CancellationPolicy = () => {
  return (
    <div className={page.slug}>
      <JJNav />
      <Head {...page} />
      <Main>
        <Breadcrumbs {...page} />
        <section className="pt-0">
          <Container>
            <Row>
              <Col lg={{ offset: 2, span: 8, order: 0 }}>
                <h1>Cancellation or Rescheduling Policy</h1>
                <p>Last updated: February 4, 2022</p>
                <h2>Let&apos;s Start Your Appointment</h2>
                <p>
                  Appointments are in high demand, and we require a&nbsp;
                  <strong>$75 Upfront Fee for the Initial Interview</strong> and
                  a&nbsp;
                  <strong>
                    &nbsp;
                    $25 Upfront Fee for the succeeding appointments.
                  </strong>&nbsp;
                  This is to secure your appointment and it will serve as a
                  partial payment of the service fee. It will be deducted on the
                  day of the actual appointment.
                </p>
                <h2>Cancellation or Rescheduling</h2>
                <p>
                  Let us know at least 24 hours in advance if you cannot attend
                  the appointment, as it will give way to someone who urgently
                  needs consultation and treatment.
                </p>
                <p>
                  If you <strong>fail to show up</strong> in your scheduled
                  appointment, have&nbsp;
                  <strong>no advice to reschedule 24 hrs ahead</strong> of the
                  scheduled appointment, are <strong>15 minutes late</strong> or&nbsp;
                  <strong>
                    &nbsp;
                    notification to reschedule or cancellation of the
                    appointment is less than 24 hours,
                  </strong>&nbsp;
                  a <strong>No Show Fee</strong> of&nbsp;
                  <strong>$25 will apply.</strong>
                </p>
                <p>
                  For first-time clients who paid the $75 Upfront Fee, we will
                  be deducting the $25 and we will refund the $50, and for those
                  who paid a $25 Upfront Fee, it will be forfeited.
                </p>
                <p>
                  The $25 fee will cover your appointment administrative duties.
                  This should be settled before we schedule any further
                  appointments.
                </p>
                <p>
                  For 15-minute Free Consultation, if you fail to show within 5
                  minutes it will be considered as No Show and we will
                  re-schedule your appointment.
                </p>
                <p>
                  <strong>
                    To Cancel or Reschedule your appointment, you can do any of
                    the following:
                  </strong>
                </p>
                <ul>
                  <li>
                    Login to&nbsp;
                    <a href="https://jjhntp.practicebetter.io/#/signin">
                      Practice Better
                    </a>
                  </li>
                  <li>
                    Call or send a text or voicemail to&nbsp;
                    <a href="tel:2147744760">(214) 774-4760</a>
                  </li>
                  <li>
                    Email us at&nbsp;
                    <a href="mailto:support@jjholistichealth.com">
                      support@jjholistichealth.com
                    </a>
                  </li>
                </ul>
                <p>
                  <em>
                    * All J&amp;J All In Wellness Plans must be paid in full
                    before or after the Initial Interview.
                    <br />
                    * We accept cash, all major credit cards, HSA card, or FLEX
                    Spending
                    <br />
                    * 20% Veteran discount
                    <br />
                  </em>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </Main>
    </div>
  );
}

export default CancellationPolicy;