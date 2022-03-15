import { Container, Row, Col, Figure, Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Player, BigPlayButton } from "video-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "node_modules/video-react/dist/video-react.css";

export default function Section(block) {
  let oneColumn;
  if (block.column.length === 1) {
    oneColumn = true;
  } else {
    oneColumn = false;
  }

  const renderOneColumn = () => {
    if (oneColumn) {
      return (
        <Row className="block align-items-center">
          <Col
            lg={{
              offset: block.column[0].offset,
              span: block.column[0].span,
              order: block.column[0].order,
            }}
          >
            {renderTitle()}
            {renderText()}
            {renderSubtitle()}
            {renderTextImage()}
            {renderListTitle()}
            {renderList()}            
            {renderHeaderList()}
            {renderImgList()}
            {renderImage()}
            {renderCTA()}
            {renderVideo()}
          </Col>
        </Row>
      );
    }
  };

  let TwoColumn;
  if (block.column.length === 2) {
    TwoColumn = true;
  } else {
    TwoColumn = false;
  }

  const renderTwoColumn = () => {
    if (TwoColumn) {
      return (
        <Row className="block align-items-center">
          <Col
            lg={{
              offset: block.column[0].offset,
              span: block.column[0].span,
              order: block.column[0].order,
            }}
          >
            {renderImage()}
            {renderMultipleImages()}
            {renderListBlock()}
          </Col>
          <Col
            lg={{
              offset: block.column[1].offset,
              span: block.column[1].span,
              order: block.column[1].order,
            }}
          >
            {renderTitle()}
            {renderText()}
            {renderSubtitle()}
            {renderTextImage()}
            {renderListTitle()}
            {renderList()}
            {renderImgList()}
          </Col>
        </Row>
      );
    }
  };

  let MultiColumn;
  if (block.column.length > 2) {
    MultiColumn = true;
  } else {
    MultiColumn = false;
  }

  const renderMultiColumn = () => {
    if (MultiColumn) {
      return (
        <Row className="block align-items-top">
          {block.column.map(
            ({ offset, span, order, title, subtitle, text, img }, k) => (
              <Col
                className="block"
                key={k}
                lg={{
                  offset: offset,
                  span: span,
                  order: order,
                }}
              >
                <Figure className="rounded">
                  <LazyLoadImage src={img.src} alt={img.alt} />
                  <Figure.Caption>{img.caption}</Figure.Caption>
                </Figure>
                <h3 className="text-center">{title}</h3>
                {subtitle.map(({ p }, j) => (
                  <p key={j}>{p}</p>
                ))}
              </Col>
            )
          )}
        </Row>
      );
    }
  };

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

  let hasSubtitle;
  if (block.subtitle !== undefined) {
    hasSubtitle = true;
  } else {
    hasSubtitle = false;
  }

  const renderSubtitle = () => {
    if (hasSubtitle) {
      return (
        <>
          <h3>{block.subtitle}</h3>
        </>
      );
    }
  };

  let hasListTitle;
  if (block.listTitle !== undefined) {
    hasListTitle = true;
  } else {
    hasListTitle = false;
  }

  const renderListTitle = () => {
    if (hasListTitle) {
      return (
        <>
          <h3>{block.listTitle}</h3>
        </>
      );
    }
  };

  let hasListBlockTitle;
  if (block.listBlockTitle !== undefined) {
    hasListBlockTitle = true;
  } else {
    hasListBlockTitle = false;
  }

  const renderListBlockTitle = () => {
    if (hasListBlockTitle) {
      return (
        <>
          <h3>{block.listBlockTitle}</h3>
        </>
      );
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

  let hasTextImage;
  if (block.textImage !== undefined) {
    hasTextImage = true;
  } else {
    hasTextImage = false;
  }

  const renderTextImage = () => {
    if (hasTextImage) {
      return (
        <Figure className="fruit w-100">
          <LazyLoadImage src={block.textImage.src} alt={block.textImage.alt} />
        </Figure>
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

  let hasHeaderList;
  if (block.headerList !== undefined) {
    hasHeaderList = true;
  } else {
    hasHeaderList = false;
  }

  const renderHeaderList = () => {
    if (hasHeaderList) {
      return (
        <>
          {block.headerList.map(({ h3, p }, j) => (
            <div key={j}>
              <h3>{h3}</h3>
              <p>{p}</p>
            </div>
          ))}
        </>
      );
    }
  };

  let hasListBlock;
  if (block.listBlock !== undefined) {
    hasListBlock = true;
  } else {
    hasListBlock = false;
  }

  const renderListBlock = () => {
    if (hasListBlock) {
      return (
        <>
          {renderListBlockTitle()}
          <ul className="fa-ul">
            {block.listBlock.map(({ li }, j) => (
              <li key={j}>
                <span className="fa-li">
                  <FontAwesomeIcon icon={["fab", "envira"]} />
                </span>
                {li}
              </li>
            ))}
          </ul>
        </>
      );
    }
  };

  let hasImgList;
  if (block.imgList !== undefined) {
    hasImgList = true;
  } else {
    hasImgList = false;
  }

  const renderImgList = () => {
    if (hasImgList) {
      return (
        <div className="pt-4">
          {block.imgList.map(({ img, h3, p }, j) => (
            <div
              className="d-md-flex text-center text-md-start align-items-center"
              key={j}
            >
              <Figure className="list-image">
                <LazyLoadImage src={img.src} alt={img.alt} />
              </Figure>
              <div>
                <h3>{h3}</h3>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
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
        <Figure className="rounded w-100 text-center">
          <LazyLoadImage src={block.img.src} alt={block.img.alt} />
        </Figure>
      );
    }
  };

  let hasMultipleImages;
  if (block.multiImage !== undefined) {
    hasMultipleImages = true;
  } else {
    hasMultipleImages = false;
  }

  const renderMultipleImages = () => {
    if (hasMultipleImages) {
      return (
        <div className="you-are-what-you-eat-image">
          {block.multiImage.map(({ src, alt, slug }, l) => (
            <figure key={l} className={slug}>
              <LazyLoadImage src={src} alt={alt} />
            </figure>
          ))}
        </div>
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
        <p className="text-center">
          <Button href={block.cta.href}>{block.cta.ctaLabel}</Button>
        </p>
      );
    }
  };

  let hasVideo;
  if (block.poster !== undefined) {
    hasVideo = true;
  } else {
    hasVideo = false;
  }

  const renderVideo = () => {
    if (hasVideo) {
      return (
        <Player playsInline poster={block.poster} src={block.src}>
          <BigPlayButton position="center" />
        </Player>
      );
    }
  };

  return (
    <>
      <a className="anchor" id={block.slug}></a>

      <section className={block.slug}>
        <Container>
          {renderOneColumn()}
          {renderTwoColumn()}
          {renderMultiColumn()}
        </Container>
      </section>
    </>
  );
}
