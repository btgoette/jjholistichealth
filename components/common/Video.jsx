import { Player, BigPlayButton } from "video-react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "node_modules/video-react/dist/video-react.css";

const Video = (video) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

  return (
    <div className="video">
      <Container>
        <Player preload="auto" playsInline src={video.src} poster={video.poster}>
          <BigPlayButton position="center" />
        </Player>
      </Container>
    </div>
  );
};

export default Video;
