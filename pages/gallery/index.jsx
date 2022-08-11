/* Gallery Page */
import { Container } from "react-bootstrap";

// Page Components
import Head from "components/common/Head";
import Main from "components/layout/Main";
import TestimonialVideoFooter from "components/common/TestimonialVideoFooter";
import Breadcrumbs from "components/common/Breadcrumbs";
import ImageGallery from "react-image-gallery";
import JJNav from "components/layout/JJNav.jsx";

// Page Content
import page from "public/content/en_US/Page/Gallery/gallery.content";

const PhotoGallery = () => {
  return (
    <div className={page.slug}>
    <JJNav/>
      <Head {...page} />
      <Main>
        <Breadcrumbs {...page} />
        <section className="pt-0">
          <Container>
            <div className="content">
              <h1>Photo Gallery</h1>
              <p>
                Welcome to J&amp;J Holistic Nutritional Therapy. We invite you
                to take a virtual tour of our clinic. Scroll through our photo
                gallery for a wide-ranging view of the comfort and care we
                offer.
              </p>
              <ImageGallery items={page.gallery.images} />
            </div>
          </Container>
        </section>
        <TestimonialVideoFooter />
      </Main>
    </div>
  );
}

export default PhotoGallery;