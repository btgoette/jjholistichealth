/* Testimonials Page */

// Page Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import TestimonialHero from "components/common/TestimonialHero";
import Testimonials from "components/common/Testimonials";
import GoogleReviews from "components/common/GoogleReviews";
import Main from "components/layout/Main";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Kids/About/testimonials.content";

export default function JJTestimonials() {
  return (
    <div className={page.slug}>
    <JJKidsNav/>
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
