/* Health Conditions Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import FunctionalEvaluation from 'components/pages/conditions/FunctionalEvaluation'
import Conditions from 'components/pages/conditions/Conditions'

// Page Content
import content from 'public/content/en_US/pages/conditions/conditions.content'


export default function HealthConditions() {

    return (

        <>

            <Head {...content} />

            <div className={content.pageName}>

                <Hero {...content} />

                <FunctionalEvaluation />

                <Conditions />

            </div>

        </>
    );
}