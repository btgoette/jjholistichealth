import { Container } from "react-bootstrap";
import Block from "components/layout/Block";
import Conditions from "components/common/Conditions";
import HomeConditions from "components/common/HomeConditions";
import KidsConditions from "components/common/KidsConditions";

const GridContainer = (section) => {
  
  let hasGridSection;
  let hasGridConditions;
  let hasHomeGridConditions;
  let hasKidsGridConditions;

  if (section.grid === "home-grid-conditions") {
    hasHomeGridConditions = true;
  } else  if (section.grid === "kids-grid-conditions") {
    hasKidsGridConditions = true;
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

  const renderKidsGridConditions = () => {
    if (hasKidsGridConditions) {
      return <KidsConditions {...section.blocks} />;
    }
  };

  const renderGridSection = () => {
    if (hasGridSection) {
      return (
        <>
        <a className="anchor" id={section.slug}/>
        <Container className={section.grid}>
          {section.blocks.map(({ block }, i) => (
            <Block key={i} {...block} />
          ))}
        </Container>
        </>
      );
    }
  };

  return (
    <>
      {renderGridSection()}
      {renderGridConditions()}
      {renderHomeGridConditions()}
      {renderKidsGridConditions()}
    </>
  );
}

export default GridContainer;