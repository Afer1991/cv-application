import PersonalInfo from "./components/PersonalInfo"
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience";
import Education from "./components/Education"
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

  const [experience1, setExperience1] = useState(
    { 
      position: 'Position',
      company: 'Company',
      start: 'Start',
      end: 'End',
      description: 'Describe your responsibilities and achievements...'
    }
  );

  const [experience2, setExperience2] = useState(
    { 
      position: '',
      company: '',
      start: '',
      end: '',
      description: ''
    }
  );

  const [experience3, setExperience3] = useState(
    { 
      position: '',
      company: '',
      start: '',
      end: '',
      description: ''
    }
  );

  const [experience4, setExperience4] = useState(
    { 
      position: '',
      company: '',
      start: '',
      end: '',
      description: ''
    }
  );

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

  function position1Change(e) {
    setExperience1({ ...experience1, position: e.target.value });
  }

  function company1Change(e) {
    setExperience1({ ...experience1, company: e.target.value });
  }

  function start1Change(e) {
    setExperience1({ ...experience1, start: e.target.value });
  }

  function end1Change(e) {
    setExperience1({ ...experience1, end: e.target.value });
  }

  function description1Change(e) {
    setExperience1({ ...experience1, description: e.target.value });
  }

  function position2Change(e) {
    setExperience2({ ...experience2, position: e.target.value });
  }

  function company2Change(e) {
    setExperience2({ ...experience2, company: e.target.value });
  }

  function start2Change(e) {
    setExperience2({ ...experience2, start: e.target.value });
  }

  function end2Change(e) {
    setExperience2({ ...experience2, end: e.target.value });
  }

  function description2Change(e) {
    setExperience2({ ...experience2, description: e.target.value });
  }

  function position3Change(e) {
    setExperience3({ ...experience3, position: e.target.value });
  }

  function company3Change(e) {
    setExperience3({ ...experience3, company: e.target.value });
  }

  function start3Change(e) {
    setExperience3({ ...experience3, start: e.target.value });
  }

  function end3Change(e) {
    setExperience3({ ...experience3, end: e.target.value });
  }

  function description3Change(e) {
    setExperience3({ ...experience3, description: e.target.value });
  }

  function position4Change(e) {
    setExperience4({ ...experience4, position: e.target.value });
  }

  function company4Change(e) {
    setExperience4({ ...experience4, company: e.target.value });
  }

  function start4Change(e) {
    setExperience4({ ...experience4, start: e.target.value });
  }

  function end4Change(e) {
    setExperience4({ ...experience4, end: e.target.value });
  }

  function description4Change(e) {
    setExperience4({ ...experience4, description: e.target.value });
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
        <Experience
          experienceNum="" 
          updatePosition={position1Change}
          updateCompany={company1Change}
          updateStartDate={start1Change}
          updateEndDate={end1Change}
          updateDescription={description1Change}
        />
        <Experience
          experienceNum="2" 
          updatePosition={position2Change}
          updateCompany={company2Change}
          updateStartDate={start2Change}
          updateEndDate={end2Change}
          updateDescription={description2Change}
        />
        <Experience
          experienceNum="3" 
          updatePosition={position3Change}
          updateCompany={company3Change}
          updateStartDate={start3Change}
          updateEndDate={end3Change}
          updateDescription={description3Change}
        />
        <Experience
          experienceNum="4" 
          updatePosition={position4Change}
          updateCompany={company4Change}
          updateStartDate={start4Change}
          updateEndDate={end4Change}
          updateDescription={description4Change}
        />
        <Education />
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
        <div className="experience">
          <h1>Experience</h1>
          <hr />
          <div className="experienceGrid">
            <div>
              <h2>{experience1.position}</h2>
              <span>{experience1.company} |</span><span> {experience1.start} - {experience1.end}</span>
              <p>{experience1.description}</p>
            </div>
            <div>
              <h2>{experience2.position}</h2>
              <span>{experience2.company} {experience2.company !== '' ? " |" : null}</span><span> {experience2.start} {experience2.start !== '' ? "-" : null} {experience2.end}</span>
              <p>{experience2.description}</p>
            </div>
            <div>
            <h2>{experience3.position}</h2>
              <span>{experience3.company} {experience3.company !== '' ? " |" : null}</span><span> {experience3.start} {experience3.start !== '' ? "-" : null} {experience3.end}</span>
              <p>{experience3.description}</p>
            </div>
            <div>
              <h2>{experience4.position}</h2>
              <span>{experience4.company} {experience4.company !== '' ? " |" : null}</span><span> {experience4.start} {experience4.start !== '' ? "-" : null} {experience4.end}</span>
              <p>{experience4.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
