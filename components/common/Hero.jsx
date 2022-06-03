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
  }

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
    
      <section className={hero.slug + " hero"}>
        <div className="hero-container">
          <div className="hero-block">
              <div className="hero-content">
                {renderTitle()}
                {renderText()}
                <BookNowCTA />
              </div>
          </div>
        </div>
      </section>
    
  );
}

export default Hero;