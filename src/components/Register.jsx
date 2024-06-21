function Register() {
  return (
    <form className="register">
      <h2>Registration Form</h2>
      <div className="input-field">
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="input-field">
        <label htmlFor="">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="input-field">
        <label htmlFor="">Telephone</label>
        <input type="text" name="phone" id="phone" />
      </div>
      <div className="input-field">
        <label htmlFor="">Specialty</label>
        <input type="text" name="specialty" id="specialty" />
      </div>
      <div className="input-field">
        <label htmlFor="">School</label>
        <input type="text" name="school" id="school" />
      </div>
      <div className="input-field">
        <label htmlFor="">GPA (First Semester)</label>
        <input type="text" name="gpa" id="gpa" />
      </div>
      <div className="input-field">
        <label htmlFor="">Chosen Hub</label>
        <select name="hub" id="hub">
          <option value="webDev">Web Development I</option>
          <option value="devops1">DevOps I</option>
          <option value="devops2">DevOps II</option>
          <option value="react">React Bootcamp</option>
          <option value="wLang">W-Language Programming</option>
        </select>
      </div>
      <button>Register</button>
    </form>
  );
}

export default Register;
