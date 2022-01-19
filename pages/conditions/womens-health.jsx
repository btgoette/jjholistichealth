/* Women's Health Issues Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import WomenAvoidSugar from 'components/pages/conditions/WomenAvoidSugar'
import WomenDrinkMoreWater from 'components/pages/conditions/WomenDrinkMoreWater'
import WomenProblems from 'components/pages/conditions/WomenProblems'
import WomenBloodChemistryPanel from 'components/pages/conditions/WomenBloodChemistryPanel'


// Custom Content
import content from 'public/content/en_US/pages/conditions/womenshealthissues.content'


export default function WomensHealthIssues() {

    return (

        <>

            <Head {...content} />

            <div className={content.pageName}>

                <Hero {...content} />

                <WomenAvoidSugar />

                <WomenDrinkMoreWater />

                <WomenProblems />

                <WomenBloodChemistryPanel />

            </div>

        </>
    )
}