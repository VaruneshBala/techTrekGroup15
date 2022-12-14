import React, { useState } from "react";
import "./profile.css"
import axios from "axios";

const EditAddress = ({ userId, userProfile, setUserProfile }) => {
  const [newAddress, setNewAddress] = useState("")

  const addressChangeHandler = (e) => {
    setNewAddress(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const newUserProfile = { ...userProfile, Address: newAddress }
    axios
    .put(
      `https://flask-production-7a20.up.railway.app/user/${userId}`,
      newUserProfile
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
      
      setUserProfile(newUserProfile);

    setNewAddress("")
  }

  const removeAddressHandler = () => {
    const newUserProfile = { ...userProfile, Address: "" }
    axios
    .put(
      `https://flask-production-7a20.up.railway.app/user/${userId}`,
      newUserProfile
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
      
      setUserProfile(newUserProfile);
  }

  return (
    <div className="edit-address">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="new-address">New Address: </label>
          <input type="text" className="input" id="new-address" value={newAddress} onChange={addressChangeHandler}/>
          <button className="edit-button" type="submit">Change</button>
        </div>
      </form>
      <button className="remove-button" onClick={removeAddressHandler}>Remove address</button>
    </div>
  );
};

export default EditAddress;
