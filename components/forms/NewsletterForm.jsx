export default function Newsletter() {

  return (
    <div className="newsletter">
      <h2 className="text-lg-start">Join our mailing list!</h2>
      <p className="text-lg-start">
        Sign Up to receive email updates on announcements, gifts, special
        promotions, and sales on P.O.P. Organic products and more!
      </p>
      <form
        id="newsletterForm"
        className="newsletter-form align-items-center"
        action="https://forms.ontraport.com/v2.4/form_processor.php?"
        method="POST"
        acceptCharset="UTF-8"
      >
        <fieldset className="newsletter-first-name">
          <input
            aria-label="Name"
            type="text"
            name="firstname"
            pattern="[a-zA-Z][a-zA-Z ]+"
            placeholder="First Name"
            id="mr-field-element-665400750684"
            required
          />
        </fieldset>
        <fieldset className="newsletter-last-name">
          <input
            aria-label="Name"
            type="text"
            name="lastname"
            pattern="[a-zA-Z][a-zA-Z ]+"
            placeholder="Last Name"
            id="mr-field-element-963842744489"
            required
          />
        </fieldset>
        <fieldset className="newsletter-email">
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
        <fieldset className="newsletter-submit">
          <input
            type="submit"
            name="submit-button"
            value="Submit"
            className="btn btn-primary"
            id="mr-field-element-396621743854"
          />
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
        <input name="uid" type="hidden" value="p2c240683f8" />
        <input name="uniquep2c240683f8" type="hidden" value="0" />
        <input
          name="mopsbbk"
          type="hidden"
          value="BA6DBB61FC038204F9F6908B:04A52C6ADD155A54DDD2DC79"
        />
        <input
          name="mopbelg"
          type="hidden"
          value="0150548:E48A7635862A3EF3759F14AE:9AAF6AFF527D164DF7F4194F"
        />
      </form>
    </div>
  );
}
