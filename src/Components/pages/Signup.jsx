import styles from "./signup.module.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
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
  );
}
