// React Components
import ReCAPTCHA from "react-google-recaptcha";

const JobApplicationForm = () => {
  return (
    <form
      id="jobApplicationForm"
      method="POST"
      encType="multipart/form-data"
      action="https://usebasin.com/f/d24a1ba38e4b"
    >
      {/* Applicant Information */}
      <div className="form-section">
        <h3>Applicant Information</h3>
        <fieldset>
          <div>
            <label htmlFor="Full_Name">
              Full Name<span className="required">*</span>
            </label>
            <input
              aria-label="First Name"
              type="text"
              name="Full_Name"
              id="Full_Name"
              required
            />
          </div>
          <div>
            <label htmlFor="Date_of_Birth">
              Date of Birth<span className="required">*</span>
            </label>
            <input
              name="Date_of_Birth"
              required
              type="date"
              id="Date_of_Birth"
            />
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor="Phone">
              Phone Number<span className="required">*</span>
            </label>
            <input name="Phone" required type="tel" id="Phone" placeholder />
          </div>
          <div>
            <label htmlFor="Email">
              Email<span className="required">*</span>
            </label>
            <input
              name="Email"
              required
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor="Position">
              Position<span className="required">*</span>
            </label>
            <select name="Position" required id="Position">
              <option disabled value="">
                Select...
              </option>
              <option value="Receptionist">Receptionist</option>
              <option value="Office Assistant">Clinic Assistant</option>
            </select>
          </div>
          <div>
            <label htmlFor="Availability">
              Availability<span className="required">*</span>
            </label>
            <select name="Availability" required id="Availability">
              <option disabled value="">
                Select...
              </option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>
          <div>
            <label htmlFor="Start_Date">
              Start Date<span className="required">*</span>
            </label>
            <input name="Start_Date" required type="date" id="Start_Date" />
          </div>
        </fieldset>
      </div>
      <br />

      {/* Education */}
      <div className="form-section">
        <h3>Education</h3>
        <fieldset>
          <div>
            <label htmlFor="High_School">High School</label>
            <input
              aria-label="High School"
              type="text"
              name="High_School"
              id="High_School"
            />
          </div>
          <div>
            <label htmlFor="High_School_City">City</label>
            <input
              aria-label="High School City"
              type="text"
              name="High_School_City"
              id="High_School_City"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="High_School_From">From</label>
            <input
              aria-label="High School From"
              type="text"
              name="High_School_From"
              id="High_School_From"
            />
          </div>
          <div>
            <label htmlFor="High_School_To">To</label>
            <input
              aria-label="High School To"
              type="text"
              name="High_School_To"
              id="High_School_To"
            />
          </div>
        </fieldset>
        <fieldset className="pt-0">
          <input
            name="High_School_Graduate"
            type="checkbox"
            value="yes"
            id="High_School_Graduate"
          />
          <label htmlFor="High_School_Graduate">Did You Graduate?</label>
        </fieldset>
        <br />
        <fieldset>
          <div>
            <label htmlFor="College">College</label>
            <input
              aria-label="College"
              type="text"
              name="College"
              id="College"
            />
          </div>
          <div>
            <label htmlFor="College_City">City</label>
            <input
              aria-label="College City"
              type="text"
              name="College_City"
              id="College_City"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="College_From">From</label>
            <input
              aria-label="College From"
              type="text"
              name="College_From"
              id="College_From"
            />
          </div>
          <div>
            <label htmlFor="College_To">To</label>
            <input
              aria-label="College To"
              type="text"
              name="College_To"
              id="College_To"
            />
          </div>
        </fieldset>
        <fieldset className="pt-0">
          <input
            name="College_Graduate"
            type="checkbox"
            value="yes"
            id="College_Graduate"
          />
          <label htmlFor="College_Graduate">Did You Graduate?</label>
        </fieldset>
        <br />

        <fieldset>
          <div>
            <label htmlFor="Other">Other</label>
            <input aria-label="Other" type="text" name="Other" id="Other" />
          </div>
          <div>
            <label htmlFor="Other_City">City</label>
            <input
              aria-label="Other City"
              type="text"
              name="Other_City"
              id="Other_City"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Other_From">From</label>
            <input
              aria-label="Other From"
              type="text"
              name="Other_From"
              id="Other_From"
            />
          </div>
          <div>
            <label htmlFor="Other_To">To</label>
            <input
              aria-label="Other To"
              type="text"
              name="Other_To"
              id="Other_To"
            />
          </div>
        </fieldset>
        <fieldset className="pt-0">
          <input
            name="Other_Graduate"
            type="checkbox"
            value="yes"
            id="Other_Graduate"
          />
          <label htmlFor="Other_Graduate">Did You Graduate?</label>
        </fieldset>
        <br />
      </div>
      <br />

      {/* Employment History */}
      <div className="form-section">
        <h3>Employment History</h3>
        <fieldset>
          <div>
            <label htmlFor="Job1_Company">Company</label>
            <input
              aria-label="Job1 Company"
              type="text"
              name="Job1_Company"
              id="Company1"
            />
          </div>
          <div>
            <label htmlFor="Job1_Title">Job Title</label>
            <input
              aria-label="Job1 Title"
              type="text"
              name="Job1_Title"
              id="Job1_Title"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Job1_From">From</label>
            <input
              aria-label="Job1 From"
              type="text"
              name="Job1_From"
              id="Job1_From"
            />
          </div>
          <div>
            <label htmlFor="Job1_To">To</label>
            <input
              aria-label="Job1 To"
              type="text"
              name="Job1_To"
              id="Job1_To"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Job1_Reason_For_Leaving">Reason For leaving</label>
            <input
              aria-label="Job1 Reason For Leaving"
              type="text"
              name="Job1_Reason_For_Leaving"
              id="Job1_Reason_For_Leaving"
            />
          </div>
        </fieldset>
        <br />
        <fieldset>
          <div>
            <label htmlFor="Job2_Company">Company</label>
            <input
              aria-label="Job2 Company"
              type="text"
              name="Job2_Company"
              id="Job2_Company"
            />
          </div>
          <div>
            <label htmlFor="Job2_Title">Job Title</label>
            <input
              aria-label="Job2 Title"
              type="text"
              name="Job2_Title"
              id="Job2_Title"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Job2_From">From</label>
            <input
              aria-label="Job2 From"
              type="text"
              name="Job2_From"
              id="Job2_From"
            />
          </div>
          <div>
            <label htmlFor="Job2_To">To</label>
            <input
              aria-label="Job2 To"
              type="text"
              name="Job2_To"
              id="Job2_To"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Job2_Reason_For_Leaving">Reason For leaving</label>
            <input
              aria-label="Job2 Reason For Leaving"
              type="text"
              name="Job2_Reason_For_Leaving"
              id="Job2_Reason_For_Leaving"
            />
          </div>
        </fieldset>
        <br />
        <fieldset>
          <input
            name="Background_Check"
            required
            type="checkbox"
            value="yes"
            id="Background_Check"
            placeholder
          />
          <label htmlFor="Background_Check">
            Are you willing to consent a background check?
            <span className="required">*</span>
          </label>
        </fieldset>
      </div>
      <br />

      {/* Professional References */}
      <div className="form-section">
        <h3>Professional References</h3>
        <fieldset>
          <div>
            <label htmlFor="Reference1_Name">
              Name<span className="required">*</span>
            </label>
            <input
              aria-label="Reference1 Name"
              type="text"
              name="Reference1_Name"
              id="Reference1_Name"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Reference1_Company">Company</label>
            <input
              aria-label="Reference1 Company"
              type="text"
              name="Reference1_Company"
              id="Reference1_Company"
            />
          </div>
          <div>
            <label htmlFor="Reference1_Title">Job Title</label>
            <input
              aria-label="Reference1 Title"
              type="text"
              name="Reference1_Title"
              id="Reference1_Title"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Reference1_Phone">
              Phone Number<span className="required">*</span>
            </label>
            <input
              name="Reference1_Phone"
              required
              type="tel"
              id="Reference1_Phone"
              placeholder
            />
          </div>
          <div>
            <label htmlFor="Reference1_Email">
              Email<span className="required">*</span>
            </label>
            <input
              name="Reference1_Email"
              required
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
        </fieldset>
        <br />

        <fieldset>
          <div>
            <label htmlFor="Reference2_Name">
              Name<span className="required">*</span>
            </label>
            <input
              aria-label="Reference2 Name"
              type="text"
              name="Reference2_Name"
              id="Reference2_Name"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Reference2_Company">Company</label>
            <input
              aria-label="Reference2 Company"
              type="text"
              name="Reference2_Company"
              id="Reference2_Company"
            />
          </div>
          <div>
            <label htmlFor="Reference2_Title">Job Title</label>
            <input
              aria-label="Reference2 Title"
              type="text"
              name="Reference2_Title"
              id="Reference2_Title"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Reference2_Phone">
              Phone Number<span className="required">*</span>
            </label>
            <input
              name="Reference2_Phone"
              required
              type="tel"
              id="Reference2_Phone"
              placeholder
            />
          </div>
          <div>
            <label htmlFor="Reference2_Email">
              Email<span className="required">*</span>
            </label>
            <input
              name="Reference2_Email"
              required
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
        </fieldset>
        <br />

        <fieldset>
          <div>
            <label htmlFor="Reference3_Name">
              Name<span className="required">*</span>
            </label>
            <input
              aria-label="Reference3 Name"
              type="text"
              name="Reference3_Name"
              id="Reference3_Name"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Reference3_Company">Company</label>
            <input
              aria-label="Reference3 Company"
              type="text"
              name="Reference3_Company"
              id="Reference3_Company"
            />
          </div>
          <div>
            <label htmlFor="Reference3_Title">Job Title</label>
            <input
              aria-label="Reference3 Title"
              type="text"
              name="Reference3_Title"
              id="Reference3_Title"
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Reference3_Phone">
              Phone Number<span className="required">*</span>
            </label>
            <input
              name="Reference3_Phone"
              required
              type="tel"
              id="Reference3_Phone"
              placeholder
            />
          </div>
          <div>
            <label htmlFor="Reference3_Email">
              Email<span className="required">*</span>
            </label>
            <input
              name="Reference3_Email"
              required
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
        </fieldset>
        <br />
      </div>
      <br />

      {/* Application Consent */}
      <div className="form-section">
        <fieldset>
          <div>
            <label htmlFor="Resume">
              Please Attach Your Resume<span className="required">*</span>
            </label>
            <input type="file" name="Resume" id="Resume" />
          </div>
        </fieldset>
        <fieldset>
          <label>
            I, the Applicant, certify that my answers are true and honest to the
            best of my knowledge. If this application leads to my eventual
            employment, I understand that any false or misleading information in
            my application or interview may result in my employment being
            terminated.
            <span className="required">*</span>
          </label>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="Applicant_Name">
              Applicant Name<span className="required">*</span>
            </label>
            <input
              name="Applicant_Name"
              required
              type="text"
              id="Applicant_Name"
              placeholder
            />
          </div>
          <div>
            <label htmlFor="Todays_Datedate">
              Today&apos;s Date<span className="required">*</span>
            </label>
            <input
              name="Todays_Date"
              required
              type="date"
              id="todaysdate"
              placeholder
            />
          </div>
        </fieldset>
        <fieldset>
          <input
            type="submit"
            value="Submit"
            id="submit"
          />
        </fieldset>
      </div>
    </form>
  );
};

export default JobApplicationForm;
