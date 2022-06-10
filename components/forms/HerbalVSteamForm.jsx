// React Components
import ReCAPTCHA from 'react-google-recaptcha'


const HerbalVSteamForm = () => {

    function onSubmit(token) {
        document.getElementById("HerbalVSteamForm").submit();
    }

    return (
        <form id="HerbalVSteamForm" method="POST" action="https://usebasin.com/f/1c8c1c1474bf">
            <fieldset>
                <div>
                    <label htmlFor="name">Name<span className="required">*</span></label>
                    <input id="name" type="text" name="clientName" pattern="[a-zA-Z][a-zA-Z ]+" required />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="email">Email<span className="required">*</span></label>
                    <input id="email" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                </div>
                <div>
                    <label htmlFor="phone">Contact #<span className="required">*</span></label>
                    <input id="phone" type="tel" name="phone" pattern="[0-9]{10}" title="Invalid input" required />
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
                    <label htmlFor="date">Today&apos; Date<span className="required">*</span></label>
                    <input id="date" type="date" name="date" required />
                </div>
            </fieldset>

            <p className="h4">Contraindications</p>
            <p>
                There are times when it is not beneficial for a woman to steam. First, let&apos;s make sure you don&apos;t have any contraindications.
            </p>
          
            <label className="mb-2">Please select all that apply:</label>
            <fieldset>
                <div>
                    <label htmlFor="onPeriod" className="mb-2">Are you currently on your period?<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="onPeriodYes" type="radio" name="onPeriod" value="Yes" required />
                        <label htmlFor="onPeriodYes">Yes</label>
                        <input id="onPeriodNo" type="radio" name="onPeriod" value="No" />
                        <label htmlFor="onPeriodNo">No</label>
                    </div>
                </div>
            </fieldset>

            <p>*<em>If you are on your cycle on the day of your appointment, you will need to wait until after your cycle has discontinued to be serviced. </em></p>

            <div className="g-recaptcha" data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"></div>

            <fieldset>
                <div>
                    <label htmlFor="freshSpotting" className="mb-2"> Do you currently have fresh spotting?<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="freshSpottingYes" type="radio" name="freshSpotting" value="Yes" required />
                        <label htmlFor="freshSpottingYes">Yes</label>
                        <input id="freshSpottingNo" type="radio" name="freshSpotting" value="No" />
                        <label htmlFor="freshSpottingNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="spontaneousBleeding" className="mb-2">Have you had spontaneous bleeding in the last 3 months?<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="spontaneousBleedingYes" type="radio" name="spontaneousBleeding" value="Yes" required />
                        <label htmlFor="spontaneousBleedingYes">Yes</label>
                        <input id="spontaneousBleedingNo" type="radio" name="spontaneousBleeding" value="No" />
                        <label htmlFor="spontaneousBleedingNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="twoPeriods" className="mb-2">Have you had 2 periods a month for the past 3 months?<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="twoPeriodsYes" type="radio" name="twoPeriods" value="Yes" required />
                        <label htmlFor="twoPeriodsYes">Yes</label>
                        <input id="twoPeriodsNo" type="radio" name="twoPeriods" value="No" />
                        <label htmlFor="twoPeriodsNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="pregnant" className="mb-2">Are you pregnant?<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="pregnantYes" type="radio" name="pregnant" value="Yes" required />
                        <label htmlFor="pregnantYes">Yes</label>
                        <input id="pregnantNo" type="radio" name="pregnant" value="No" />
                        <label htmlFor="pregnantNo">No</label>
                    </div>
                </div>
            </fieldset>

            <p>*<em>If you are pregnant we cannot steam you. Wait 2 weeks after delivery for post-delivery herbal steam.</em></p>

            <fieldset>
                <div>
                    <label htmlFor="pastOvulation" className="mb-2">If trying to conceive, are you past ovulation?<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="pastOvulationYes" type="radio" name="pastOvulation" value="Yes" required />
                        <label htmlFor="pastOvulationYes">Yes</label>
                        <input id="pastOvulationNo" type="radio" name="pastOvulation" value="No" />
                        <label htmlFor="pastOvulationNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="openSores" className="mb-2">Do you have open sores?<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="openSoresYes" type="radio" name="openSores" value="Yes" required />
                        <label htmlFor="openSoresYes">Yes</label>
                        <input id="openSoresNo" type="radio" name="openSores" value="No" />
                        <label htmlFor="openSoresNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="onDrugs" className="mb-2">Under the influence of (any) drugs?<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="onDrugsYes" type="radio" name="onDrugs" value="Yes" required />
                        <label htmlFor="onDrugsYes">Yes</label>
                        <input id="onDrugsNo" type="radio" name="onDrugs" value="No" />
                        <label htmlFor="onDrugsNo">No</label>
                    </div>
                </div>
            </fieldset>

            <p>*<em>Do not use any medicine 30 mins. before the appointment and wait 30 mins. post-appointment before taking any. </em></p>

            <fieldset>
                <div>
                    <label htmlFor="herbAllergies" className="mb-2">Any allergies to herbs?<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="herbAllergiesYes" type="radio" name="herbAllergies" value="Yes" required />
                        <label htmlFor="herbAllergiesYes">Yes</label>
                        <input id="herbAllergiesNo" type="radio" name="herbAllergies" value="No" />
                        <label htmlFor="herbAllergiesNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="yeastInfection" className="mb-2">Yeast Infection<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="yeastInfectionYes" type="radio" name="yeastInfection" value="Yes" required />
                        <label htmlFor="yeastInfectionYes">Yes</label>
                        <input id="yeastInfectionNo" type="radio" name="yeastInfectionm" value="No" />
                        <label htmlFor="yeastInfectionNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="bacterialVaginosis" className="mb-2">Bacterial Vaginosis<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="bvYes" type="radio" name="bacterialVaginosis" value="Yes" required />
                        <label htmlFor="bvYes">Yes</label>
                        <input id="bvNo" type="radio" name="bacterialVaginosis" value="No" />
                        <label htmlFor="bvNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="pcos" className="mb-2">PCOS<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="pcosYes" type="radio" name="pcos" value="Yes" required />
                        <label htmlFor="pcosYes">Yes</label>
                        <input id="pcosNo" type="radio" name="pcos" value="No" />
                        <label htmlFor="pcosNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="menopause" className="mb-2">Menopause<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="menopauseYes" type="radio" name="menopause" value="Yes" required />
                        <label htmlFor="menopauseYes">Yes</label>
                        <input id="menopauseNo" type="radio" name="menopause" value="No" />
                        <label htmlFor="menopauseNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="menopauseSymptoms" className="mb-2">Menopause symptoms<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="menopauseSymptomsYes" type="radio" name="menopauseSymptoms" value="Yes" required />
                        <label htmlFor="menopauseSymptomsYes">Yes</label>
                        <input id="menopauseSymptomsNo" type="radio" name="menopauseSymptoms" value="No" />
                        <label htmlFor="menopauseSymptomsNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="herpes" className="mb-2">Herpes<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="herpesYes" type="radio" name="herpes" value="Yes" required />
                        <label htmlFor="herpesYes">Yes</label>
                        <input id="herpesNo" type="radio" name="herpes" value="No" />
                        <label htmlFor="herpesNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="irregularPeriods" className="mb-2">Irregular periods<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="irregularPeriodsYes" type="radio" name="irregularPeriods" value="Yes" required />
                        <label htmlFor="irregularPeriodsYes">Yes</label>
                        <input id="irregularPeriodsNo" type="radio" name="irregularPeriods" value="No" />
                        <label htmlFor="irregularPeriodsNo">No</label>
                    </div>
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="vaginalDryness" className="mb-2">Vaginal dryness<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="vaginalDrynessYes" type="radio" name="vaginalDryness" value="Yes" required />
                        <label htmlFor="vaginalDrynessYes">Yes</label>
                        <input id="vaginalDrynessNo" type="radio" name="vaginalDryness" value="No" />
                        <label htmlFor="vaginalDrynessNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="birthControl" className="mb-2">Birth Control<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="birthControlYes" type="radio" name="birthControl" value="Yes" required />
                        <label htmlFor="birthControlYes">Yes</label>
                        <input id="birthControlNo" type="radio" name="birthControl" value="No" />
                        <label htmlFor="birthControlNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="birthControlType">If yes, please specify</label>
                    <input id="birthControlType" type="text" name="birthControlType" />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="cysts" className="mb-2">Cysts<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="cystsYes" type="radio" name="cysts" value="Yes" required />
                        <label htmlFor="cystsYes">Yes</label>
                        <input id="cystsNo" type="radio" name="cysts" value="No" />
                        <label htmlFor="cystsNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="fibroids" className="mb-2">Fibroids<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="fibroidsYes" type="radio" name="fibroids" value="Yes" required />
                        <label htmlFor="fibroidsYes">Yes</label>
                        <input id="fibroidsNo" type="radio" name="fibroids" value="No" />
                        <label htmlFor="fibroidsNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="endometriosis" className="mb-2">Endometriosis<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="endometriosisYes" type="radio" name="endometriosis" value="Yes" required />
                        <label htmlFor="endometriosisYes">Yes</label>
                        <input id="endometriosisNo" type="radio" name="endometriosis" value="No" />
                        <label htmlFor="endometriosisNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="heavyPMS" className="mb-2">Heavy PMS<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="heavyPMSYes" type="radio" name="heavyPMS" value="Yes" required />
                        <label htmlFor="heavyPMSYes">Yes</label>
                        <input id="heavyPMSNo" type="radio" name="heavyPMS" value="No" />
                        <label htmlFor="heavyPMSNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="infertility" className="mb-2">Infertility<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="infertilityYes" type="radio" name="infertility" value="Yes" required />
                        <label htmlFor="infertilityYes">Yes</label>
                        <input id="infertilityNo" type="radio" name="infertility" value="No" />
                        <label htmlFor="infertilityNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="wombTrauma" className="mb-2">Womb Trauma<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="wombTraumaYes" type="radio" name="wombTrauma" value="Yes" required />
                        <label htmlFor="wombTraumaYes">Yes</label>
                        <input id="wombTraumaNo" type="radio" name="wombTrauma" value="No" />
                        <label htmlFor="wombTraumaNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="vaginalOdor" className="mb-2">Vaginal Odor<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="vaginalOdorYes" type="radio" name="vaginalOdor" value="Yes" required />
                        <label htmlFor="vaginalOdorYes">Yes</label>
                        <input id="vaginalOdorNo" type="radio" name="vaginalOdor" value="No" />
                        <label htmlFor="vaginalOdorNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="bladderLeakage" className="mb-2">Bladder Leakage<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="bladderLeakageYes" type="radio" name="bladderLeakage" value="Yes" required />
                        <label htmlFor="bladderLeakageYes">Yes</label>
                        <input id="bladderLeakageNo" type="radio" name="bladderLeakage" value="No" />
                        <label htmlFor="bladderLeakageNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="hemorrhoids" className="mb-2">Hemorrhoids<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="hemorrhoidsYes" type="radio" name="hemorrhoids" value="Yes" required />
                        <label htmlFor="hemorrhoidsYes">Yes</label>
                        <input id="hemorrhoidsNo" type="radio" name="hemorrhoids" value="No" />
                        <label htmlFor="hemorrhoidsNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="enlargedProstate" className="mb-2">Enlarged Prostate<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="enlargedProstateYes" type="radio" name="enlargedProstate" value="Yes" required />
                        <label htmlFor="enlargedProstateYes">Yes</label>
                        <input id="enlargedProstateNo" type="radio" name="enlargedProstate" value="No" />
                        <label htmlFor="enlargedProstateNo">No</label>
                    </div>
                </div>
            </fieldset>
            
            <fieldset>
                <div>
                    <label htmlFor="troubleWithUrination" className="mb-2">Trouble with Urination<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="troubleWithUrinationYes" type="radio" name="troubleWithUrination" value="Yes" required />
                        <label htmlFor="troubleWithUrinationYes">Yes</label>
                        <input id="troubleWithUrinationNo" type="radio" name="troubleWithUrination" value="No" />
                        <label htmlFor="troubleWithUrinationNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="yoniPiercing" className="mb-2">Yoni Piercings<span className="required">*</span></label>
                    <div className="d-flex align-items-start">
                        <input id="yoniPiercingYes" type="radio" name="yoniPiercing" value="Yes" required />
                        <label htmlFor="yoniPiercingYes">Yes</label>
                        <input id="yoniPiercingNo" type="radio" name="yoniPiercing" value="No" />
                        <label htmlFor="yoniPiercingNo">No</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <input type="submit" value="Submit" />
            </fieldset>
        </form >
    );
}

export default HerbalVSteamForm;