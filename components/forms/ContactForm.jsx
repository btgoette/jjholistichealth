// React Components
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {

  return (
    <>
      <form
        id="contactForm"
        method="POST"
        action="https://forms.ontraport.com/v2.4/form_processor.php"
      >
        <fieldset>
          <input
            aria-label="Name"
            type="text"
            name="firstname"
            pattern="[a-zA-Z][a-zA-Z ]+"
            placeholder="Name"
            id="mr-field-element-665400750684"
            required
          />
        </fieldset>

        <fieldset>
          <input
            aria-label="Email"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="Email"
            id="mr-field-element-488599729958"
            required
          />
        </fieldset>

        <fieldset>
          <input
            aria-label="Phone"
            type="tel"
            name="office_phone"
            pattern="[0-9]{10}"
            placeholder="Phone Number"
            id="mr-field-element-982783901333"
            required
          />
        </fieldset>

        <fieldset>
          <textarea
            aria-label="Message"
            name="message"
            placeholder="Message"
            id="mr-field-element-167372072412"
            required
          />
        </fieldset>

        <div
          className="g-recaptcha"
          data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"
        ></div>

        <fieldset>
          <input type="submit" name="submit-button" value="Submit" id="mr-field-element-396621743854" />
        </fieldset>
        
        <input name="afft_" type="hidden" value="" />
        <input name="aff_" type="hidden" value="" />
        <input name="sess_" type="hidden" value="" />
        <input name="ref_" type="hidden" value="" />
        <input name="own_" type="hidden" value="" />
        <input name="oprid" type="hidden" value="" />
        <input name="contact_id" type="hidden" value="" />
        <input name="utm_source" type="hidden" value="" />
        <input name="utm_medium" type="hidden" value="" />
        <input name="utm_term" type="hidden" value="" />
        <input name="utm_content" type="hidden" value="" />
        <input name="utm_campaign" type="hidden" value="" />
        <input name="referral_page" type="hidden" value="" />
        <input name="_op_gclid" type="hidden" value="" />
        <input name="_op_gcid" type="hidden" value="" />
        <input name="_fbc" type="hidden" value="" />
        <input name="_fbp" type="hidden" value="" />
        <input name="uid" type="hidden" value="p2c240683f7" />
        <input name="uniquep2c240683f7" type="hidden" value="0" />
        <input
          name="mopsbbk"
          type="hidden"
          value="5AF5861955D39927403DBFD3:3208B3100E3EC1A40ADE303C"
        />
        <input
          name="mopbelg"
          type="hidden"
          value="0150444:60598C592079FB7635DBFC7D:2736E27F58E5B12BA2CEFAF1"
        />
      </form>
    </>
  );
}
