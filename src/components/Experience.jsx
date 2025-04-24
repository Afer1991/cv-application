import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import Button from './Button'
import styles from '../styles/components.module.css'

function Experience ({
  updatePosition,
  updateCompany,
  updateStartDate,
  updateEndDate,
  updateDescription
}) {
  return(
    <div className={styles.container}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faScrewdriverWrench} />
        <h1>Experience</h1>
      </div>
      <div>
        <input placeholder="Position" onChange={updatePosition} />
      </div>
      <div>
        <input placeholder="Company" onChange={updateCompany} />
      </div>
      <div className={styles.doubleInput}>
        <input placeholder="Start date" onChange={updateStartDate} />
        <input placeholder="End date" onChange={updateEndDate} />
      </div>
      <div>
        <textarea rows="3" placeholder="Describe your responsibilities and achievements..." onChange={updateDescription} ></textarea>
      </div>
      <div className={styles.buttonContainer}>
        <Button />
      </div>
    </div>
  );
}

export default Experience