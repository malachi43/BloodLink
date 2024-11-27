import styles from "./donorstat.module.css";

export default function DonorStat() {
  return (
    <div className={styles.container}>
      <div className={styles.donorStat}>
        <div className={styles.stat}>
          <p className={styles.statText}>Number of Donors Matched</p>
          <p className={styles.statNum}>20</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statText}>Blood donation Requests</p>
          <p className={styles.statNum}>30</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statText}>Successful Operations</p>
          <p className={styles.statNum}>14</p>
        </div>
      </div>
    </div>
  );
}
