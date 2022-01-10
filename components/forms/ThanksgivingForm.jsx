// React Components
import ReCAPTCHA from 'react-google-recaptcha'


export default function ThanksgivingForm() {

  function onSubmit(token) {
    document.getElementById("thanksgivingForm").submit();
  }

  return (
    <form id="thanksgivingForm" method="POST" action="https://usebasin.com/f/0709d17531f5">
       <fieldset>
        <div>
          <input type="text" name="name" pattern="[a-zA-Z][a-zA-Z ]+" placeholder="Name" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <input type="tel" name="phone" pattern="[0-9]{10}" placeholder="Phone Number" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <input name="address" type="text" placeholder="Address" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <textarea name="guests" placeholder="Name of Guests" />
        </div>
      </fieldset>

      <div className="g-recaptcha" data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"></div>

      <fieldset>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
}