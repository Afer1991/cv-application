import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"
import styles from '../styles/components.module.css'

function ProReference ({
  proReferenceNum,
  updateRefName,
  updateRefPos,
  updateRefCompany,
  updateRefPhone,
  updateRefEmail
}) {
  return(
    <div className={styles.container}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faAddressBook} />
        <h1>Pro. Reference {proReferenceNum}</h1>
      </div>
      <div>
        <input placeholder="Name" onChange={updateRefName} />
      </div>
      <div>
        <input placeholder="Position" onChange={updateRefPos} />
      </div>
      <div>
        <input placeholder="Company" onChange={updateRefCompany} />
      </div>
      <div className={styles.doubleInput}>
        <input placeholder="Phone" onChange={updateRefPhone} />
        <input placeholder="Email" onChange={updateRefEmail} />
      </div>
    </div>
  );
}

export default ProReference