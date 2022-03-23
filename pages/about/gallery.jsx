/* Gallery Page */
import { Container, Row, Col } from "react-bootstrap";

// Page Components
import Head from "components/common/Head";
import Breadcrumbs from "components/common/Breadcrumbs";
import ImageGallery from "react-image-gallery";

// Page Content
import page from "public/content/en_US/Page/About/gallery.content";

export default function PhotoGallery() {
  return (
    <div className={page.slug}>
      <Head {...page} />

      <Breadcrumbs {...page} />
      <Container>
        <Row>
          <Col>
            <div className="content">
              <h1>Photo Gallery</h1>
              <p>Welcome to J&J Holistic Nutritional Therapy. We invite you to take a virtual tour of our clinic. Scroll through our photo gallery for a wide-ranging view of the comfort and care we offer.</p>
              <ImageGallery items={page.block.gallery.images} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
