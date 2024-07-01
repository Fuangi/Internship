import Footer from "./Footer";
import Header from "./Header";
import Register from "./Register";

function Homepage() {
  return (
    <div className="landing-page">
      <Header />
      <div className="landing-content">
        <div className="landing-text">
          <h1 className="heading">Welcome to Landmark Software Solutions</h1>
          <h2>Guides for filling the form</h2>

          <p>
            For the hubs provided to choose from, here is a breakdown of the
            various hubs and what they will offer for this internship
          </p>
          <ol>
            <li>Web Development -- HTML, CSS, JS & MySQL </li>
            <li>DevOps I -- Git - Jenkins</li>
            <li>Devops II -- Cloud Computing - Jira</li>
            <li>React Bootcamp -- Advanced Web Development</li>
            <li>W-Language Programming</li>
          </ol>
        </div>
        <Register />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
