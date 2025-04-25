import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import styles from '../styles/components.module.css'

function Education ({
  updateSchool,
  updateDegree
}) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faUserGraduate} />
        <h1>Education</h1>
      </div>
      <div>
        <input placeholder="School" onChange={updateSchool} />
      </div>
      <div>
        <input placeholder="Degree" onChange={updateDegree} />
      </div>
    </div>
  );
}

export default Education