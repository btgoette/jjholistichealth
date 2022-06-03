import SectionHeader from "components/layout/SectionHeader";
import GridContainer from "components/layout/GridContainer";
import FlexContainer from "components/layout/FlexContainer";


export default function Section(section) {
  let hasSectionHeader;
  if (section.header !== undefined) {
    hasSectionHeader = true;
  } else {
    hasSectionHeader = false;
  }

  const renderSectionHeader = () => {
    if (hasSectionHeader) {
      return (
        <SectionHeader {...section}/>
      )
    }
  };

  let hasGridContainer;
  if (section.grid !== undefined) {
    hasGridContainer = true;
  } else {
    hasGridContainer = false;
  }

  const renderGridContainer = () => {
    if (hasGridContainer) {
      return (
        <GridContainer {...section} />
      );
    }
  };

  let hasFlexContainer;
  if (section.flex !== undefined) {
    hasFlexContainer = true;
  } else {
    hasFlexContainer = false;
  }

  const renderFlexContainer = () => {
    if (hasFlexContainer) {
      return (
        <FlexContainer {...section} />
      );
    }
  };

  return (
    <section className={section.slug}>
      {renderSectionHeader()}
      {renderFlexContainer()}      
      {renderGridContainer()}
    </section>
  );
}
