import { Container, Row } from "react-bootstrap";
import Box from "components/layout/Box";

const FlexContainer = (section) => {
  return (
    <Container>
      <Row className={section.flex}>
        {section.boxes.map(({ box }, i) => (
          <Box key={i} {...box} />
        ))}
      </Row>
    </Container>
  );
}

export default FlexContainer;