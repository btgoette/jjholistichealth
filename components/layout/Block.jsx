import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link"
import { Figure, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BookNowForm from "components/forms/BookNowForm";
import ConsentForm from "components/forms/ConsentForm";
import ContactForm from "components/forms/ContactForm";
import ContactInfo from "components/forms/ContactInfo";
import Covid19Form from "components/forms/Covid19Form";
import EndocrineSteamIntakeForm from "components/forms/EndocrineSteamIntakeForm";
import FollowUpForm from "components/forms/FollowUpForm";
import FoodIntoleranceForm from "components/forms/FoodIntoleranceForm";
import FunctionalExamForm from "components/forms/FunctionalExamForm";
import HerbalVSteamForm from "components/forms/HerbalVSteamForm";
import PediatricAssessment from "components/forms/PediatricAssessment";


const Block = (block) => {
  let hasTitle;
  if (block.title !== undefined) {
    hasTitle = true;
  } else {
    hasTitle = false;
  }

  const renderTitle = () => {
    if (hasTitle) {
      return <h2>{block.title}</h2>;
    }
  };

  let hasSubTitle;
  if (block.subtitle !== undefined) {
    hasSubTitle = true;
  } else {
    hasSubTitle = false;
  }

  const renderSubTitle = () => {
    if (hasSubTitle) {
      return <h3>{block.subtitle}</h3>;
    }
  };

  let hasText;
  if (block.text !== undefined) {
    hasText = true;
  } else {
    hasText = false;
  }

  const renderText = () => {
    if (hasText) {
      return (
        <>
          {block.text.map(({ p }, j) => (
            <p key={j}>{p}</p>
          ))}
        </>
      );
    }
  };

  let hasList;
  if (block.list !== undefined) {
    hasList = true;
  } else {
    hasList = false;
  }

  const renderList = () => {
    if (hasList) {
      return (
        <ul className="fa-ul">
          {block.list.map(({ li}, j) => (
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

  let hasLinkList;
  if (block.linkList !== undefined) {
    hasLinkList = true;
  } else {
    hasLinkList = false;
  }

  const renderLinkList = () => {
    if (hasLinkList) {
      return (
        <ul className="fa-ul">
          {block.linkList.map(({ li, href }, j) => (
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

  let hasImage;
  if (block.img !== undefined) {
    hasImage = true;
  } else {
    hasImage = false;
  }

  const renderImage = () => {
    if (hasImage) {
      return (
        <Figure className={block.img.class}>
          <LazyLoadImage src={block.img.src} alt={block.img.alt} />
        </Figure>
      );
    }
  };

  let hasCTA;
  if (block.cta !== undefined) {
    hasCTA = true;
  } else {
    hasCTA = false;
  }

  const renderCTA = () => {
    if (hasCTA) {
      return (
        <p className={block.cta.class}>
          <Button href={block.cta.href}>{block.cta.ctaLabel}</Button>
        </p>
      );
    }
  };

  let hasForm;
  if (block.form !== undefined) {
    hasForm = true;
  } else {
    hasForm = false;
  }

  const renderForm = () => {
    if (hasForm) {
      if (block.form == "bookNow") {
        return(
          <BookNowForm />
        )
      } else if (block.form == "consent") {
        return(
          <ConsentForm />
        )
      } else if (block.form == "contact") {
          return(
            <ContactForm />
          )
      } else if (block.form == "covid") {
        return(
          <Covid19Form />
        )
      } else if (block.form == "endocrine") {
        return(
          <EndocrineSteamIntakeForm />
        )
      } else if (block.form == "followUp") {
        return(
          <FollowUpForm />
        )
      } else if (block.form == "food") {
        return(
          <FoodIntoleranceForm />
        )
      } else if (block.form == "functional") {
        return(
          <FunctionalExamForm />
        )
      } else if (block.form == "herbal") {
        return(
          <HerbalVSteamForm />
        )
      } else if (block.form == "pediatric") {
        return(
          <PediatricAssessment />
        )
      } else {
        return(
          <ContactInfo />
        )
      }
    }
  };

  return (
    <div className={block.row + " " + block.column}>
      {renderTitle()}
      {renderSubTitle()}
      {renderText()}
      {renderList()}
      {renderLinkList()}
      {renderImage()}
      {renderCTA()}
      {renderForm()}
    </div>
  );
}

export default Block;