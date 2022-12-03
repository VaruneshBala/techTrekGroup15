import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar";
import EditAddress from "./EditAddress";
import EditEmail from "./EditEmail";
import axios from "axios";
import "./profile.css";

const ProfilePage = () => {
  // const user = [
  //   {
  //     UserID: 1,
  //     Username: "ExecutiveDBS",
  //     Password: "DBSBestBank2022",
  //     Firstname: "Tom",
  //     Lastname: "Lim",
  //     Email: "TomLim@easymail.com",
  //     Address: "Block 123 Serangoon Garden #10-129",
  //     OptIntoPhyStatements: 0,
  //   },
  //   {
  //     UserID: 2,
  //     Username: "SeederDBS",
  //     Password: "iWant2JoinDBS",
  //     Firstname: "Mary",
  //     Lastname: "Tan",
  //     Email: "MaryTan@simplemail.com",
  //     Address: "Block 234 Changi Business Park #50-123",
  //     OptIntoPhyStatements: 1,
  //   },
  //   {
  //     UserID: 3,
  //     Username: "AcerDBS",
  //     Password: "Top5Seeder",
  //     Firstname: "Gary",
  //     Lastname: "Ong",
  //     Email: "GaryOng@easymail.com",
  //     Address: "Block 345 Jurong Business Park #25-214",
  //     OptIntoPhyStatements: 0,
  //   },
  //   {
  //     UserID: 4,
  //     Username: "AssociateDBS",
  //     Password: "Whatis2Years",
  //     Firstname: "Harry",
  //     Lastname: "Goh",
  //     Email: "HarryGoh@bestbank.com",
  //     Address: "Block 456 One North Fusionopolis #34-743",
  //     OptIntoPhyStatements: 0,
  //   },
  //   {
  //     UserID: 5,
  //     Username: "PresidentDBS",
  //     Password: "Multiplier3.5%",
  //     Firstname: "Cheryl",
  //     Lastname: "Chia",
  //     Email: "CherylChia@bestbank.com",
  //     Address: "Block 567 Marina Bay Sands #63-743",
  //     OptIntoPhyStatements: 1,
  //   },
  // ];

  const userId = 1;

  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`https://flask-production-7a20.up.railway.app/user/${userId}`)
      .then((response) => {
        console.log(response.data.data);
        setUserProfile(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

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
        <div className="name">
          Name: {userProfile.Firstname} {userProfile.Lastname}
        </div>
        <div className="email">Email: {userProfile.Email}</div>
        <button className="edit-button" onClick={editEmailOpenHandler}>
          Edit
        </button>
        {emailIsOpen && <EditEmail userId={userId} userProfile={userProfile} setUserProfile={setUserProfile}/>}
        <div className="address">Home Address: {userProfile.Address}</div>
        <button className="edit-button" onClick={editAddressOpenHandler}>
          Edit
        </button>
        {addressIsOpen && <EditAddress userId={userId} userProfile={userProfile} setUserProfile={setUserProfile}/>}
        <div className="opt-in">
          Opt into physical statements? -
          {userProfile.OptIntoPhyStatements === 1 ? "Yes" : "No"}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
