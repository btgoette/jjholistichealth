// React Components
import ReCAPTCHA from 'react-google-recaptcha'


const EndocrineSteamIntakeForm = () => {

    function onSubmit(token) {
        document.getElementById("endocrineSteamIntakeForm").submit();
    }

    return (
        <form id="endocrineSteamIntakeForm" method="POST" action="https://usebasin.com/f/75e3c0e9d3b0">
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

            <label className="mb-2">Please select all that apply:<span className="required">*</span></label>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="onPeriod" type="checkbox" name="onPeriod" value="Currently on period" />
                    <label htmlFor="onPeriod">Currently on your period</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="freshSpotting" type="checkbox" name="freshSpotting" value="Has fresh spotting" />
                    <label htmlFor="freshSpotting">Having fresh spotting</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="spontaneousBleeding" type="checkbox" name="spontaneousBleeding" value="Has had spontaneious bleeding" />
                    <label htmlFor="spontaneousBleeding">Have had spontaneous bleeding in past three months</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="twoPeriods" type="checkbox" name="twoPeriods" value="Has had two periods per month" />
                    <label htmlFor="twoPeriods">Have had two periods per month within the past three months</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="pregnant" type="checkbox" name="pregnant" value="Pregnant" />
                    <label htmlFor="pregnant">Pregnant</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="pastOvulation" type="checkbox" name="pastOvulation" value="Past ovulation" />
                    <label htmlFor="pastOvulation">Past ovulation (if trying to conceive)</label>
                </div>
            </fieldset>

            <p>*<em>
                The selected conditions above suggest that you are contraindicated for steaming. You are not safe to steam and could result in negative side effects such as the onset of bleeding or miscarriage. Steaming should not be performed at this time.
            </em></p>

            <label className="mb-2">Please select all thay apply:<span className="required">*</span></label>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="infection" type="checkbox" name="infection" value="Infection characterized by a burning itch" />
                    <label htmlFor="infection">Infection characterized by a burning itch</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="tubalCoagulation" type="checkbox" name="tubalCoagulation" value=" Tubal coagulation" />
                    <label htmlFor="tubalCoagulation">Tubal coagulation (burning of the fallopian tubes through laparoscopic surgery through the belly button)
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="birthControlImplant" type="checkbox" name="birthControlImplant" value="Birth control arm implant" />
                    <label htmlFor="birthControlImplant">Birth control arm implant (i.e. nexplanon)</label>
                </div>
            </fieldset>

            <p>*<em>
                If you are using the above birth control methods vaginal steaming could cause a birth control failure. It is not recommended unless you have a backup form of birth control or possible pregnancy is not a concern.
                </em></p>

            <p>*<em>
                If you have a burning itch the warmth from the steam could be uncomfortable since there is already so much heat in that area. It is best to seek treatment from an acupuncturist to get the burning sensation to go away prior to doing a vaginal steam session.
            </em></p>

            <p className="h4">Sensitivities</p>
            <p>
                Steam may cause a physiological response in some women. In this case, the practitioner will adjust the steam session and herbs that perfectly suit you.
            </p>

            <label className="mb-2">Please select all thay apply:<span className="required">*</span></label>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="firstTimeSteaming" type="checkbox" name="firstTimeSteaming" value="First time doing a steam session" />
                    <label htmlFor="firstTimeSteaming">First time doing a steam session</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="shortMenstrualCycles" type="checkbox" name="shortMenstrualCycles" value="Menstrual cycles are currently or historically ever 27 days or shorter" />
                    <label htmlFor="shortMenstrualCycles">Menstrual cycles are currently or historically ever 27 days or shorter</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="hasHotFlashes" type="checkbox" name="hasHotFlashes" value="Hot flashes over the past month" />
                    <label htmlFor="hasHotFlashes">Hot flashes over the past month</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="hasNightSweats" type="checkbox" name="hasNightSweats" value="Nightsweats over the past month" />
                    <label htmlFor="hasNightSweats">Nightsweats over the past month</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="haveAnIUD" type="checkbox" name="haveAnIUD" value="Have an IUD" />
                    <label htmlFor="haveAnIUD">Have an IUD</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="yeastInfections" type="checkbox" name="yeastInfections" value="Currently or historically prone to yeast infections" />
                    <label htmlFor="yeastInfections">Currently or historically prone to yeast infections</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="bacterialVaginosis" type="checkbox" name="bacterialVaginosis" value="Currently or historically prone to bacterial vaginosis" />
                    <label htmlFor="bacterialVaginosis">Currently or historically prone to bacterial vaginosis</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="herpes" type="checkbox" name="herpes" value="Herpes" />
                    <label htmlFor="herpes">Herpes</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="nuvaRing" type="checkbox" name="nuvaRing" value="Have the Nuva ring in." />
                    <label htmlFor="nuvaRing">Have the Nuva ring in. (If so, please remove it before the steam session)</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="age13" type="checkbox" name="age13" value="Age 13 or younger" />
                    <label htmlFor="age13">Age 13 or younger</label>
                </div>
            </fieldset>

            <p>*<em>
                The answers above indicate sensitivity in which case a mild setup, should be performed 10-15 minutes. Under no circumstances should clients who have sensitivity use an advanced setup which is 25-30 minute steam sessions.
            </em></p>

            <p className="h4">Herb Selection</p>
            <p>
            It is best to select herbs suitable to your constitution. The practitioner will use the information from this intake form to select a suitable vaginal steam formula for you.
            </p>

            <label className="mb-2">Indicators for Cleansing Herbs<span className="required">*</span></label>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="longMenstrualCycles" type="checkbox" name="longMenstrualCycles" value="Menstrual cycle 28 days or longer" />
                    <label htmlFor="longMenstrualCycles">Menstrual cycles 28 days or longer</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="absentMenstrualCycles" type="checkbox" name="absentMenstrualCycles" value="Menstrual cycle absent or missing for an unknown reason or because birth control" />
                    <label htmlFor="absentMenstrualCycles">Menstrual cycle absent or missing for an unknown reason or because birth control</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="onBirthControl" type="checkbox" name="onBirthControl" value="Currently taking birth control pills" />
                    <label htmlFor="onBirthControl">Currently taking birth control pills</label>
                </div>
            </fieldset>

            <label className="mb-2">Indicators for Disinfecting Herbs<span className="required">*</span></label>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="thickVaginalDischarge" type="checkbox" name="thickVaginalDischarge" value="Thick vaginal discharge" />
                    <label htmlFor="thickVaginalDischarge">Thick vaginal discharge</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="vaginalSmell" type="checkbox" name="vaginalSmell" value="Vaginal smell" />
                    <label htmlFor="vaginalSmell">Vaginal smell</label>
                </div>
            </fieldset>

            <label className="mb-2">Indicators for Cooling Herbs<span className="required">*</span></label>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="vaginalDryness" type="checkbox" name="vaginalDryness" value="Vaginal dryness" />
                    <label htmlFor="vaginalDryness">Vaginal dryness</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="hotFlashes" type="checkbox" name="hotFlashes" value="Hot flashes" />
                    <label htmlFor="hotFlashes">Hot flashes</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="nightSweats" type="checkbox" name="nightSweats" value="Night sweats" />
                    <label htmlFor="nightSweats">Night sweats</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="aversionToHeat" type="checkbox" name="aversionToHeat" value="Aversion to heat" />
                    <label htmlFor="aversionToHeat">Aversion to heat</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="radiateHeat" type="checkbox" name="radiateHeat" value="Radiate heat" />
                    <label htmlFor="radiateHeat">Radiate heat</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="d-flex align-items-start">
                    <input id="infectionWithoutDischarge" type="checkbox" name="infectionWithoutDischarge" value="Infection without discharge" />
                    <label htmlFor="infectionWithoutDischarge">Infection without discharge</label>
                </div>
            </fieldset>
        
            <fieldset>
                <div>
                    <label htmlFor="plantOrFoodAllergies">Do you have any plant or food allergies?</label>
                    <textarea id="plantOrFoodAllergies" name="plantOrFoodAllergies" />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label htmlFor="anyQuestions">Do you have any questions or hesitations prior to your steam session?</label>
                    <textarea id="anyQuestions" name="anyQuestions" />
                </div>
            </fieldset>

            <div className="g-recaptcha" data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"></div>

            <fieldset>
                <input type="submit" value="Submit" />
            </fieldset>
        </form >
    );
}

export default EndocrineSteamIntakeForm;