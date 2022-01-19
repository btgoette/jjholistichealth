/* Why Choose J&J Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import WeInspect21Organs from 'components/pages/about/WeInspect21Organs'
import JandJAllInWellnessPlan from 'components/pages/about/JandJAllInWellnessPlan'
import ChildAssessment from 'components/pages/about/ChildAssessment'
import FoodIntoleranceSensitivityTest from 'components/pages/about/FoodIntoleranceSensitivityTest'
import PersonalizedMealMenuPlanning from 'components/pages/about/PersonalizedMealMenuPlanning'

// Page Content
import content from 'public/content/en_US/pages/about/whychoosejandj.content'


export default function WhyChooseJJ() {

    return (

        <>

            <Head {...content} />

            <div className={content.pageName}>

                <Hero {...content} />

                <WeInspect21Organs />

                <JandJAllInWellnessPlan />

                <ChildAssessment />

                <FoodIntoleranceSensitivityTest />

                <PersonalizedMealMenuPlanning />

            </div>

        </>
        
    )
}