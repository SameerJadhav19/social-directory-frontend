import React from "react";
import "./header.css";
import ProfileIcon from "@mui/icons-material/PersonOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";

function Header({ changeComponent }) {
  const history = useHistory();
  const changeToHome = () => {
    changeComponent(0);
  };

  const changeToProfile = () => {
    changeComponent(1);
  };

  const changeToContact = () => {
    changeComponent(2);
  };

  const reDirect = () => {
    history.push("/");
  };
  return (
    <div>
      <div className="header">
        <div className="imgs">
          <AutoStoriesIcon
            id="directoryIcon"
            size="large"
            style={{ color: "white" }}
            onClick={changeToHome}
          />
        </div>
        <div>
          <span className="title" onClick={changeToHome}>
            Social Directory
          </span>
        </div>

        <div className="searchbar">
          <div className="searching">
            <form>
              <button type="submit">Search</button>
              <input type="search" placeholder="Search..." />
            </form>
          </div>
        </div>
        <div className="btn1">
          <div className="profileIcon">
            <Tooltip title="Create Profile">
              <IconButton onClick={changeToProfile}>
                <ProfileIcon style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="cartIcon">
            <Tooltip title="Add Contact">
              <IconButton onClick={changeToContact}>
                <ContactPageIcon style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </div>
          <div className="logoutIcon">
            <Tooltip title="Log out">
              <IconButton onClick={reDirect}>
                <LogoutIcon style={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
