import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

// Custom Components
import Head from 'components/layout/Head'
import Breadcrumbs from 'components/layout/Breadcrumbs'

// Custom Content
import content from 'public/content/en_US/pages/policies/cancellation.content'

export default function CancellationPolicy() {

    return (

        <>
            <Head {...content} />

            <div className="cancellation-rescheduling-policy">
                <Container className="cancellation-section">
                    <Breadcrumbs {...content} />
                    <Row className="custom-row">
                        <Col>
                            <div className="cancellation-us-block">
                                <div className="cancellation">
                                    <h1>Cancellation or Rescheduling Policy</h1>
                                    <p>Last updated: November 4, 2021</p>
                                    <h2>Let&apos;s Start Your Appointment</h2>
                                    <p>Appointments are in high demand, and we require a $75 Upfront Fee for the Initial Interview and a $25 Upfront Fee for the succeeding appointments. This is to secure your appointment and it will serve as a partial payment of the service fee. It will be deducted on the day of the actual appointment. </p>
                                    <h2>Cancellation or Rescheduling</h2>
                                    <p>Let us know at least 24 hours in advance if you cannot attend the appointment, as it will give way to someone who urgently needs consultation and treatment. </p>
                                    <p>If you fail to show up in your scheduled appointment, have no advice to reschedule 24 hrs ahead of the scheduled appointment, are 15 minutes late or notification to reschedule or cancellation of the appointment is less than 24 hours, a No Show Fee of $25 will apply. </p>
                                    <p>For first-time clients who paid the $75 Upfront Fee, we will be deducting the $25 and we will refund the $50, and for those who paid a $25 Upfront Fee, it will be forfeited. </p>
                                    <p>The $25 fee will cover your appointment administrative duties. This should be settled before we schedule any further appointments.</p>
                                    <p>For 15-minute Free Consultation, if you fail to show within 5 minutes it will be considered as No Show and we will re-schedule your appointment.</p>
                                    <p><strong>To Cancel or Reschedule your appointment, you can do any of the following:</strong></p>
                                    <ul>
                                        <li>Login to <a href="https://jjhntp.practicebetter.io/#/signin">Practice Better</a></li>
                                        <li>Call or send a text or voicemail to <a href="tel:2147744760">(214) 774-4760</a></li>
                                        <li>Email us at <a href="mailto:support@jjholistichealth.com">support@jjholistichealth.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}