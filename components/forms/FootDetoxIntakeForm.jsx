// React Components
import ReCAPTCHA from "react-google-recaptcha";

const FootDetoxIntakeForm = () => {
  function onSubmit(token) {
    document.getElementById("footDetoxIntakeForm").submit();
  }

  return (
    <form
      id="footDetoxIntakeForm"
      method="POST"
      action="https://usebasin.com/f/f46112a662fc"
    >
      <fieldset>
        <div>
          <label htmlFor="name">
            Name<span className="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            pattern="[a-zA-Z][a-zA-Z ]+"
            required
          />
        </div>
        <div>
          <label htmlFor="age">
            Age<span className="required">*</span>
          </label>
          <input id="age" type="number" name="age" min="18" max="99" required />
        </div>
        <div>
          <label htmlFor="phone">
            Contact #<span className="required">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            pattern="[0-9]{10}"
            required
          />
        </div>
      </fieldset>

      <h3 className="mt-4 mb-0">Health Information</h3>

      <fieldset>
        <div>
          <label htmlFor="healthConcerns">
            What are your major health concerns
            <span className="required">*</span>
          </label>

          <textarea id="healthConcerns" name="healthConcerns" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="currentMedications">
            Please list all current medications.
            <span className="required">*</span>
          </label>
          <textarea id="currentMedications" name="currentMedications" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="surgeries">
            Please list all previous surgeries and dates
            <span className="required">*</span>
          </label>
          <textarea id="surgeries" name="surgeries" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="lastTimeToEat">
            When is the last time you had something to eat?
            <span className="required">*</span>
          </label>
          <textarea id="lastTimeToEat" name="lastTimeToEat" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="pacemaker" className="mb-2">
            Do you have a heart pacemaker or any other battery-operated or
            electrical implant?
            <span className="required">*</span>
          </label>
          <div className="d-flex align-items-center">
            <input
              id="pacemakerYes"
              type="radio"
              name="pacemaker"
              value="Yes"
            />
            <label htmlFor="pacemakerYes">Yes</label>
            <input id="pacemakerNo" type="radio" name="pacemaker" value="No" />
            <label htmlFor="pacemakerNo">No</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="pregnant" className="mb-2">
            Are you pregnant or breastfeeding?
            <span className="required">*</span>
          </label>
          <div className="d-flex align-items-center">
            <input id="pregnantYes" type="radio" name="pregnant" value="Yes" />
            <label htmlFor="pregnantYes">Yes</label>
            <input id="pregnantNo" type="radio" name="pregnant" value="No" />
            <label htmlFor="pregnantNo">No</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="transplantMedication" className="mb-2">
            Are you on medications to prevent rejection of a transplanted organ?
            <span className="required">*</span>
          </label>
          <div className="d-flex align-items-center">
            <input
              id="transplantMedicationYes"
              type="radio"
              name="transplantMedication"
              value="Yes"
            />
            <label htmlFor="transplantMedicationYes">Yes</label>
            <input
              id="transplantMedicationNo"
              type="radio"
              name="transplantMedication"
              value="No"
            />
            <label htmlFor="transplantMedicationNo">No</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="mentalHealthMedication" className="mb-2">
            Are you on mental health medications?
            <span className="required">*</span>
          </label>
          <div className="d-flex align-items-center">
            <input
              id="mentalHealthMedicationYes"
              type="radio"
              name="mentalHealthMedication"
              value="Yes"
            />
            <label htmlFor="mentalHealthMedicationYes">Yes</label>
            <input
              id="mentalHealthMedicationNo"
              type="radio"
              name="mentalHealthMedication"
              value="No"
            />
            <label htmlFor="mentalHealthMedicationNo">No</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="mentalHealthSymptoms" className="mb-2">
            If so, do you have symptoms if you miss one or more doses?
          </label>
          <div className="d-flex align-items-center">
            <input
              id="mentalHealthSymptomsYes"
              type="radio"
              name="mentalHealthSymptoms"
              value="Yes"
            />
            <label htmlFor="mentalHealthSymptomsYes">Yes</label>
            <input
              id="mentalHealthSymptomsNo"
              type="radio"
              name="mentalHealthSymptoms"
              value="No"
            />
            <label htmlFor="mentalHealthSymptomsNo">No</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="bloodPressureMedication" className="mb-2">
            Are you on blood pressure medicine?
            <span className="required">*</span>
          </label>
          <div className="d-flex align-items-center">
            <input
              id="bloodPressureMedicationYes"
              type="radio"
              name="bloodPressureMedication"
              value="Yes"
            />
            <label htmlFor="bloodPressureMedicationYes">Yes</label>
            <input
              id="bloodPressureMedicationNo"
              type="radio"
              name="bloodPressureMedication"
              value="No"
            />
            <label htmlFor="bloodPressureMedicationNo">No</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="bloodPressureSymptoms" className="mb-2">
            Does your blood pressure increase if you miss one or more doses of
            your medication?
          </label>
          <div className="d-flex align-items-center">
            <input
              id="bloodPressureSymptomsYes"
              type="radio"
              name="bloodPressureSymptoms"
              value="Yes"
            />
            <label htmlFor="bloodPressureSymptomsYes">Yes</label>
            <input
              id="bloodPressureSymptomsNo"
              type="radio"
              name="bloodPressureSymptoms"
              value="No"
            />
            <label htmlFor="bloodPressureSymptomsNo">No</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="bloodThinningMedication" className="mb-2">
            Are you on blood-thinning medications such as Coumadin?
            <span className="required">*</span>
          </label>
          <div className="d-flex align-items-center">
            <input
              id="bloodThinningMedicationYes"
              type="radio"
              name="bloodThinningMedication"
              value="Yes"
            />
            <label htmlFor="bloodThinningMedicationYes">Yes</label>
            <input
              id="bloodThinningMedicationNo"
              type="radio"
              name="bloodThinningMedication"
              value="No"
            />
            <label htmlFor="bloodThinningMedicationNo">No</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="heartbeatMedication" className="mb-2">
            Do you take medication for an irregular heartbeat?
            <span className="required">*</span>
          </label>
          <div className="d-flex align-items-center">
            <input
              id="heartbeatMedicationYes"
              type="radio"
              name="heartbeatMedication"
              value="Yes"
            />
            <label htmlFor="heartbeatMedicationYes">Yes</label>
            <input
              id="heartbeatMedicationNo"
              type="radio"
              name="heartbeatMedication"
              value="No"
            />
            <label htmlFor="heartbeatMedicationNo">No</label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="chemotherapy" className="mb-2">
            Are you currently taking a course of chemotherapy treatment?
            <span className="required">*</span>
          </label>
          <div className="d-flex align-items-center">
            <input
              id="chemotherapyYes"
              type="radio"
              name="chemotherapy"
              value="Yes"
            />
            <label htmlFor="chemotherapyYes">Yes</label>
            <input
              id="chemotherapyNo"
              type="radio"
              name="chemotherapy"
              value="No"
            />
            <label htmlFor="chemotherapyNo">No</label>
          </div>
        </div>
      </fieldset><br/>

      <p>I certify that everything on this form is true and correct to the best of my knowledge.</p>

      <fieldset>
        <div>
          <label htmlFor="signature">
            Signature<span className="required">*</span>
          </label>
          <input
            id="signature"
            type="text"
            name="signature"
            pattern="[a-zA-Z][a-zA-Z ]+"
            required
          />
        </div>
        <div>
          <label htmlFor="date">
            Date<span className="required">*</span>
          </label>
          <input id="date" type="date" name="date" required />
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
};

export default FootDetoxIntakeForm;
