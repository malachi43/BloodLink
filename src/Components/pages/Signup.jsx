import styles from "./signup.module.css";
import { Link } from "react-router-dom";

export default function SignUp() {
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
          type="text"
          placeholder="Phone Number"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Email Address"
        />
        <select className={styles.select}>
          <option>Gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <select className={styles.select}>
          <option>Location</option>
          <option value="Lagos">male</option>
          <option value="Abuja">female</option>
        </select>
        <select className={styles.select}>
          <option>
            Would you like to receive reminders for future donations?
          </option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
        <select className={styles.select}>
          <option>
            Do you want to share your information with donation centres?
          </option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
        <button className={styles.btn} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
