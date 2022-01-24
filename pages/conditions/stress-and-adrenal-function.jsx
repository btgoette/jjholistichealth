/* Stress & Adrenal Function Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import StressExercise from 'components/pages/conditions/StressExercise'

import StressDiet from 'components/pages/conditions/StressDiet'
import StressProblems from 'components/pages/conditions/StressProblems'

// Custom Content
import content from 'public/content/en_US/pages/conditions/stressandadrenalfunction.content'

export default function StressAndAdrenalFunction() {

    return (

        <>

            <Head {...content} />

            <div className={content.pageName}>

                <Hero {...content} />

                <StressExercise />

                <StressDiet />
                
                <StressProblems />

            </div>

        </>

    )
}