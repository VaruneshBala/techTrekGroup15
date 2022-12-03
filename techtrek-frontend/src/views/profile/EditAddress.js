import React, { useState } from "react";
import "./profile.css"

const EditAddress = () => {
  const [newAddress, setNewAddress] = useState("")

  const addressChangeHandler = (e) => {
    setNewAddress(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(newAddress)

    setNewAddress("")
  }

  const removeAddressHandler = () => {

  }

  return (
    <div className="edit-address">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="new-address">New Address: </label>
          <input id="new-address" value={newAddress} onChange={addressChangeHandler}/>
          <button type="submit">Change</button>
        </div>
      </form>
      <button onClick={removeAddressHandler}>Remove address?</button>
    </div>
  );
};

export default EditAddress;
