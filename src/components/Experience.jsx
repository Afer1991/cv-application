import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import Button from './Button'
import styles from '../styles/components.module.css'

function Experience () {
  return(
    <div className={styles.container}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faScrewdriverWrench} />
        <h1>Experience</h1>
      </div>
      <div>
        <input placeholder="Position" />
      </div>
      <div>
        <input placeholder="Company" />
      </div>
      <div className={styles.doubleInput}>
        <input placeholder="Start date" />
        <input placeholder="End date" />
      </div>
      <div>
        <textarea rows="3" placeholder="Describe your responsibilities and achievements..."></textarea>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}

export default Experience