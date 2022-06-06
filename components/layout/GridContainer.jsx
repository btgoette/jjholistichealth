import { Container } from "react-bootstrap";
import Block from "components/layout/Block";
import Conditions from "components/common/Conditions";
import HomeConditions from "components/common/HomeConditions";

const GridContainer = (section) => {
  
  let hasGridSection;
  let hasGridConditions;
  let hasHomeGridConditions;

  if (section.grid === "home-grid-conditions") {
    hasHomeGridConditions = true;
  } else  if (section.grid === "grid-conditions") {
    hasGridConditions = true;
  } else {
    hasGridSection = true;
  }

  const renderGridConditions = () => {
    if (hasGridConditions) {
      return <Conditions {...section.blocks} />;
    }
  };

  const renderHomeGridConditions = () => {
    if (hasHomeGridConditions) {
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
      {renderHomeGridConditions()}
    </>
  );
}

export default GridContainer;