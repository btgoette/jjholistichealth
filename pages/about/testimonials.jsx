/* Testimonials Page */

// Page Components
import Head from "components/common/Head"
import Breadcrumbs from 'components/common/Breadcrumbs'
import TestimonialHero from "components/common/TestimonialHero"
import Testimonials from "components/common/Testimonials"
import GoogleReviews from "components/common/GoogleReviews"

// Page Content
import page from "public/content/en_US/Page/About/testimonials.content";

export default function JJTestimonials() {
  return (
    <div className={page.slug}>
      <Head {...page} />
      <Breadcrumbs {...page} />
      <TestimonialHero {...page.hero} />
      <Testimonials />
      <GoogleReviews />
    </div>
  );
}
