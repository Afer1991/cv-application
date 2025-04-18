import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressCard } from "@fortawesome/free-solid-svg-icons"

function PersonalInfo () {
  return(
    <div>
      <FontAwesomeIcon icon={faAddressCard} />
      <h1>Personal Info</h1>
      <div>
        <input placeholder="First Name"/>
        <input placeholder="Last Name"/>
      </div>
      <div>
        <input placeholder="Title"/>
      </div>
      <div>
        <input placeholder="Address"/>
      </div>
      <div>
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