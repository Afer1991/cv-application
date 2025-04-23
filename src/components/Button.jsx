import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

function Button () {
  return (
    <>
      <button>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
  );
}

export default Button