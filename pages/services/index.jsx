/* Services Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import WeTreatEveryIndividualUniquely from 'components/pages/services/WeTreatEveryIndividualUniquely'
import Free15MinuteConsultation from 'components/pages/services/Free15MinuteConsultation'
import FullFunctionalEvaluation from 'components/pages/services/FullFunctionalEvaluation'
import JandJPLans from 'components/pages/services/JandJPlans'

// Page Content
import content from 'public/content/en_US/pages/services/services.content'


export default function Services() {

    return (

        <>
            <Head {...content} />

            <div className={content.pageName}>

                <Hero {...content} />

                <WeTreatEveryIndividualUniquely />

                <Free15MinuteConsultation />

                <FullFunctionalEvaluation />

                <JandJPLans />

            </div>

        </>
    )
}