// React Components
import ReCAPTCHA from 'react-google-recaptcha'


const FunctionalExamForm = () => {

    function onSubmit(token) {
        document.getElementById("functionalExamForm").submit();
    }

    return (
        <form id="functionalExamForm" method="POST" action="https://usebasin.com/f/1dca25891b52">
            <fieldset>
                <div>
                    <label htmlFor="name">Client Name<span className="required">*</span></label>
                    <input id="name" type="text" name="clientName" pattern="[a-zA-Z][a-zA-Z ]+" required />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="phone">Phone Number<span className="required">*</span></label>
                    <input id="phone" type="tel" name="phone" pattern="[0-9]{10}" required />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="dob">Date of Birth<span className="required">*</span></label>
                    <input id="dob" type="date" name="dob" required />
                </div>
                <div>
                    <label htmlFor="age">Age<span className="required">*</span></label>
                    <input id="age" type="number" name="age" min="1" pattern="[0-9]" required max="99" />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="address">Address<span className="required">*</span></label>
                    <input id="address" type="text" name="address" />
                </div>
            </fieldset>

            <p className="h4">For Adrenals Screening</p>

            <fieldset>
                <div>
                    <label htmlFor="bloodPressure" className="mb-2">Do you know your normal blood pressure?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="bloodPressureYes" type="radio" name="bloodPressure" value="Yes" required />
                        <label htmlFor="bloodPressureYes">Yes</label>
                        <input id="bloodPressureNo" type="radio" name="bloodPressure" value="No" />
                        <label htmlFor="bloodPressureNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="dizziness" className="mb-2">Do you ever get dizzy when standing quickly?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="dizzinessYes" type="radio" name="dizziness" value="Yes" required />
                        <label htmlFor="dizzinessYes">Yes</label>
                        <input id="dizzinessNo" type="radio" name="dizziness" value="No" />
                        <label htmlFor="dizzinessNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="headTrauma" className="mb-2">Any eye surgeries, seizures, head traumas, or injuries? Any neurological issues?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="headTraumaYes" type="radio" name="headTrauma" value="Yes" required />
                        <label htmlFor="headTraumaYes">Yes</label>
                        <input id="headTraumaNo" type="radio" name="headTrauma" value="No" />
                        <label htmlFor="headTraumaNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="coloredContacts" className="mb-2">Do you wear a COLOR contact lens?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="coloredContactsYes" type="radio" name="coloredContacts" value="Yes" required />
                        <label htmlFor="coloredContactsYes">Yes</label>
                        <input id="coloredContactsNo" type="radio" name="coloredContacts" value="No" />
                        <label htmlFor="coloredContactsNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="sunglasses" className="mb-2">Do you normally need to wear sunglasses outside?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="sunglassesYes" type="radio" name="sunglasses" value="Yes" required />
                        <label htmlFor="sunglassesYes">Yes</label>
                        <input id="sunglassesNo" type="radio" name="sunglasses" value="No" />
                        <label htmlFor="sunglassesNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="chiropracticCare" className="mb-2">Have you had any manipulative correction or chiropractic care?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="chiropracticYes" type="radio" name="chiropracticCare" value="Yes" required />
                        <label htmlFor="chiropracticYes">Yes</label>
                        <input id="chiropracticNo" type="radio" name="chiropracticCare" value="No" />
                        <label htmlFor="chiropracticNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="shortLeg" className="mb-2">Have you been told that you have a chronic short leg or any structural issues that could cause one leg to be shorter than the other?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="shortLegYes" type="radio" name="shortLeg" value="Yes" required />
                        <label htmlFor="shortLegYes">Yes</label>
                        <input id="shortLegNo" type="radio" name="shortLeg" value="No" />
                        <label htmlFor="shortLegNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="injuries" className="mb-2">Have you had any back, knee, hip, or ankle injuries?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="injuriesYes" type="radio" name="injuries" value="Yes" required />
                        <label htmlFor="injuriesYes">Yes</label>
                        <input id="injuriesNo" type="radio" name="injuries" value="No" />
                        <label htmlFor="injuriesNo">No</label>
                    </div>
                </div>
            </fieldset>

            <p className="h4">For Fatty Acid Screening</p>
            <p className="h5">Oral pH Test</p>

            <fieldset>
                <div>
                    <label htmlFor="haveYouEaten" className="mb-2">Have you had anything to eat or drink in the last 30 minutes (including gum, mint, or tobacco)?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="eatenYes" type="radio" name="haveYouEaten" value="Yes" required />
                        <label htmlFor="eatenYes">Yes</label>
                        <input id="eatenNo" type="radio" name="haveYouEaten" value="No" />
                        <label htmlFor="eatenNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="cavities" className="mb-2">Do you have any oral infections like cavities?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="cavitiesYes" type="radio" name="cavities" value="Yes" required />
                        <label htmlFor="cavitiesYes">Yes</label>
                        <input id="cavitiesNo" type="radio" name="cavities" value="No" />
                        <label htmlFor="cavitiesNo">No</label>
                    </div>
                </div>
            </fieldset>

            <p className="h5">Muscle Test</p>

            <fieldset>
                <div>
                    <label htmlFor="muscleOrJointSoreness" className="mb-2">Any surgeries, injuries, current muscle soreness, and general lack of endurance before the test a particular joint?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="sorenessYes" type="radio" name="muscleOrJointSoreness" value="Yes" required />
                        <label htmlFor="sorenessYes">Yes</label>
                        <input id="sorenessNo" type="radio" name="muscleOrJointSoreness" value="No" />
                        <label htmlFor="sorenessNo">No</label>
                    </div>
                </div>
            </fieldset>

            <p className="h4">For Mineral Balance Screening</p>

            <fieldset>
                <div>
                    <label htmlFor="circulationIssues" className="mb-2">Have you been diagnosed with phlebitis, edema, thrombosis, or any vascular or circulation issues?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="circulationYes" type="radio" name="circulationIssues" value="Yes" required />
                        <label htmlFor="circulationYes">Yes</label>
                        <input id="circulationNo" type="radio" name="circulationIssues" value="No" />
                        <label htmlFor="circulationNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="thyroidConditions" className="mb-2">Any known allergy to IODINE, SHELLFISH, or a THYROID condition such as Hypothyroidism?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="thyroidYes" type="radio" name="thyroidConditions" value="Yes" required />
                        <label htmlFor="thyroidYes">Yes</label>
                        <input id="thyroidNo" type="radio" name="thyroidConditions" value="No" />
                        <label htmlFor="thyroidNo">No</label>
                    </div>
                </div>
            </fieldset>

            <p className="h5">Iron Test</p>

            <fieldset>
                <div>
                    <label htmlFor="iron" className="mb-2">Have you been diagnosed with anemia or do you use cast iron pots and pans or take iron supplements?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="ironYes" type="radio" name="iron" value="Yes" required />
                        <label htmlFor="ironYes">Yes</label>
                        <input id="ironNo" type="radio" name="iron" value="No" />
                        <label htmlFor="ironNo">No</label>
                    </div>
                </div>
            </fieldset>

            <p className="h4">For Endocrine Screening</p>

            <fieldset>
                <div>
                    <label htmlFor="pregnant" className="mb-2">Female: Is there any chance you could be pregnant?</label>
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
                    <label htmlFor="femaleSurgeries" className="mb-2">Female: Any C-Section or other surgeries in the female reproduction area? If yes, how recent?</label>
                    <div className="d-flex align-items-center">
                        <input id="femaleSurgeriesYes" type="radio" name="femaleSurgeries" value="Yes" />
                        <label htmlFor="femaleSurgeriesYes">Yes</label>
                        <input id="femaleSurgeriesNo" type="radio" name="femaleSurgeries" value="No" />
                        <label htmlFor="femaleSurgeriesNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="breastTenderness" className="mb-2">Female: Have you ever experience breast tenderness during your cycle and are you currently menstruating?</label>
                    <div className="d-flex align-items-center">
                        <input id="breastYes" type="radio" name="breastTenderness" value="Yes" />
                        <label htmlFor="breastYes">Yes</label>
                        <input id="breastNo" type="radio" name="breastTenderness" value="No" />
                        <label htmlFor="breastNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="permissionToTouch" className="mb-2">Because our practitioner will be palpating in this lower region does she have permission to touch?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="permissionYes" type="radio" name="permissionToTouch" value="Yes" />
                        <label htmlFor="permissionYes">Yes</label>
                        <input id="permissionNo" type="radio" name="permissionToTouch" value="No" />
                        <label htmlFor="permissionNo">No</label>
                    </div>
                </div>
            </fieldset>

            <p className="h4">For Immune &amp; Allergy</p>

            <fieldset>
                <div>
                    <label htmlFor="backPain" className="mb-2">Any injuries or pain in the lower back?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="backPainYes" type="radio" name="backPain" value="Yes" required />
                        <label htmlFor="backPainYes">Yes</label>
                        <input id="backPainNo" type="radio" name="backPain" value="No" />
                        <label htmlFor="backPainNo">No</label>
                    </div>
                </div>
            </fieldset>

            <div className="g-recaptcha" data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"></div>

            <fieldset>
                <input type="submit" value="Submit" />
            </fieldset>
        </form >
    );
}

export default FunctionalExamForm;