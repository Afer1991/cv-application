import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"
import styles from '../styles/components.module.css'

function PersonalInfo ({
  updateFirstName,
  updateLastName,
  updateTitle,
  updateAddress,
  updatePhoneNumber,
  updateEmail,
  updateGitHub
}) {
  return(
    <div className={styles.container}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faAddressCard} />
        <h1>Personal Info</h1>
      </div>
      <div className={styles.doubleInput}>
        <input placeholder="First Name" onChange={updateFirstName} />
        <input placeholder="Last Name" onChange={updateLastName} />
      </div>
      <div>
        <input placeholder="Title" onChange={updateTitle}/>
      </div>
      <div>
        <input placeholder="Address" onChange={updateAddress}/>
      </div>
      <div className={styles.doubleInput}>
        <input placeholder="Phone Number" onChange={updatePhoneNumber} />
        <input placeholder="Email" onChange={updateEmail}/>
      </div>
      <div>
        <input placeholder="Github Link (optional)" onChange={updateGitHub} />
      </div>
    </div>
  );
}

export default PersonalInfo