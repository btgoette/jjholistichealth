// React Components
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'public/fonts/FontAwesome/fontawesome'

// Custom Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'
import FunctionalEvaluation from 'components/common/FunctionalEvaluation'
import ConditionsIndex from 'components/common/ConditionsIndex'
import DigestiveSystem from 'components/common/DigestiveSystem'
import SectionHead from 'components/layout/SectionHead'

// Custom Content
import content from 'public/content/en_US/pages/conditions/conditions.content'


export default function HealthConditions() {

    return (

        <>

            <Head {...content} />

            <div className="conditions">

                <Hero {...content} />

                <FunctionalEvaluation />

                <SectionHead {...content.section1} />

                <ConditionsIndex />

                <DigestiveSystem />

            </div>

        </>
    );
}