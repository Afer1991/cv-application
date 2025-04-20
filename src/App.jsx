import PersonalInfo from "./components/PersonalInfo"

function App() {

  return (
    <>
      <section className="CV-builder">
        <PersonalInfo />
      </section>
      <section className="CV">
        <div className="info">
          <div className="name">
            <h1>First Name<br />Last Name</h1>
            <p><i>Software Developer</i></p>
          </div>
          <div className="contactInfo">
            <p className="bold">Address:</p> <p>123 Main St New York, NY 00000</p>
            <p className="bold">Email: </p><a href="mailto:email@email.com">email@email.com</a>
            <p className="bold">Phone: </p><p>(000) 000-00000</p>
            <p className="bold">Github: </p><a href="https://github.com/" target="_blank">https://github.com/</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
