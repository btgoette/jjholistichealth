/* Cardiovascular Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import CardioAvoidHydrogenatedOil from 'components/pages/conditions/CardioAvoidHydrogenatedOil'
import CardioTips from 'components/pages/conditions/CardioTips'
import CardioProblems from 'components/pages/conditions/CardioProblems'
import CardioAvoidSugar from 'components/pages/conditions/CardioAvoidSugar'
import CardioExercise from 'components/pages/conditions/CardioExercise'

// Custom Content
import content from 'public/content/en_US/pages/conditions/cardiovascular.content'


export default function Cardiovascular() {

    return (

        <>

            <Head {...content} />

            <div className={content.pageName}>

                <Hero {...content} />

                <CardioAvoidHydrogenatedOil />

                <CardioTips />

                <CardioProblems />

                <CardioAvoidSugar />

                <CardioExercise />

            </div>

        </>
    )
}