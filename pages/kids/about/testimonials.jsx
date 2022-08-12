/* Testimonials Page */

// Page Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import TestimonialHero from "components/common/TestimonialHero";
import TestimonialVideo from "components/common/TestimonialVideo";
import Testimonials from "components/common/Testimonials";
import GoogleReviews from "components/common/GoogleReviews";
import Main from "components/layout/Main";
import Nav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/About/testimonials.content";

const JJTestimonials = () => {
  return (
    <div className={page.slug}>
    <Nav/>
      <Head {...page} />
      <Main>
        <Breadcrumbs {...page} />
        <TestimonialVideo />
        <TestimonialHero {...page.hero} />
        <Testimonials />
        <GoogleReviews />
      </Main>
    </div>
  );
}

export default JJTestimonials;