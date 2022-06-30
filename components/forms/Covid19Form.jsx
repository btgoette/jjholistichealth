// React Components
import ReCAPTCHA from 'react-google-recaptcha'


const Covid19Form = () => {

    function onSubmit(token) {
        document.getElementById("covid19Form").submit();
    }

    return (
        <form id="covid19Form" method="POST" action="https://usebasin.com/f/02f98d1527eb">

            <fieldset>
                <div>
                    <label htmlFor="name">Name<span className="required">*</span></label>
                    <input id="name" type="text" name="name" pattern="[a-zA-Z][a-zA-Z ]+" required />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="email">Email<span className="required">*</span></label>
                    <input id="email" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                </div>
                <div>
                    <label htmlFor="phone">Contact #<span className="required">*</span></label>
                    <input id="phone" type="tel" name="phone" pattern="[0-9]{10}" required />
                </div>
                <div>
                    <label htmlFor="address">Address<span className="required">*</span></label>
                    <input id="address" type="text" name="address" />
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
                <div>
                    <label htmlFor="bodyTemperature">Body Temperature<span className="required">*</span></label>
                    <input id="bodyTemperature" type="number" step="0.1" name="bodyTemperature" min="97.0" placeholder="97.0" pattern="[0-9.]" required max="104.9" />
                </div>
                <div>
                    <label htmlFor="gender" className="mb-2">Gender<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="male" type="radio" name="gender" value="Male" required />
                        <label htmlFor="male">Male</label>
                        <input id="female" type="radio" name="gender" value="Female" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="traveled" className="mb-2">Have you traveled out of the country in the last 4 weeks?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="traveledYes" type="radio" name="traveled" value="Yes" />
                        <label htmlFor="traveledYes">Yes</label>
                        <input id="traveledNo" type="radio" name="traveled" value="No" />
                        <label htmlFor="traveledNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="contact" className="mb-2">Have you had contact with a person known to have COVID-19?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="contactYes" type="radio" name="contact" value="Yes" />
                        <label htmlFor="contactYes">Yes</label>
                        <input id="contactNo" type="radio" name="contact" value="No" />
                        <label htmlFor="contactNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="fever" className="mb-2">Have you had a fever or chills?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="feverYes" type="radio" name="fever" value="Yes" />
                        <label htmlFor="feverYes">Yes</label>
                        <input id="feverNo" type="radio" name="fever" value="No" />
                        <label htmlFor="feverNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="cough" className="mb-2">Have you had a cough?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="coughYes" type="radio" name="cough" value="Yes" />
                        <label htmlFor="coughYes">Yes</label>
                        <input id="coughNo" type="radio" name="cough" value="No" />
                        <label htmlFor="coughNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="breathingDifficulty" className="mb-2">Have you had shortness of breath or difficulty breathing?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="breathingYes" type="radio" name="breathingDifficulty" value="Yes" />
                        <label htmlFor="breathingYes">Yes</label>
                        <input id="breathingNo" type="radio" name="breathingDifficulty" value="No" />
                        <label htmlFor="breathingNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="fatigue" className="mb-2">Have you had fatigue?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="fatigueYes" type="radio" name="fatigue" value="Yes" />
                        <label htmlFor="fatigueYes">Yes</label>
                        <input id="fatigueNo" type="radio" name="fatigue" value="No" />
                        <label htmlFor="fatigueNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="bodyaches" className="mb-2">Have you had muscle or body aches?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="bodyachesYes" type="radio" name="bodyaches" value="Yes" />
                        <label htmlFor="bodyachesYes">Yes</label>
                        <input id="bodyachesNo" type="radio" name="bodyaches" value="No" />
                        <label htmlFor="bodyachesNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="headaches" className="mb-2">Have you had a headache?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="headachesYes" type="radio" name="headaches" value="Yes" />
                        <label htmlFor="headachesYes">Yes</label>
                        <input id="headachesNo" type="radio" name="headaches" value="No" />
                        <label htmlFor="headachesNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="lossOfSenses" className="mb-2">Have you had a loss of taste or smell?</label>
                    <div className="d-flex align-items-center">
                        <input id="sensesYes" type="radio" name="lossOfSenses" value="Yes" /><label htmlFor="sensesYes">Yes</label>
                        <input id="sensesNo" type="radio" name="lossOfSenses" value="No" />
                        <label htmlFor="sensesNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="soreThroat" className="mb-2">Have you had a sore throat?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="throatYes" type="radio" name="soreThroat" value="Yes" />
                        <label htmlFor="throatYes">Yes</label>
                        <input id="throatNo" type="radio" name="soreThroat" value="No" />
                        <label htmlFor="throatNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="congestion" className="mb-2">Have you had congestion or a runny nose?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="congestionYes" type="radio" name="congestion" value="Yes" />
                        <label htmlFor="congestionYes">Yes</label>
                        <input id="congestionNo" type="radio" name="congestion" value="No" />
                        <label htmlFor="congestionNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="nausea" className="mb-2">Have you had nausea or vomiting?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="nauseaYes" type="radio" name="nausea" value="Yes" />
                        <label htmlFor="nauseaYes">Yes</label>
                        <input id="nauseaNo" type="radio" name="nausea" value="No" />
                        <label htmlFor="nauseaNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="diarrhea" className="mb-2">Have you had diarrhea?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="diarrheaYes" type="radio" name="diarrhea" value="Yes" /><label htmlFor="diarrheaYes">Yes</label>
                        <input id="diarrheaNo" type="radio" name="diarrhea" value="No" />
                        <label htmlFor="diarrheaNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="tested" className="mb-2">Have you been tested for COVID-19?<span className="required">*</span></label>
                    <div className="d-flex align-items-center">
                        <input id="testedYes" type="radio" name="tested" value="Yes" />
                        <label htmlFor="testedYes">Yes</label>
                        <input id="testedNo" type="radio" name="tested" value="No" />
                        <label htmlFor="testedNo">No</label>
                    </div>
                </div>
            </fieldset>

            <p className="h5">If answered &quot;Yes&quot; to the previous question</p>

            <fieldset>
                <div>
                    <label htmlFor="testDate">When were you tested for COVID-19?</label>
                    <input id="testDate" type="date" name="testDate" />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="testResult" className="mb-2">What was your COVID-19 test result?</label>
                    <div className="d-flex align-items-center">
                        <input id="testedPositive" type="radio" name="testResult" value="Positive" />
                        <label htmlFor="testedPositive">Positive</label>
                        <input id="testedNegative" type="radio" name="testResult" value="Negative" />
                        <label htmlFor="testedNegative">Negative</label>
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

export default Covid19Form;