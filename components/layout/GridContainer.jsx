import { Container } from "react-bootstrap";
import Block from "components/layout/Block";
import HomeConditions from "components/common/HomeConditions";

const GridContainer = (section) => {
  let hasGridConditions;
  let hasGridSection;

  if (section.grid === "home-grid-conditions") {
    hasGridConditions = true;
  } else {
    hasGridSection = true;
  }

  const renderGridConditions = () => {
    if (hasGridConditions) {
      return <HomeConditions {...section.blocks} />;
    }
  };

  const renderGridSection = () => {
    if (hasGridSection) {
      return (
        <Container className={section.grid}>
          {section.blocks.map(({ block }, i) => (
            <Block key={i} {...block} />
          ))}
        </Container>
      );
    }
  };

  return (
    <>
      {renderGridSection()}
      {renderGridConditions()}
    </>
  );
}

export default GridContainer;