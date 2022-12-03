import React, { useState } from "react";
import "./profile.css";
import axios from "axios";

const EditEmail = ({ userId, userProfile, setUserProfile }) => {
  const [newEmail, setNewEmail] = useState("");

  const emailChangeHandler = (e) => {
    setNewEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newnewuserprofile = { ...userProfile, Email: newEmail }
    axios
    .put(
      `https://flask-production-7a20.up.railway.app/user/${userId}`,
      newnewuserprofile
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
      
      setUserProfile(newnewuserprofile);
      setNewEmail("");
    };
    
  const removeEmailHandler = () => {
    const newnewuserprofile = { ...userProfile, Email: "" }
    axios
    .put(
      `https://flask-production-7a20.up.railway.app/user/${userId}`,
      newnewuserprofile
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
      
      setUserProfile(newnewuserprofile);
  };

  return (
    <div className="edit-email">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="new-email">New Email:</label>
          <input
            className="input"
            id="new-email"
            value={newEmail}
            onChange={emailChangeHandler}
          />
          <button className="edit-button" type="submit">
            Change
          </button>
        </div>
      </form>
      <button className="remove-button" onClick={removeEmailHandler}>
        Remove email
      </button>
    </div>
  );
};

export default EditEmail;
