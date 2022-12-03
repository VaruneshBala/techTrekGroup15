import React, { useState } from "react";
import "./profile.css"

const EditEmail = () => {
  const [newEmail, setNewEmail] = useState("")

  const emailChangeHandler = (e) => {
    setNewEmail(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(newEmail)

    setNewEmail("")
  }

  const removeEmailHandler = () => {

  }

  return (
    <div className="edit-email">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="new-email">New Email:</label>
          <input className="input" id="new-email" value={newEmail} onChange={emailChangeHandler}/>
          <button className="edit-button" type="submit">Change</button>
        </div>
      </form>
      <button className="remove-button" onClick={removeEmailHandler}>Remove email</button>
    </div>
  );
};

export default EditEmail;