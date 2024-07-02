import axios from "axios";
import { useEffect, useState } from "react";
import InternTable from "./InternTable";

function View() {
  const [interns, setInterns] = useState([]);

  useEffect(function () {
    axios({
      method: "GET",
      url: "https://internship-backend-ediw.onrender.com/internship",
      // url: "http://localhost:4000/internship",
    })
      .then(function (res) {
        setInterns(res.data.data.interns);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleSort(field) {
    axios({
      // url: `http://localhost:4000/internship/?sort=${field}`,
      url: `https://internship-backend-ediw.onrender.com/internship/?sort=${field}`,
      method: "get",
    })
      .then(function (res) {
        setInterns(res.data.data.interns);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="interns">
      <h2>All Registered Interns</h2>

      <div className="sort">
        <button onClick={() => handleSort("name")} className="onDownload">
          Sort By Name
        </button>
        <button onClick={() => handleSort("specialty")} className="onDownload">
          Sort By Specialty
        </button>
        <button onClick={() => handleSort("school")} className="onDownload">
          Sort By School
        </button>
        <button onClick={() => handleSort("gpa")} className="onDownload">
          Sort By GPA
        </button>
        <button onClick={() => handleSort("hub")} className="onDownload">
          Sort By Chosen Hub
        </button>
        <button onClick={() => window.print()} className="onDownload">
          Download
        </button>
      </div>
      <table className="interns-table">
        <thead className="headings">
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Specialty</th>
            <th>School</th>
            <th>GPA</th>
            <th>Chosen Hub</th>
            <th className="onDownload">Message</th>
          </tr>
        </thead>

        <tbody>
          {interns?.length > 0 ? (
            interns.map((intern, i) => {
              return <InternTable key={i} i={i} intern={intern} />;
            })
          ) : (
            <tr>
              <td colSpan={9}>
                No Interns found in the database. Please try again later
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default View;
