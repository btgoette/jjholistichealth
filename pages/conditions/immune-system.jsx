/* Immune System Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import ImmuneAvoidSugar from 'components/pages/conditions/ImmuneAvoidSugar'
import ImmuneEatDarkColoredProduce from 'components/pages/conditions/ImmuneEatDarkColoredProduce'
import ImmuneGetEnoughSleep from 'components/pages/conditions/ImmuneGetEnoughSleep'
import ImmuneProblems from 'components/pages/conditions/ImmuneProblems'


// Custom Content
import content from 'public/content/en_US/pages/conditions/immunesystem.content'


export default function ImmuneSystem() {

    return (

        <>

            <Head {...content} />

            <div className={content.pageName}>

                <Hero {...content} />

                <ImmuneAvoidSugar />

                <ImmuneEatDarkColoredProduce />

                <ImmuneGetEnoughSleep />

                <ImmuneProblems />

            </div>

        </>
    );
}