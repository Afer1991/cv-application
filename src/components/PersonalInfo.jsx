import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
import styles from '../styles/components.module.css'

function PersonalInfo () {
  return(
    <div className={styles.container}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faAddressCard} />
        <h1>Personal Info</h1>
      </div>
      <div className={styles.doubleInput}>
        <input placeholder="First Name"/>
        <input placeholder="Last Name"/>
      </div>
      <div>
        <input placeholder="Title"/>
      </div>
      <div>
        <input placeholder="Address"/>
      </div>
      <div className={styles.doubleInput}>
        <input placeholder="Phone Number"/>
        <input placeholder="Email"/>
      </div>
      <div>
        <input placeholder="Github Link (optional)"/>
      </div>
    </div>
  );
}

export default PersonalInfo