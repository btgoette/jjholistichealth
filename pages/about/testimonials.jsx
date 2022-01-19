/* Testimonials Page */

// Layout Components
import Head from 'components/layout/Head'

// Page Components
import TestimonialHero from 'components/pages/about/TestimonialHero'
import Testimonials from 'components/pages/about/Testimonials'
import GoogleReviews from 'components/common/GoogleReviews'

// Page Content
import content from 'public/content/en_US/pages/about/testimonials.content'


export default function JJTestimonials() {

    return (

        <>

            <Head {...content} />

            <div className={content.pageName}>

                <TestimonialHero />

                <Testimonials />

                <GoogleReviews />

            </div>

        </>

    )
}