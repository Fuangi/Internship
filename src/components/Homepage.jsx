import Register from "./Register";

function Homepage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-text">
          <h1 className="heading">Welcome to LSS...</h1>
          <h2>Guides for filling the form</h2>

          <p>
            For the hubs provided to choose from, here is a breakdown of the
            various hubs and what they will offer for this internship
          </p>
          <ol>
            <li>Web Development -- HTML, CSS, JS & MySQL </li>
            <li>DevOps I -- Git - Jenkins</li>
            <li>Devops II -- Cloud Computing - Jira</li>
            <li>React Bootcamp -- Advanced Web Devekopment</li>
            <li>W-Language Programming</li>
          </ol>
        </div>
        <Register />
      </div>
    </div>
  );
}

export default Homepage;
