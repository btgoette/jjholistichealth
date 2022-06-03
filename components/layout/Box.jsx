import { LazyLoadImage } from "react-lazy-load-image-component";
import { Figure, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Box = (box) => {
  let hasTitle;
  if (box.title !== undefined) {
    hasTitle = true;
  } else {
    hasTitle = false;
  }

  const renderTitle = () => {
    if (hasTitle) {
      return <h2>{box.title}</h2>;
    }
  };

  let hasSubTitle;
  if (box.subtitle !== undefined) {
    hasSubTitle = true;
  } else {
    hasSubTitle = false;
  }

  const renderSubTitle = () => {
    if (hasSubTitle) {
      return <h3>{box.subtitle}</h3>;
    }
  };

  let hasText;
  if (box.text !== undefined) {
    hasText = true;
  } else {
    hasText = false;
  }

  const renderText = () => {
    if (hasText) {
      return (
        <>
          {box.text.map(({ p }, j) => (
            <p key={j}>{p}</p>
          ))}
        </>
      );
    }
  };

  let hasList;
  if (box.list !== undefined) {
    hasList = true;
  } else {
    hasList = false;
  }

  const renderList = () => {
    if (hasList) {
      return (
        <ul className="fa-ul">
          {box.list.map(({ li }, j) => (
            <li key={j}>
              <span className="fa-li">
                <FontAwesomeIcon icon={["fab", "envira"]} />
              </span>
              {li}
            </li>
          ))}
        </ul>
      );
    }
  };

  let hasImage;
  if (box.img !== undefined) {
    hasImage = true;
  } else {
    hasImage = false;
  }

  const renderImage = () => {
    if (hasImage) {
      return (
        <Figure className={box.img.class}>
          <LazyLoadImage src={box.img.src} alt={box.img.alt} />
        </Figure>
      );
    }
  };

  let hasCTA;
  if (box.cta !== undefined) {
    hasCTA = true;
  } else {
    hasCTA = false;
  }

  const renderCTA = () => {
    if (hasCTA) {
      return (
        <p className={box.cta.class}>
          <Button href={box.cta.href}>{box.cta.ctaLabel}</Button>
        </p>
      );
    }
  };

  return (
    <Col lg={{ offset: box.offset, span: box.span, order: box.order}}>
      {renderTitle()}
      {renderSubTitle()}
      {renderText()}
      {renderList()}
      {renderImage()}
      {renderCTA()}
    </Col>
  );
}

export default Box;