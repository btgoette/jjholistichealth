import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Player, BigPlayButton } from "video-react";
import "node_modules/video-react/dist/video-react.css";

export default function Video(block) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Player playsInline poster={block.poster} src={block.src}>
          <BigPlayButton position="center" />
        </Player>
        </Modal.Body>
      </Modal>
    </>
  );
}