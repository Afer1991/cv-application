import PersonalInfo from "./components/PersonalInfo"
import AboutMe from "./components/AboutMe"
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [title, setTitle] = useState('Software Developer');
  const [address, setAddress] = useState('123 Main St New York, NY 00000');
  const [phoneNumber, setPhoneNumber] = useState('(000) 000-00000');
  const [email, setEmail] = useState('email@email.com');
  const [gitHub, setGitHub] = useState('');
  const [aboutMe, setAboutMe] = useState('Tell something about yourself...');

  function firstNameChange(e) {
    setFirstName(e.target.value);
  }

  function lastNameChange(e) {
    setLastName(e.target.value);
  }

  function titleChange(e) {
    setTitle(e.target.value);
  }

  function addressChange(e) {
    setAddress(e.target.value);
  }

  function phoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function gitHubChange(e) {
    setGitHub(e.target.value);
  }

  function aboutMeChange(e) {
    setAboutMe(e.target.value);
  }

  return (
    <>
      <section className="CVBuilder">
        <PersonalInfo 
          updateFirstName={firstNameChange}
          updateLastName={lastNameChange}
          updateTitle={titleChange}
          updateAddress={addressChange} 
          updatePhoneNumber={phoneNumberChange}
          updateEmail={emailChange}
          updateGitHub={gitHubChange}
        />
        <AboutMe updateAboutMe={aboutMeChange} />
      </section>
      <section className="CV">
        <div className="info">
          <div className="name">
            <h1>{firstName}<br />{lastName}</h1>
            <p><i>{title}</i></p>
          </div>
          <div className="contactInfo">
            <p className="bold">Address:</p> <p>{address}</p>
            <p className="bold">Phone: </p><p>{phoneNumber}</p>
            <p className="bold">Email: </p><a href={"mailto:" + email}>{email}</a>
            {gitHub !== '' ? 
              (
                <>
                  <p className="bold">Github: </p><a href={"https://github.com/" + gitHub} target="_blank">{"https://github.com/" + gitHub}</a>
                </>
              ) :
              null
            }
          </div>
        </div>
        <div className="aboutMe">
          <h1>About<span>Me</span></h1>
          <hr />
          <div>
            <p>{aboutMe}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
