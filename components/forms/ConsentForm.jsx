// React Components
import ReCAPTCHA from 'react-google-recaptcha'


export default function FunctionalExamForm() {

    function onSubmit(token) {
        document.getElementById("consentForm").submit();
    }

    return (
        <form id="consentForm" method="POST" action="https://usebasin.com/f/f95eb5738edf">

            <fieldset>
                <div>
                    <label htmlFor="firstName">First Name:<span className="required">*</span></label>
                    <input id="firstName" type="text" name="firstName" pattern="[a-zA-Z][a-zA-Z ]+" required />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:<span className="required">*</span></label>
                    <input id="lastName" type="text" name="lastName" pattern="[a-zA-Z][a-zA-Z ]+" required />
                </div>
            </fieldset><br/>

            <fieldset>
                <div>
                    <label htmlFor="address">Address<span className="required">*</span></label>
                    <input id="address" type="text" name="address" />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number<span className="required">*</span></label>
                    <input id="phone" type="tel" name="phone" pattern="[0-9]{10}" required />
                </div>
            </fieldset><br/>

            <fieldset>
                <div>
                    <label htmlFor="relationshipToClient">Relationship to Client<span className="required">*</span></label>
                    <input id="relationshipToClient" type="text" name="relationshipToClient" pattern="[a-zA-Z][a-zA-Z ]+" required />
                </div>
            </fieldset><br/>

            <fieldset>
                <div>
                    <label htmlFor="signature">Signature<span className="required">*</span></label>
                    <input id="signature" type="text" name="signature" pattern="[a-zA-Z][a-zA-Z ]+" required />
                </div>
                <div>
                    <label htmlFor="date">Date<span className="required">*</span></label>
                    <input id="date" type="date" name="date" required />
                </div>
            </fieldset><br />

            <div className="g-recaptcha" data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"></div>

            <fieldset>
                <input type="submit" value="Submit" />
            </fieldset>
        </form >
    );
}