// React Components
import ReCAPTCHA from 'react-google-recaptcha'


const FollowUpForm = () => {

    function onSubmit(token) {
        document.getElementById("followUpForm").submit();
    }

    return (
        <form id="followUpForm" method="POST" action="https://usebasin.com/f/4c333296be79">
            <fieldset>
                <div>
                    <label htmlFor="name">Name<span className="required">*</span></label>
                    <input id="name" type="text" name="clientName" pattern="[a-zA-Z][a-zA-Z ]+" required />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="phone">Contact #<span className="required">*</span></label>
                    <input id="phone" type="tel" name="phone" pattern="[0-9]{10}" required />
                </div>
                <div>
                    <label htmlFor="date">Today&apos;s Date<span className="required">*</span></label>
                    <input id="date" type="date" name="date" required />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="address">Address<span className="required">*</span></label>
                    <input id="address" type="text" name="address" />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="goalsConcerns">Do you feel that your goals and concerns are still the same? Would you change or add anything?<span className="required">*</span></label>
                    <textarea id="goalsConcerns" name="goalsConcerns" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="improvements">What improvements have you noticed since we last met? Are you finding any of the changes you’ve made to come more easily?<span className="required">*</span></label>
                    <textarea id="improvements" name="improvements" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="dietaryRecommendations">How are you doing with dietary recommendations? Are there any challenges? Do you feel you need any specific support?<span className="required">*</span></label>
                    <textarea id="dietaryRecommendations" name="dietaryRecommendations" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="averseFoods">Have there been any foods that you felt averse to or didn’t nourish your body in the way that you’d like?<span className="required">*</span></label>
                    <textarea id="averseFoods" name="averseFoods" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="gastrointestionalBowelMovements">Are you experiencing gastrointestinal symptoms of any kind? Please describe bowel movements in terms of form and frequency.<span className="required">*</span></label>
                    <textarea id="gastrointestionalBowelMovements" name="gastrointestionalBowelMovements" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="waterIntake">How much water are you drinking per day and which recommended nutrients are you including?<span className="required">*</span></label>
                    <textarea id="waterIntake" name="waterIntake" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="supplementRecommendations">How are you doing with supplement recommendations? Are there any challenges? Do you feel you need any specific support?<span className="required">*</span></label>
                    <textarea id="supplementRecommendations" name="SupplementRecommendations" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="itemRecommendations">How did you do with the recommendation items from our last visit?<span className="required">*</span></label>
                    <textarea id="itemRecommendations" name="itemRecommendations" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="physicalPain">Are you experiencing any structural issues, pain, or other physical conditions?<span className="required">*</span></label>
                    <textarea id="physicalPain" name="physicalPain" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="restSleep">Describe how you are sleeping. Are you waking feeling rested?<span className="required">*</span></label>
                    <textarea id="restSleep" name="restSleep" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="bedtimeWaketime">What has been your bedtime/waketime?<span className="required">*</span></label>
                    <textarea id="bedtimeWaketime" name="bedtimeWaketime" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="activity">Describe the amount and type of activity you are getting per week.<span className="required">*</span></label>
                    <textarea id="activity" name="activity" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="mood">How has your mood been? Have you noticed any changes?<span className="required">*</span></label>
                    <textarea id="mood" name="mood" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="stressRelaxation">Describe how you are relaxing and/or actively working to reduce stress. Do you have any major stressors that are affecting your life currently?<span className="required">*</span></label>
                    <textarea id="stressRelaxation" name="stressRelaxation" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="additionalTherapies">Have you added any other adjunct therapies/supplements? Have there been any changes in your current supplements? Have there been any changes in your current medications (if applicable)?<span className="required">*</span></label>
                    <textarea id="additionalTherapies" name="additionalTherapies" required />
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="additionalComments">Anything else that you’d like to add?<span className="required">*</span></label>
                    <textarea id="additionalComments" name="additionalComments" required />
                </div>
            </fieldset>

            <div className="g-recaptcha" data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"></div>

            <fieldset>
                <input type="submit" value="Submit" />
            </fieldset>
        </form>
    );
}

export default FollowUpForm;