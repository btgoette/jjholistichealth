// React Components
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { Player, BigPlayButton } from "video-react";
import "node_modules/video-react/dist/video-react.css";

// Custom Components
import BookNowCTA from "components/common/BookNowCTA";

const Hero = (hero) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }

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

  let hasBookNow;
  if (hero.bookNow !== undefined) {
    hasBookNow = true;
  } else {
    hasBookNow = false;
  }

  const renderBookNow = () => {
    if (hasBookNow) {
      return (
        <>
          <BookNowCTA />
        </>
      );
    }
  };

  let hasVideo;
  if (hero.video !== undefined) {
    hasVideo = true;
  } else {
    hasVideo = false;
  }

  const renderVideo = () => {
    if (hasVideo) {
      return (
        <>
          <Button className="mt-4" onClick={() => handleShow()}>{hero.video.ctaLabel}</Button>
          <Modal
            className="modal-video"
            show={show}
            fullscreen={fullscreen}
            onHide={() => setShow(false)}
          >
            <Modal.Header closeButton closeVariant="white"></Modal.Header>
            <Modal.Body className="video">
              <Player
                preload="auto"
                poster={hero.video.poster}
                src={hero.video.src}
              >
                <BigPlayButton position="center" />
              </Player>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  };

  return (
    <section className={hero.class}>
      <Container className="hero-grid">
        <div className="grid-row-1-2 grid-column-1-2">
          <div className="hero-content">
            {renderTitle()}
            {renderText()}
            {renderBookNow()}
            {renderVideo()}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
