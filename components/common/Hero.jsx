// React Components
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col, Button } from "react-bootstrap";

// Custom Components
import BookNowCTA from "components/common/BookNowCTA";

export default function Hero(hero) {
  let hasTitle;
  if (hero.title !== undefined) {
    hasTitle = true;
  } else {
    hasTitle = false;
  }

  const renderTitle = () => {
    if (hasTitle) {
      return <h1>{hero.title}</h1>;
    }
  };

  let hasSubtitle;
  if (hero.subtitle !== undefined) {
    hasSubtitle = true;
  } else {
    hasSubtitle = false;
  }

  const renderSubtitle = () => {
    if (hasSubtitle) {
      return <h2 className="text-center text-md-start">{hero.subtitle}</h2>;
    }
  };

  let hasText;
  if (hero.text !== undefined) {
    hasText = true;
  } else {
    hasText = false;
  }

  const renderText = () => {
    if (hasText) {
      return (
        <>
          {hero.text.map(({ p }, j) => (
            <p key={j}>{p}</p>
          ))}
        </>
      );
    }
  };

  let hasImage;
  if (hero.img !== undefined) {
    hasImage = true;
  } else {
    hasImage = false;
  }

  const renderImage = () => {
    if (hasImage) {
      return (
        <figure>
          <LazyLoadImage src={hero.img.src} alt={hero.img.alt} />
        </figure>
      );
    }
  };

  let hasCTA;
  if (hero.cta !== undefined) {
    hasCTA = true;
  } else {
    hasCTA = false;
  }

  const renderCTA = () => {
    if (hasCTA) {
      return (
        <p>
          <Button href={hero.cta.href}>{hero.cta.ctaLabel}</Button>
        </p>
      );
    }
  };

  return (
    <>
      <section className={hero.slug + " hero"}>
        <Container className="hero-container">
          <Row className="align-items-center hero-block">
            <Col
              lg={{
                offset: hero.column[0].offset,
                span: hero.column[0].span,
                order: hero.column[0].order,
              }}
            >
              <div className="hero-content">
                {renderTitle()}
                {renderSubtitle()}
                {renderText()}
                <BookNowCTA />
              </div>
            </Col>
            <Col
              className="d-none d-lg-block"
              lg={{
                offset: hero.column[1].offset,
                span: hero.column[1].span,
                order: hero.column[1].order,
              }}
            >
              {renderImage()}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
