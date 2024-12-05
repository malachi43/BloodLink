import styles from "./pages/signup.module.css";
import { Link } from "react-router-dom";

let DonorSignUp = () => {
  return (
    <div className="md:flex gap-20 items-center place-self-center">
      <img src="images/donor_pic.png" alt="donor-pic" className="rounded-lg" />

      {/* <div>
                <form className="pt-10 flex space-y-4 flex-col" id="donateBlood">
                    <input type="text" placeholder="Full name" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
                    <input type="date" placeholder="Date of Birth" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
                    <input type="number" placeholder="Phone Number" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
                    <input type="email" placeholder="Email address" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
                    <select className="border-2 border-[#40404069] rounded-md p-2 w-full">
                        <option className="hidden">Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <select className="border-2 border-[#40404069] rounded-md p-2 w-full">
                        <option className="hidden">Location</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                    </select>
                    <select className="border-2 border-[#40404069] rounded-md p-2 w-full">
                        <option className="hidden">Would you like to receive reminders for future donations?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <select className="border-2 border-[#40404069] rounded-md p-2 w-full">
                        <option className="hidden">Do you want us to share your information with donation centers?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </form> 
                <div className="pt-6 place-self-center"><button className="p-4 pl-6 pr-6 bg-[#008000] rounded-lg text-white">Sign up</button></div>
            </div> */}

      <div className={styles.container}>
        <form className={styles.form} id="donateBlood">
          <Link to="/login" className={styles.a}>
            Already have an account? <span className={styles.span}>Log in</span>
          </Link>
          <p className={styles.p}>Become a Donor and save Lives.</p>
          <input className={styles.input} type="text" placeholder="Fullname" />
          <input
            className={styles.input}
            type="text"
            placeholder="Date of Birth"
          />
          <input
            className={styles.input}
            type="number"
            placeholder="Phone Number"
          />
          {/* <p className="text-xs text-gray-900">*11 digits please</p> */}
          <input
            className={styles.input}
            type="text"
            placeholder="Email Address"
          />
          <select className={styles.select}>
            <option className={`hidden`}>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select className={styles.select}>
            <option className={`hidden`}>Location</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
          </select>
          <select className={styles.select}>
            <option className={`hidden`}>
              Would you like to receive reminders for future donations?
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <select className={styles.select}>
            <option className={`hidden`}>
              Do you want to share your information with donation centres?
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button className={styles.btn} type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonorSignUp;
