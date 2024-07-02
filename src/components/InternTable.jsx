import { useState } from "react";

/* eslint-disable react/prop-types */
function InternTable({ intern, i }) {
  const [showMessage, setShowMessage] = useState(false);

  function handleShowMessage(message) {
    if (message === "") return;
    return setShowMessage(!showMessage);
  }
  return (
    <>
      <tr className={`${showMessage === true ? "active" : ""}`}>
        <td>{i + 1}</td>
        <td>{intern.name}</td>
        <td>{intern.email}</td>
        <td>{intern.phone}</td>
        <td>{intern.specialty}</td>
        <td>{intern.school}</td>
        <td>{intern.gpa}</td>
        <td>{intern.hub}</td>
        <td
          onClick={() => handleShowMessage(intern.message)}
          className="onDownload message"
          title={`${
            intern.message === ""
              ? "No Message to display"
              : "Click to open or close the message box"
          }`}
        >
          {intern.message === "" ? "-" : `${intern?.message.slice(0, 19)}...`}
        </td>
      </tr>

      {showMessage && (
        <tr className="view-message" key={i}>
          <td colSpan="9">
            <div>
              <h4>Message</h4>
              <p>{intern.message}</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default InternTable;
