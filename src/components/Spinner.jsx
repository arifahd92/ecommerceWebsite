import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.parent}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Spinner;
