import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link"
import { Figure, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BookNowForm from "components/forms/BookNowForm";
import ConsentForm from "components/forms/ConsentForm";
import ContactForm from "components/forms/ContactForm";
import Covid19Form from "components/forms/Covid19Form";
import EndocrineSteamIntakeForm from "components/forms/EndocrineSteamIntakeForm";
import FollowUpForm from "components/forms/FollowUpForm";
import FoodIntoleranceForm from "components/forms/FoodIntoleranceForm";
import FunctionalExamForm from "components/forms/FunctionalExamForm";
import HerbalVSteamForm from "components/forms/HerbalVSteamForm";
import PediatricAssessment from "components/forms/PediatricAssessment";

const Box = (box) => {
  let hasTitle;
  if (box.title !== undefined) {
    hasTitle = true;
  } else {
    hasTitle = false;
  }

  const renderTitle = () => {
    if (hasTitle) {
      return <h2>{box.title}</h2>;
    }
  };

  let hasSubTitle;
  if (box.subtitle !== undefined) {
    hasSubTitle = true;
  } else {
    hasSubTitle = false;
  }

  const renderSubTitle = () => {
    if (hasSubTitle) {
      return <h3>{box.subtitle}</h3>;
    }
  };

  let hasText;
  if (box.text !== undefined) {
    hasText = true;
  } else {
    hasText = false;
  }

  const renderText = () => {
    if (hasText) {
      return (
        <>
          {box.text.map(({ p }, j) => (
            <p key={j}>{p}</p>
          ))}
        </>
      );
    }
  };

  let hasList;
  if (box.list !== undefined) {
    hasList = true;
  } else {
    hasList = false;
  }

  let hasLinkList;
  if (box.linkList !== undefined) {
    hasLinkList = true;
  } else {
    hasLinkList = false;
  }

  const renderLinkList = () => {
    if (hasLinkList) {
      return (
        <ul className="fa-ul">
          {box.linkList.map(({ li, href }, j) => (
            <li key={j}>
              <span className="fa-li">
                <FontAwesomeIcon icon={["fab", "envira"]} />
              </span>
              <Link href={href}>{li}</Link>
            </li>
          ))}
        </ul>
      );
    }
  };

  let hasForm;
  if (box.form !== undefined) {
    hasForm = true;
  } else {
    hasForm = false;
  }

  const renderForm = () => {
    if (hasForm) {
      if (box.form == "bookNow") {
        return(
          <BookNowForm />
        )
      } else if (box.form == "consent") {
        return(
          <ConsentForm />
        )
      } else if (box.form == "covid") {
        return(
          <Covid19Form />
        )
      } else if (box.form == "endocrine") {
        return(
          <EndocrineSteamIntakeForm />
        )
      } else if (box.form == "followUp") {
        return(
          <FollowUpForm />
        )
      } else if (box.form == "food") {
        return(
          <FoodIntoleranceForm />
        )
      } else if (box.form == "functional") {
        return(
          <FunctionalExamForm />
        )
      } else if (box.form == "herbal") {
        return(
          <HerbalVSteamForm />
        )
      } else if (box.form == "pediatric") {
        return(
          <PediatricAssessment />
        )
      } else {
        return(
          <ContactForm />
        )
      }
    }
  };

  const renderList = () => {
    if (hasList) {
      return (
        <ul className="fa-ul">
          {box.list.map(({ li }, j) => (
            <li key={j}>
              <span className="fa-li">
                <FontAwesomeIcon icon={["fab", "envira"]} />
              </span>
              {li}
            </li>
          ))}
        </ul>
      );
    }
  };

  let hasImage;
  if (box.img !== undefined) {
    hasImage = true;
  } else {
    hasImage = false;
  }

  const renderImage = () => {
    if (hasImage) {
      return (
        <Figure className={box.img.class}>
          <LazyLoadImage src={box.img.src} alt={box.img.alt} />
        </Figure>
      );
    }
  };

  let hasCTA;
  if (box.cta !== undefined) {
    hasCTA = true;
  } else {
    hasCTA = false;
  }

  const renderCTA = () => {
    if (hasCTA) {
      return (
        <p className={box.cta.class}>
          <Button href={box.cta.href}>{box.cta.ctaLabel}</Button>
        </p>
      );
    }
  };

  return (
    <Col lg={{ offset: box.offset, span: box.span, order: box.order}}>
      {renderTitle()}
      {renderSubTitle()}
      {renderText()}
      {renderList()}
      {renderLinkList()}
      {renderImage()}
      {renderCTA()}
      {renderForm()}
    </Col>
  );
}

export default Box;