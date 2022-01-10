// React Components
import ReCAPTCHA from 'react-google-recaptcha'


export default function ContactForm() {

  function onSubmit(token) {
    document.getElementById("contactForm").submit();
  }

  return (
    <form id="contactForm" method="POST" action="https://usebasin.com/f/56aeaf6b8395">
      <fieldset>
        <div>
          <input aria-label="Name" type="text" name="name" pattern="[a-zA-Z][a-zA-Z ]+" placeholder="Name" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <input aria-label="Email" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <input aria-label="Phone" type="tel" name="phone" pattern="[0-9]{10}" placeholder="Phone Number" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <textarea aria-label="Message" name="message" placeholder="Message" required />
        </div>
      </fieldset>

      <div className="g-recaptcha" data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"></div>

      <fieldset>
        <input type="submit" value="Submit" />
      </fieldset>
    </form >
  );
}