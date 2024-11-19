import styles from "./donorpic.module.css";
const image_url = "../../public/images/donor_pic.png";

export default function DonorPic() {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={image_url} alt="donor's picture" />
    </div>
  );
}
