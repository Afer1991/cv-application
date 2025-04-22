import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import styles from '../styles/components.module.css'

function AboutMe ({updateAboutMe}) {
  return(
    <div className={styles.container}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faUser} />
        <h1>About Me</h1>
      </div>
      <div>
        <textarea rows="5" placeholder="Tell something about yourself..."></textarea>
      </div>
    </div>
  );
}

export default AboutMe