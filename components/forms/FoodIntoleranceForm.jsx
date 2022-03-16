// import React Component
import ReCAPTCHA from 'react-google-recaptcha'

export default function FoodIntoleranceForm() {

  function onSubmit(token) {
    document.getElementById("foodIntoleranceForm").submit();
  }

  return (
    <form id="foodIntoleranceForm" method="POST" action="https://usebasin.com/f/f088daf49104">

      <fieldset>

        <div>
          <label htmlFor="name">Name:<span className="required">*</span></label>
          <input id="name" type="text" name="name" pattern="[a-zA-Z][a-zA-Z ]+" required />
        </div>

        <div>
          <label htmlFor="date">Date:<span className="required">*</span></label>
          <input id="date" type="date" name="date" required />
        </div>

      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="food">Food:<span className="required">*</span></label>
          <textarea id="food" name="food" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="additives">Additives:<span className="required">*</span></label>
          <textarea id="additives" name="additives" />
        </div>
      </fieldset>

      <div className="g-recaptcha" data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"></div>

      <fieldset>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
}