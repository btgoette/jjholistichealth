/* Digestive System Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import DigestiveSystem from 'components/pages/conditions/DigestiveSystem'

// Custom Content
import content from 'public/content/en_US/pages/conditions/digestivesystem.content'


export default function HealthConditions() {

    return (

        <>

            <Head {...content} />

            <div className="conditions">

                <Hero {...content} />

                <DigestiveSystem />

            </div>

        </>
    );
}