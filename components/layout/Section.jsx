import SectionHeader from "components/layout/SectionHeader";
import GridContainer from "components/layout/GridContainer";


const Section = (section) => {
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

  return (
    <section className={section.slug}>
      {renderSectionHeader()}
      {renderGridContainer()}
    </section>
  );
}

export default Section;