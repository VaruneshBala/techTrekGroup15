import React, { useState } from "react";
import NavBar from "../../components/navbar";
import EditAddress from "./EditAddress";
import EditEmail from "./EditEmail";
import "./profile.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState([])
  
  const fetchProfile = async () => {
    const res = await fetch("");
    const data = await res.json();

    setProfile(data)
  }

  const [emailIsOpen, setEmailIsOpen] = useState(false);
  const [addressIsOpen, setAddressIsOpen] = useState(false);

  const editEmailOpenHandler = () => {
    setEmailIsOpen(!emailIsOpen);
  };

  const editAddressOpenHandler = () => {
    setAddressIsOpen(!addressIsOpen);
  };

  return (
    <>
      <NavBar />
      <div className="profile">
        <div className="name">Name: Tom Lim</div>
        <div className="email">Email: tomlim@easymail.com</div>
        <button onClick={editEmailOpenHandler}>Edit/Remove Email</button>
        {emailIsOpen && <EditEmail />}
        <div className="address">Home Address: Block 123 Serangoon Garden #10-129</div>
        <button onClick={editAddressOpenHandler}>
          Edit/Remove Home Address
        </button>
        {addressIsOpen && <EditAddress />}
        <div className="opt-in">Opt into physical statements? </div>
      </div>
    </>
  );
};

export default ProfilePage;
