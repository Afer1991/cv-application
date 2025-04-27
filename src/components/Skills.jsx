import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserGear } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import styles from '../styles/components.module.css'

function Skills ({
  updateSkillInput,
  updateSkills,
  currentSkill,
  currentSkills,
  removeSkill
}) {
  return(
    <div className={styles.container}>
      <form>
        <div className={styles.heading}>
          <FontAwesomeIcon icon={faUserGear} />
          <h1>Skills</h1>
        </div>
        <div>
          <input placeholder="Add a skill..." onChange={updateSkillInput} value={currentSkill}/>
        </div>
        <ul className={styles.skillList}>
          {currentSkills.map(skill => <li key={skill.id}>
                                        <span>{skill.name}</span>
                                        <FontAwesomeIcon icon={faTrash} onClick={() => removeSkill(skill.id)} />
                                      </li>
          )}
        </ul>
        <div>
          <button className={styles.button} onClick={updateSkills} >+</button>
        </div>
      </form>
    </div>
  );
}

export default Skills