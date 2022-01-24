/* About Page */

// Layout Components
import Head from 'components/layout/Head'
import Hero from 'components/layout/Hero'

// Page Components
import WeTakeYourComfortSeriously from 'components/pages/about/WeTakeYourComfortSeriously'
import Mission from 'components/pages/about/Mission'
import Vision from 'components/pages/about/Vision'
import HowWeTakeCareOfOurPatients from 'components/pages/about/HowWeTakeCareOfOurPatients'

// Page Content
import content from 'public/content/en_US/pages/about/about.content'


export default function About() {

    return (

        <>

            <Head {...content} />

            <div className={content.pageName}>

                <Hero {...content} />

                <WeTakeYourComfortSeriously />

                <Mission />

                <Vision />

                <HowWeTakeCareOfOurPatients />
                
            </div > 

        </>

    )
}