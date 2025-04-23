import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import styles from '../styles/components.module.css'

function Button () {
  return (
    <>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
  );
}

export default Button