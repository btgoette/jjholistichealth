/* Health Conditions Page */

// Page Components
import Head from 'components/common/Head'
import Hero from 'components/common/Hero'
import FunctionalEvaluation from 'components/common/FunctionalEvaluation'
import Conditions from 'components/common/Conditions'
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from 'public/content/en_US/Page/Conditions/conditions.content'


export default function HealthConditions() {

    return (

        <>


            <div className={page.slug}>
      <JJNav/>
                
            <Head {...page} />

                <Hero {...page.hero} />

                <FunctionalEvaluation {...page.block.functionalEvaluation} />

                <Conditions {...page.block.conditions}/>

            </div>

        </>
    );
}