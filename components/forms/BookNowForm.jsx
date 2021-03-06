// React Components
import ReCAPTCHA from "react-google-recaptcha";

const BookNowForm = () => {
  function onSubmit(token) {
    document.getElementById("bookNowForm").submit();
  }

  return (
    <form
      id="bookNowForm"
      method="POST"
      action="https://usebasin.com/f/d0b553a4b030"
    >
      <fieldset>
        <div>
          <label htmlFor="name">
            Name:<span className="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            pattern="[a-zA-Z][a-zA-Z ]+"
            required
          />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="dob">
            Date of Birth:<span className="required">*</span>
          </label>
          <input id="dob" type="date" name="dob" required />
        </div>
        <div>
          <label htmlFor="age">
            Age:<span className="required">*</span>
          </label>
          <input id="age" type="number" name="age" min="1" max="99" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="email">
            Email:<span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">
            Phone Number:<span className="required">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            pattern="[0-9]{10}"
            title="Invalid input"
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <label className="mb-2">
          Health Concerns:<span className="required">*</span>
        </label>
      </fieldset>
      <fieldset>
        <div className="d-flex align-items-center">
          <input
            id="stress"
            type="checkbox"
            name="healthConcern1"
            value="Stress"
          />
          <label htmlFor="stress">Stress</label>
        </div>
        <div className="d-flex align-items-center">
          <input
            id="digestiveIssues"
            type="checkbox"
            name="healthConcern2"
            value="Digestive Issues"
          />
          <label htmlFor="digestiveIssues">Digestive Issues</label>
        </div>
        <div className="d-flex align-items-center">
          <input
            id="lowEnergy"
            type="checkbox"
            name="healthConcern3"
            value="Low Energy"
          />
          <label htmlFor="lowEnergy">Low Energy</label>
        </div>
        <div className="d-flex align-items-center">
          <input
            id="hormoneImbalance"
            type="checkbox"
            name="healthConcern4"
            value="Hormone Imbalance"
          />
          <label htmlFor="hormoneImbalance">Hormone Imbalance</label>
        </div>
        <div className="d-flex align-items-center">
          <input
            id="immunityProblems"
            type="checkbox"
            name="healthConcern5"
            value="Immunity Problems"
          />
          <label htmlFor="immunityProblems">Immunity Problems</label>
        </div>
        <div className="d-flex align-items-center">
          <input
            id="chronicConditions"
            type="checkbox"
            name="healthConcern6"
            value="Chronic Conditions"
          />
          <label htmlFor="chronicConditions">Chronic Conditions</label>
        </div>
        <div className="d-flex align-items-center">
          <input
            id="skinConditions"
            type="checkbox"
            name="healthConcern7"
            value="Skin Conditions"
          />
          <label htmlFor="skinConditions">Skin Conditions</label>
        </div>
        <div className="d-flex align-items-center">
          <input
            id="neurologicalConditions"
            type="checkbox"
            name="healthConcern8"
            value="Neurological Conditions"
          />
          <label htmlFor="neurologicalConditions">
            Neurological Conditions
          </label>
        </div>
        <div className="d-flex align-items-center">
          <input
            id="weightManagement"
            type="checkbox"
            name="healthConcern9"
            value="Weight Management"
          />
          <label htmlFor="weightManagement">Weight Management</label>
        </div>
        <div className="d-flex align-items-center">
          <input
            id="cancer"
            type="checkbox"
            name="healthConcern10"
            value="Cancer"
          />
          <label htmlFor="cancer">Cancer</label>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="goals">Goals: </label>
          <textarea id="goals" name="goals" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="comments">Additional Comments: </label>
          <textarea id="comments" name="comments" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="referral">How did you hear about us?</label>
          <select id="referral" name="referral">
            <option>--Please Select One--</option>
            <option value="Google Search">Google Search</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Family Member">Family Member</option>
            <option value="Friend">Friend</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="referredBy">Referred by:</label>
          <input
            id="referredBy"
            type="text"
            name="referredBy"
            pattern="[a-zA-Z][a-zA-Z ]+"
            required
          />
        </div>
      </fieldset>

      <div
        className="g-recaptcha"
        data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"
      ></div>

      <fieldset>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  );
}

export default BookNowForm;