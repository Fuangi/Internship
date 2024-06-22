import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [school, setSchool] = useState("");
  const [gpa, setGpa] = useState("");
  const [hub, setHub] = useState("webdev");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  function handleRegister(e) {
    e.preventDefault();
    let intern = {
      name,
      email,
      phone,
      specialty,
      school,
      gpa,
      hub,
    };

    for (const key in intern) {
      if (intern[key] === "") {
        alert("Please fill out all fields to register");
        return;
      }
    }
    intern = { ...intern, message };
    console.log(intern);
    setIsLoading(true);
    // Add the message when sending it so the above should not be disrupted
    axios({
      method: "POST",
      url: "http://localhost:4000/internship",
      data: intern,
    })
      .then(function (response) {
        if (response.status === 201) {
          alert("Successfully Registered!!!");
          setIsLoading(false);
          window.location.reload();
        }
      })
      .catch(function (error) {
        setIsLoading(false);
        alert(
          "Failed to register! Make sure the name, email or phone number have not been used to register previously"
        );
        console.log(error);
      });
  }

  return (
    <form className="register">
      <div className="input-field">
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          required={true}
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          required={true}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="">Telephone</label>
        <input
          type="text"
          name="phone"
          required={true}
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="">Specialty</label>
        <input
          type="text"
          name="specialty"
          required={true}
          id="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="">School</label>
        <input
          type="text"
          name="school"
          required={true}
          id="school"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="">GPA (First Semester)</label>
        <input
          type="text"
          required={true}
          name="gpa"
          id="gpa"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="">Chosen Hub</label>
        <select
          name="hub"
          id="hub"
          value={hub}
          onChange={(e) => setHub(e.target.value)}
        >
          <option value="webDev">Web Development I</option>
          <option value="devops1">DevOps I</option>
          <option value="devops2">DevOps II</option>
          <option value="react">React Bootcamp</option>
          <option value="wLang">W-Language Programming</option>
        </select>
      </div>
      <div className="input-field">
        <label htmlFor="message">Anything you want to say?</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button className="btn" onClick={handleRegister}>
        {isLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}

export default Register;
