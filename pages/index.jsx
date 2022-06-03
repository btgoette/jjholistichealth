/* Home Page */
//React Components
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Page Components
import Head from "components/common/Head";
import Hero from "components/common/Hero";
import Section from "components/layout/Section";
import Main from "components/layout/Main";
import JJNav from "components/layout/JJNav.jsx";
import JJKidsNav from "components/layout/JJKidsNav.jsx";

// Page Content
import page from "public/content/en_US/Page/home.content";

export default function Home() {
  return (
    <div className={page.slug}>
      
      <JJNav/>
      <Head {...page} />
      <Hero {...page.hero} />
      <Main>
        <Section {...page.nutritionalMedicine} />
        <Section {...page.conditions} />
      </Main>
    </div>
  );
}
