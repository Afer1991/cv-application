import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Button from "./Button";
import styles from '../styles/components.module.css'

function AddExperience () {
  return(
    <div className={styles.container}>
      <div className={styles.addExperience}>
        <h1>Add New Experience</h1>
      </div>
      <div className={styles.buttonContainer}>
        <Button />
      </div>
    </div>
  );
}

export default AddExperience