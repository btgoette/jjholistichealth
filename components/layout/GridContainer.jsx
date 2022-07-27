import { Container } from "react-bootstrap";
import Block from "components/layout/Block";
import Conditions from "components/common/Conditions";
import KidsConditions from "components/common/KidsConditions";
import HomeConditions from "components/common/HomeConditions";
import KidsHomeConditions from "components/common/KidsHomeConditions";

const GridContainer = (section) => {
  
  let hasGridSection;
  let hasGridConditions;
  let hasHomeGridConditions;
  let hasKidsHomeGridConditions;
  let hasKidsGridConditions;

  if (section.grid === "home-grid-conditions") {
    hasHomeGridConditions = true;
  } else  if (section.grid === "kids-home-grid-conditions") {
    hasKidsHomeGridConditions = true;
  } else  if (section.grid === "grid-conditions") {
    hasGridConditions = true;
  } else  if (section.grid === "kids-grid-conditions") {
    hasKidsGridConditions = true;
  }else {
    hasGridSection = true;
  }

  const renderGridConditions = () => {
    if (hasGridConditions) {
      return <Conditions {...section.blocks} />;
    }
  };

  const renderKidsGridConditions = () => {
    if (hasKidsGridConditions) {
      return <KidsConditions {...section.blocks} />;
    }
  };

  const renderHomeGridConditions = () => {
    if (hasHomeGridConditions) {
      return <HomeConditions {...section.blocks} />;
    }
  };

  const renderKidsHomeGridConditions = () => {
    if (hasKidsHomeGridConditions) {
      return <KidsHomeConditions {...section.blocks} />;
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
      {renderKidsGridConditions()}
      {renderHomeGridConditions()}
      {renderKidsHomeGridConditions()}
    </>
  );
}

export default GridContainer;