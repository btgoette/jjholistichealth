import { LazyLoadImage } from "react-lazy-load-image-component";
import { Figure, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Block = (block) => {
  let hasTitle;
  if (block.title !== undefined) {
    hasTitle = true;
  } else {
    hasTitle = false;
  }

  const renderTitle = () => {
    if (hasTitle) {
      return <h2>{block.title}</h2>;
    }
  };

  let hasSubTitle;
  if (block.subtitle !== undefined) {
    hasSubTitle = true;
  } else {
    hasSubTitle = false;
  }

  const renderSubTitle = () => {
    if (hasSubTitle) {
      return <h3>{block.subtitle}</h3>;
    }
  };

  let hasText;
  if (block.text !== undefined) {
    hasText = true;
  } else {
    hasText = false;
  }

  const renderText = () => {
    if (hasText) {
      return (
        <>
          {block.text.map(({ p }, j) => (
            <p key={j}>{p}</p>
          ))}
        </>
      );
    }
  };

  let hasList;
  if (block.list !== undefined) {
    hasList = true;
  } else {
    hasList = false;
  }

  const renderList = () => {
    if (hasList) {
      return (
        <ul className="fa-ul">
          {block.list.map(({ li }, j) => (
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
  if (block.img !== undefined) {
    hasImage = true;
  } else {
    hasImage = false;
  }

  const renderImage = () => {
    if (hasImage) {
      return (
        <Figure className={block.img.class}>
          <LazyLoadImage src={block.img.src} alt={block.img.alt} />
        </Figure>
      );
    }
  };

  let hasCTA;
  if (block.cta !== undefined) {
    hasCTA = true;
  } else {
    hasCTA = false;
  }

  const renderCTA = () => {
    if (hasCTA) {
      return (
        <p className={block.cta.class}>
          <Button href={block.cta.href}>{block.cta.ctaLabel}</Button>
        </p>
      );
    }
  };

  return (
    <div className={block.row + " " + block.column}>
      {renderTitle()}
      {renderSubTitle()}
      {renderText()}
      {renderList()}
      {renderImage()}
      {renderCTA()}
    </div>
  );
}

export default Block;