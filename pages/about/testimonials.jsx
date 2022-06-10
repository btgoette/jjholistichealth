/* Testimonials Page */

// Page Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import TestimonialHero from "components/common/TestimonialHero";
import Testimonials from "components/common/Testimonials";
import GoogleReviews from "components/common/GoogleReviews";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/About/testimonials.content";

const JJTestimonials = () => {
  return (
    <div className={page.slug}>
    <JJNav/>
      <Head {...page} />
      <Main>
        <Breadcrumbs {...page} />
        <TestimonialHero {...page.hero} />
        <Testimonials />
        <GoogleReviews />
      </Main>
    </div>
  );
}

export default JJTestimonials;