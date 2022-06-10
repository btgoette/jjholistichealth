// React Components
import ReCAPTCHA from 'react-google-recaptcha'


const PediatricAssessment = () => {

  function onSubmit(token) {
    document.getElementById("pediatricAssessment").submit();
  }

  return (
    <form id="pediatricAssessment" method="POST" action="https://usebasin.com/f/5eeeb6469f20">
      <fieldset>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" pattern="[a-zA-Z][a-zA-Z ]+" required />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input id="dob" type="date" name="dob" required />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" name="age" min="1" pattern="[0-9]" required max="99" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="parent">Parent/Guardian:</label>
          <input id="parent" type="text" name="parent" pattern="[a-zA-Z][a-zA-Z ]+" required />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input id="date" type="date" name="date" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="address">Address:</label>
          <input id="address" type="text" name="address" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
        </div>
        <div>
          <label htmlFor="phone">Contact #</label>
          <input id="phone" type="tel" name="phone" pattern="[0-9]{10}" required />
        </div>
      </fieldset>

      <p className="h4">General Information &amp; Goals</p>

      <fieldset>
        <div>
          <label htmlFor="healthconcerns">What are your top 3-5 health concerns?</label>
          <textarea id="healthconcerns" name="healthconcerns" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="whatWouldYouLikeToGainFromWorkingTogether">What would you like to gain from working together?</label>
          <textarea id="whatWouldYouLikeToGainFromWorkingTogether" name="whatWouldYouLikeToGainFromWorkingTogether" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="personalHealthGoals">Personal Health Goals:</label>
          <textarea id="personalHealthGoals" name="personalHealthGoals" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="hobbies">Hobbies/Activities:</label>
          <textarea id="hobbies" name="hobbies" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="whomDoesTheChildLiveWith">Whom does the child live with?</label>
          <textarea id="whomDoesTheChildLiveWith" name="whomDoesTheChildLiveWith" required />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="grade">Grade/Level:</label>
          <input id="grade" type="text" name="grade" required />
        </div>
      </fieldset>


      <label htmlFor="childcare" className="mb-2">Childcare:</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="homeByFamily" type="checkbox" name="childcare1" value="Home by family" />
          <label htmlFor="homeByFamily">Home by family</label>
        </div>
        <div className="d-flex align-items-start">
          <input id="homecareProvider" type="checkbox" name="childcare2" value="Homecare provider" />
          <label htmlFor="homecareProvider">Homecare Provider</label>
        </div>
        <div className="d-flex align-items-start">
          <input id="daycareCenter" type="checkbox" name="childcare3" value="Daycare center" />
          <label htmlFor="daycareCenter">Daycare Center</label>
        </div>
        <div className="d-flex align-items-start">
          <input id="preschool" type="checkbox" name="childcare4" value="Preschool/head start" />
          <label htmlFor="preschool">Preschool/Head Start</label>
        </div>
      </fieldset>

      <p className="h4">Sleep &amp; Diet</p>

      <label htmlFor="goodSleep" className="mb-2">Does your child sleep well?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="goodSleepYes" type="radio" name="goodSleep" value="Yes" required />
          <label htmlFor="goodSleepYes">Yes</label>
          <input id="goodSleepNo" type="radio" name="goodSleep" value="No" />
          <label htmlFor="goodSleepNo">No</label>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="sleepReason">Reason if answered No:</label>
          <textarea id="sleepReason" name="sleepReason" />
        </div>
      </fieldset>

      <label htmlFor="childSleepIn" className="mb-2">Does your child sleep in:</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="crib" type="radio" name="childSleepIn" value="In crib/bassinet" />
          <label htmlFor="crib">crib/bassinet</label>
          <input id="withParents" type="radio" name="childSleepIn" value="With parent(s)" />
          <label htmlFor="withParents">With parents</label>
          <input id="inOwnBed" type="radio" name="childSleepIn" value="In own bed" />
          <label htmlFor="inOwnBed">In own bed</label>
        </div>
      </fieldset>

      <label htmlFor="childSleepPosition" className="mb-2">Child&apos;s sleep position:</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="back" type="radio" name="childSleepPosition" value="Back" />
          <label htmlFor="back">Back</label>
          <input id="side" type="radio" name="childSleepPosition" value="Side" />
          <label htmlFor="side">Side</label>
          <input id="abdomen" type="radio" name="childSleepPosition" value="Abdomen" />
          <label htmlFor="abdomen">Abdomen</label>
        </div>
      </fieldset>

      <label htmlFor="childWakeUpAtNight" className="mb-2">Do your child wake up at night?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="childWakeUpAtNight" type="radio" name="childWakeUpAtNight" value="Yes" required />
          <label htmlFor="childWakeUpAtNightYes">Yes</label>
          <input id="childWakeUpAtNightNo" type="radio" name="childWakeUpAtNight" value="No" />
          <label htmlFor="childWakeUpAtNightNo">No</label>
        </div>
      </fieldset>
      
      <fieldset>
        <div>
          <label htmlFor="childWakeUpAtNightTime">If yes, what time?</label>
          <input id="childWakeUpAtNightTime" type="time" name="childWakeUpAtNighttime" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="bedtime">What time does your child usually go to bed?</label>
          <input id="bedtime" type="time" name="bedtime" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="waketime">What time does your child usually wake up?</label>
          <input id="waketime" type="time" name="waketime" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="wakeFeeling">How does your child feel when they wake up?</label>
          <textarea id="wakeFeeling" name="wakeFeeling" />
        </div>
      </fieldset>

      <label htmlFor="breastfeed" className="mb-2">Does your child breastfeed?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="breastfeedYes" type="radio" name="breastfeed" value="Yes" required />
          <label htmlFor="breastfeedYes">Yes</label>
          <input id="breastfeedNo" type="radio" name="breastfeed" value="No" />
          <label htmlFor="breastfeedNo">No</label>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="breastfeedFrequency">How often does your child breastfeed?</label>
          <input id="breastfeedFrequency" type="text" name="breastfeedFrequency" />
        </div>
        <div>
          <label htmlFor="breastfeedOz">How many oz per day?</label>
          <input id="breastfeedOz" type="number" name="breastfeedOz" />
        </div>
      </fieldset>

      <label htmlFor="formula" className="mb-2">Does your child drink formula?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="formulaYes" type="radio" name="formula" value="Yes" required />
          <label htmlFor="formulaYes">Yes</label>
          <input id="formulaNo" type="radio" name="formula" value="No" />
          <label htmlFor="formulaNo">No</label>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="formulaKind">What kind of formula does your child drink?</label>
          <input id="formulaKind" type="text" name="formulaKind" />
        </div>
        <div>
          <label htmlFor="formulaOz">How many oz per day?</label>
          <input id="formulaOz" type="number" name="formulaOz" />
        </div>
      </fieldset>

      <label htmlFor="bottle" className="mb-2">Does your child use a bottle and/or sippy cup?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="bottleYes" type="radio" name="bottle" value="Yes" required />
          <label htmlFor="bottleYes">Yes</label>
          <input id="bottleNo" type="radio" name="bottle" value="No" />
          <label htmlFor="bottleNo">No</label>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="water">How much pure water does your child drink per day (fl oz)?</label>
          <input id="water" type="number" name="water" />
        </div>
      </fieldset>

      <label htmlFor="caffeine" className="mb-2">Do your child drink caffeinated bevereages (e.g. coffee, black tea, soda, etc.)?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="caffeineYes" type="radio" name="caffeine" value="Yes" required />
          <label htmlFor="caffeineYes">Yes</label>
          <input id="caffeineNo" type="radio" name="caffeine" value="No" />
          <label htmlFor="caffeineNo">No</label>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="eatingHabits">What are your child&apos;s eating habits like? (list typical types of food)</label>
          <textarea id="eatingHabits" name="eatingHabits" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="snacks">What kind of snacks does your child eat?</label>
          <textarea id="snacks" name="snacks" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="snacksFrequency">How often does your child eat these snacks?</label>
          <input id="snacksFrequency" type="text" name="snacksFrequency" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="homeCookedMealsPercentage">What percentage of your child&apos;s food is home-cooked?</label>
          <input id="homeCookedMealsPercentage" type="number" min="0" max="100" name="homeCookedMealsPercentage" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="eatOutDays">How many days per week does your child eat out?</label>
          <input id="eatOutDays" type="number" min="0" max="7" name="eatOutDays" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="cookware">What kind of cookware do you usually use (e.g. cast iron, Teflon, aluminum)?</label>
          <textarea id="cookware" name="cookware" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="cookingFats">What kind of fats do you usually cook with (butter, olive oil, canola, etc.)?</label>
          <textarea id="cookingFats" name="cookingFats" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="unhealthyFood">In your opinion, what do you think are the three least healthy foods your child eats each week and why?</label>
          <textarea id="unhealthyFood" name="unhealthyFood" />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="healthyFood">Conversely, what do you think are the three healthiest foods your child eats each week and why?</label>
          <textarea id="healthyFood" name="healthyFood" />
        </div>
      </fieldset>

      <label htmlFor="tiredAfterMeals" className="mb-2">Does your child often feel tired after meals?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="tiredYes" type="radio" name="tiredAfterMeals" value="Yes" required />
          <label htmlFor="tiredYes">Yes</label>
          <input id="tiredNo" type="radio" name="tiredAfterMeals" value="No" />
          <label htmlFor="tiredNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="bloatedAfterMeals" className="mb-2">Does your child often feel bloated after meals?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="bloatedYes" type="radio" name="bloatedAfterMeals" value="Yes" required />
          <label htmlFor="bloatedYes">Yes</label>
          <input id="bloatedNo" type="radio" name="bloatedAfterMeals" value="No" />
          <label htmlFor="bloatedNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="gassyAfterMeals" className="mb-2">Does your child often feel gassy after meals?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="gassyYes" type="radio" name="gassyAfterMeals" value="Yes" required />
          <label htmlFor="gassyYes">Yes</label>
          <input id="gassyNo" type="radio" name="gassyAfterMeals" value="No" />
          <label htmlFor="gassyNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="constipation" className="mb-2">Does your child experience constipation often?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="constipationYes" type="radio" name="constipation" value="Yes" required />
          <label htmlFor="constipationYes">Yes</label>
          <input id="constipationNo" type="radio" name="constipation" value="No" />
          <label htmlFor="constipationNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="diarrhea" className="mb-2">Does your child experience diarrhea often?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="diarrheaYes" type="radio" name="diarrhea" value="Yes" required />
          <label htmlFor="diarrheaYes">Yes</label>
          <input id="diarrheaNo" type="radio" name="diarrhea" value="No" />
          <label htmlFor="diarrheaNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="bowelMovements">How many dirty diapers/bowel movements does your child have in a 24 hour period?</label>
      <fieldset>
        <div>
          <input id="bowelMovements" type="number" min="1" max="10" name="bowelMovements" />
        </div>
      </fieldset>

      <label htmlFor="voids">How many wet diapers/voids does your child have in a 24 hour period?</label>
      <fieldset>
        <div>
          <input id="voids" type="number" min="1" max="10" name="voids" />
        </div>
      </fieldset>

      <label htmlFor="excessivelyHungry" className="mb-2">Does your child often feel excessively hungry after meals?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="hungryYes" type="radio" name="excessivelyHungry" value="Yes" required />
          <label htmlFor="hungryYes">Yes</label>
          <input id="hungryNo" type="radio" name="excessivelyHungry" value="No" />
          <label htmlFor="hungryNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="noAppetite" className="mb-2">Does your child have little or no appetite?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="noAppetiteYes" type="radio" name="noAppetite" value="Yes" required />
          <label htmlFor="noAppetiteYes">Yes</label>
          <input id="noAppetiteNo" type="radio" name="noAppetite" value="No" />
          <label htmlFor="noAppetiteNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="craveSugar" className="mb-2">Does your child often crave sugar?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="craveSugarYes" type="radio" name="craveSugar" value="Yes" required />
          <label htmlFor="craveSugarYes">Yes</label>
          <input id="craveSugarNo" type="radio" name="craveSugar" value="No" />
          <label htmlFor="craveSugarNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="craveSalt" className="mb-2">Does your child often crave salt?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="craveSaltYes" type="radio" name="craveSalt" value="Yes" required />
          <label htmlFor="craveSaltYes">Yes</label>
          <input id="craveSaltNo" type="radio" name="craveSalt" value="No" />
          <label htmlFor="craveSaltNo">No</label>
        </div>
      </fieldset>

      <p className="h4">Lifestyle</p>

      <label htmlFor="secondhandSmoke" className="mb-2">Is your child regularly exposed to secondhand smoke?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="smokeYes" type="radio" name="secondhandSmoke" value="Yes" required />
          <label htmlFor="smokeYes">Yes</label>
          <input id="smokeNo" type="radio" name="secondhandSmoke" value="No" />
          <label htmlFor="smokeNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="smokeDetector" className="mb-2">Do you have a working smoke detector?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="smokeDetectorYes" type="radio" name="smokeDetector" value="Yes" required />
          <label htmlFor="smokeDetectorYes">Yes</label>
          <input id="smokeDetectorNo" type="radio" name="smokeDetector" value="No" />
          <label htmlFor="smokeDetectorNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="lastDentistVisit">Last visit to the dentist:</label>
      <fieldset>
        <div>
          <input id="lastDentistVisit" type="date" name="lastDentistVisit" />
        </div>
      </fieldset>

      <label htmlFor="dentistVisitFrequency">How often does your child go to the dentist?</label>
      <fieldset>
        <div>
          <input id="dentistVisitFrequency" type="text" name="dentistVisitFrequency" />
        </div>
      </fieldset>

      <label htmlFor="brushTeeth">How often does your child brush your teeth?</label>
      <fieldset>
        <div>
          <input id="brushTeeth" type="text" name="brushTeeth" />
        </div>
      </fieldset>

      <label htmlFor="fillings" className="mb-2">Does your child have amalgam fillings?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="fillingsYes" type="radio" name="fillings" value="Yes" required />
          <label htmlFor="fillingsYes">Yes</label>
          <input id="fillingsNo" type="radio" name="fillings" value="No" />
          <label htmlFor="fillingsNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="fillingsSpecify" className="mb-2">If yes, specify if:</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="fillingsRemoved" type="radio" name="fillingsSpecify" value="Removed" />
          <label htmlFor="fillingsRemoved">Removed</label>
          <input id="fillingsReplaced" type="radio" name="fillingsSpecify" value="Replaced" />
          <label htmlFor="fillingsReplaced">Replaced</label>
        </div>
      </fieldset>

      <label htmlFor="toxicExposure" className="mb-2">Have you been exposed to toxic substances at work or at home?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="toxicYes" type="radio" name="toxicExposure" value="Yes" required />
          <label htmlFor="toxicYes">Yes</label>
          <input id="toxicNo" type="radio" name="toxicExposure" value="No" />
          <label htmlFor="toxicNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="sports" className="mb-2">Does your child enjoy playing sports or being active outside?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="sportsYes" type="radio" name="sports" value="Yes" required />
          <label htmlFor="sportsYes">Yes</label>
          <input id="sportsNo" type="radio" name="sports" value="No" />
          <label htmlFor="sportsNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="sunlight">On average, how many days a week does your child get natural sunlight?</label>
      <fieldset>
        <div>
          <input id="sunlight" type="number" min="0" max="7" name="sunlight" />
        </div>
      </fieldset>

      <label htmlFor="daysWalking">On average, how many days a week does your child walk?</label>
      <fieldset>
        <div>
          <input id="daysWalking" type="number" min="0" max="7" name="daysWalking" />
        </div>
      </fieldset>

      <label htmlFor="daysRunning">On average, how many days a week does your child run?</label>
      <fieldset>
        <div>
          <input id="daysRunning" type="number" min="0" max="7" name="daysRunning" />
        </div>
      </fieldset>

      <label htmlFor="hoursSitting">On average, how many hours a day is your child sitting?</label>
      <fieldset>
        <div>
          <input id="hoursSitting" type="number" min="0" max="24" name="hoursSitting" />
        </div>
      </fieldset>

      <label htmlFor="hoursScreentime">On average, what is your child&apos;s daily screen time in hours? (TV, computer, smartphone)</label>
      <fieldset>
        <div>
          <input id="hoursScreentime" type="number" min="0" max="24" name="hoursScreentime" />
        </div>
      </fieldset>

      <label htmlFor="stressLevel">On a scale of 1-10 (1 being low and 10 being high), what is your child&apos;s average stress level?</label>
      <fieldset>
        <div>
          <input id="stressLevel" type="number" min="1" max="10" name="stressLevel" />
        </div>
      </fieldset>

      <p className="h4">Medical History</p>

      <label htmlFor="takingMedicationOrSupplements" className="mb-2">Is your child currently taking any vitamins, minerals, herbs, homeopathic remedies, prescription or non-prescription medications, aspirin, laxatives, diet pills, or any other supplements?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="supplementsYes" type="radio" name="takingMedicationOrSupplements" value="Yes" required />
          <label htmlFor="supplementsYes">Yes</label>
          <input id="supplementsNo" type="radio" name="takingMedicationOrSupplements" value="No" />
          <label htmlFor="supplementsNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="listofMedicationorSupplements">Please list all vitamins, minerals, herbs, homeopathic remedies, prescription or non-prescription medications, aspirin, laxatives, diet pills, or any other supplements your child is currently taking. Please include the product names and dosages/amounts:</label>
      <fieldset>
        <div>
          <textarea id="listofMedicationorSupplements" name="listofMedicationorSupplements" />
        </div>
      </fieldset>

      <label htmlFor="allergiestoMedication" className="mb-2">Does your child have any known allergies to medications or herbs?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="allergiesYes" type="radio" name="allergiestoMedication" value="Yes" required />
          <label htmlFor="allergiesYes">Yes</label>
          <input id="allergiesNo" type="radio" name="allergiestoMedication" value="No" />
          <label htmlFor="allergiesNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="anySpecificIssue" className="mb-2">Is your child currently under a doctor or practitioner&apos;s care for a specific issue?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="specificIssueYes" type="radio" name="anySpecificIssue" value="Yes" required />
          <label htmlFor="specificIssueYes">Yes</label>
          <input id="specificIssueNo" type="radio" name="anySpecificIssue" value="No" />
          <label htmlFor="specificIssueNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="specificIssue">If yes please specify:</label>
      <fieldset>
        <div>
          <textarea id="specificIssue" name="specificIssue" />
        </div>
      </fieldset>

      <label htmlFor="seriousInjuries" className="mb-2">Has your child ever been seriously injured, hospitalized, or suffered from a disease?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="seriousInjuriesYes" type="radio" name="seriousInjuries" value="Yes" required />
          <label htmlFor="seriousInjuriesYes">Yes</label>
          <input id="seriousInjuriesNo" type="radio" name="seriousInjuries" value="No" />
          <label htmlFor="seriousInjuriesNo">No</label>
        </div>
      </fieldset>

      <label htmlFor="specificInjury" className="mb-2">If yes please specify:</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <textarea id="specificInjury" name="specificInjury" />
        </div>
      </fieldset>

      <label htmlFor="howWereYouBorn" className="mb-2">Was your child born vaginally or by cesarean section?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="bornVaginally" type="radio" name="howWereYouBorn" value="Vaginally" />
          <label htmlFor="bornVaginally">Vaginally</label>
          <input id="bornCSection" type="radio" name="howWereYouBorn" value="Caesarean Section" />
          <label htmlFor="bornCSection">Caesarean Section</label>
        </div>
      </fieldset>

      <label htmlFor="breastFedAsaBaby" className="mb-2">Was your child breastfed as a baby?</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="breastfedAsaBaby" type="radio" name="breastFedAsaBaby" value="Yes" required />
          <label htmlFor="breastfedAsaBaby">Yes</label>
          <input id="notBreastfedAsaBaby" type="radio" name="breastFedAsaBaby" value="No" />
          <label htmlFor="notBreastfedAsaBaby">No</label>
        </div>
      </fieldset>

      <label htmlFor="breastFedAge">Until what age was your child breastfed?</label>
      <fieldset>
        <div>
          <input id="breastFedAge" type="number" min="0" max="5" name="breastFedAge" />
        </div>
      </fieldset>

      <p className="h4">Family Health History</p>

      <label htmlFor="allFamilyConditions" className="mb-2">Please check all conditions below that apply to your parents and grandparents:</label>
      <fieldset>
        <div className="d-flex align-items-start">
          <input id="arthritis" type="checkbox" name="allFamilyConditions1" value="Arthritis" />
          <label htmlFor="arthritis">Arthritis</label>
        </div>
        <div className="d-flex align-items-start">
          <input id="asthma" type="checkbox" name="allFamilyConditions2" value="Asthma" />
          <label htmlFor="asthma">Asthma</label>
        </div>
        <div className="d-flex align-items-start">
          <input id="cancer" type="checkbox" name="allFamilyConditions3" value="Cancer" />
          <label htmlFor="cancer">Cancer</label>
        </div>
        <div className="d-flex align-items-start">
          <input id="diabetes" type="checkbox" name="allFamilyConditions4" value="Diabetes" />
          <label htmlFor="diabetes">Diabetes</label>
        </div>
        <div className="d-flex align-items-start">
          <input id="gallbladder" type="checkbox" name="allFamilyConditions5" value="Gallbladder Disease" />
          <label htmlFor="gallbladder">Gallbladder Disease</label>
        </div>
        <div className="d-flex align-items-start">
          <input id="heart" type="checkbox" name="allFamilyConditions6" value="Heart Disease" />
          <label htmlFor="heart">Heart Disease</label>
        </div>
        <div className="d-flex align-items-start">
          <input id="kidney" type="checkbox" name="allFamilyConditions7" value="Kidney Disease" />
          <label htmlFor="kidney">Kidney</label>
        </div>
        <div className="d-flex align-items-start">
          <input id="stomach" type="checkbox" name="allFamilyConditions8" value="Stomach/Intestinal Disorder" />
          <label htmlFor="stomach">Stomach or Intestinal Disorder</label>
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="allFamilyConditionsOther">If not listed above, please indicate the condition(s) below:</label>
          <textarea id="allFamilyConditionsOther" name="allFamilyConditionsOther" />
        </div>
      </fieldset>

      <label>Please list the ages of your parents and grandparents. If a family member is deceased, please write their age of death and cause (if known).</label>
      <fieldset>
        <div>
          <label htmlFor="motherAge">Mother&apos;s Age:</label>
          <input id="motherAge" type="number" min="16" max="100" name="motherAge" />
        </div>
        <div>
          <label htmlFor="fatherAge">Father&apos;s Age:</label>
          <input id="fatherAge" type="number" min="16" max="100" name="fatherAge" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="maternalGrandmotherAge">Maternal Grandmother&apos;s Age:</label>
          <input id="maternalGrandmotherAge" type="number" min="32" max="100" name="maternalGrandmotherAge" />
        </div>
        <div>
          <label htmlFor="maternalGrandmotherCOD">Cause of Death (if Deceased):</label>
          <input id="maternalGrandmotherCOD" type="text" min="32" max="100" name="maternalGrandmotherCOD" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="maternalGrandfatherAge">Maternal Grandfather&apos;s Age:</label>
          <input id="maternalGrandfatherAge" type="number" min="16" max="100" name="maternalGrandfatherAge" />
        </div>
        <div>
          <label htmlFor="maternalGrandfatherCOD">Cause of Death (if Deceased):</label>
          <input id="maternalGrandfatherCOD" type="text" min="32" max="100" name="maternalGrandfatherCOD" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="paternalGrandmotherAge">Paternal Grandmother&apos;s Age:</label>
          <input id="paternalGrandmotherAge" type="number" min="32" max="100" name="paternalGrandmotherAge" />
        </div>
        <div>
          <label htmlFor="paternalGrandmotherCOD">Cause of Death (if Deceased):</label>
          <input id="paternalGrandmotherCOD" type="text" min="32" max="100" name="paternalGrandmotherCOD" />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="paternalGrandfatherAge">Paternal Grandfather&apos;s Age:</label>
          <input id="paternalGrandfatherAge" type="number" min="16" max="100" name="paternalGrandfatherAge" />
        </div>
        <div>
          <label htmlFor="paternalGrandfatherCOD">Cause of Death (if Deceased):</label>
          <input id="paternalGrandfatherCOD" type="text" min="32" max="100" name="paternalGrandfatherCOD" />
        </div>
      </fieldset>

      <div className="g-recaptcha" data-sitekey="6Ld_kvgbAAAAAAV4DPfNMTIiY41cOwJ5CR1EahTu"></div>

      <fieldset>
        <input type="submit" value="Submit" />
      </fieldset>
    </form >
  );
}

export default PediatricAssessment;