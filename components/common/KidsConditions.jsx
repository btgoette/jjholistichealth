/* Conditions Component */

//  React Components
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConditionsIndex = (block) => {
  return (
    <>
      <Container className="kids-conditions-grid">
          {block.condition.map(({ src, alt, name, bullet }, i) => (
            <div key={i} data-aos-delay="0" data-aos="fade-up">
              <figure className="round">
                <LazyLoadImage src={src} alt={alt} />
              </figure>
              <h3 className="text-center">{name}</h3>
              <ul className="fa-ul">
                {bullet.map(({ li }, i) => (
                  <li key={i}>
                    <span className="fa-li">
                      <FontAwesomeIcon icon={["fab", "envira"]} />
                    </span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </Container>
    </>
  );
};

export default ConditionsIndex;
