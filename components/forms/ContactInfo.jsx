// React Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Info</h2>
      <p>
        <FontAwesomeIcon icon={["fas", "phone"]} />
        <a href="tel:18006343363">+1 800 634 3363</a>
      </p>
      <p>
        <FontAwesomeIcon icon={["fas", "envelope"]} />
        <a href="mailto:support@jjholistichealth.com">
          support@jjholistichealth.com
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon={["fas", "building"]} />
        <div className="d-block">
          <span>
            4645 Avon Ln
            <br />
            Suite 340
            <br />
            Frisco, TX 75033, USA
          </span>
        </div>
      </p>
      <p>
        <FontAwesomeIcon icon={["fas", "clock"]} />
        <div className="d-block">
          <span>
            Tues – Thurs 10am-5pm
            <br />
            Sat 10am-3pm
          </span>
        </div>
      </p>
    </div>
  );
};

export default ContactInfo;
