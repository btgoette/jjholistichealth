/* Health Conditions Page */

// Page Components
import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import FunctionalEvaluation from 'components/common/FunctionalEvaluation'
import Conditions from 'components/common/Conditions'

// Page Content
import page from 'public/content/en_US/Page/Conditions/conditions.content'


export default function HealthConditions() {

    return (

        <>


            <div className={page.slug}>
                
            <Head {...page} />

                <Hero {...page.hero} />

                <FunctionalEvaluation {...page.block.functionalEvaluation} />

                <Conditions {...page.block.conditions}/>

            </div>

        </>
    );
}