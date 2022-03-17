import "./contacts.css";
import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Tooltip from "@mui/material/Tooltip";
function Contact({ onSearch, profiles, onCreateContact }) {
  const [interests, setInterests] = React.useState("");
  const [profileId, setProfileId] = React.useState("");
  const takeInterest = (e) => {
    console.log(e.target.value);
    setInterests(e.target.value);
  };
  const search = () => {
    const object = {
      interests,
    };
    onSearch(object);
  };
  const onAddContact = (profile) => {
    console.log(profile);
    setProfileId(profile);
    onCreateContact(profileId);
  };
  return (
    <div className="contactContainer">
      <div className="contactList">
        <div className="interest">
          <h5>Search people according to interest</h5>
        </div>
        <div className="topnav">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              onChange={takeInterest}
            />
            <IconButton onClick={search}>
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div className="profilesContainer">
          {profiles.map((profile) => (
            <div className="profile-viewer" key={profile._id} id={profile._id}>
              <div className="name">Name: {profile.name}</div>
              <div className="Userlocation">Location: {profile.location}</div>
              <div className="dob">Date of birth: {profile.dateOfBirth}</div>
              <div className="userInterests">
                Interests: {[profile.interests].toString().split(" ")}
              </div>
              <div className="addToContact">
                <Tooltip title="Add to Contact">
                  <IconButton onClick={() => onAddContact(profile._id)}>
                    <PersonAddIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Contact;
