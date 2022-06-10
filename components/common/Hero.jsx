// React Components
import { Container } from "react-bootstrap"

// Custom Components
import BookNowCTA from "components/common/BookNowCTA";

const Hero = (hero) => {
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

  return (
    <section className={hero.class}>
      <Container className="hero-grid">
        <div className="grid-row-1-2 grid-column-1-2">
          <div className="hero-content">
            {renderTitle()}
            {renderText()}
            <BookNowCTA />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
