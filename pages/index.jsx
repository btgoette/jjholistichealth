/* Home Page */
//React Components
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Main from "components/layout/Main";
import Nav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/home.content";

const Home = () => {
  return (
    <div className={page.slug}>
      <Nav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Section {...page.nutritionalMedicine} />
        <Section {...page.conditions} />
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default Home;
