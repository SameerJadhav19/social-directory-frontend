import "./dashboard.css";
import React from "react";
import Header from "../header/header.jsx";
import Introduction from "../introduction/introduction.jsx";
import Profile from "../profile/profile.jsx";
import Contact from "../contacts/contacts.jsx";
import {
  createProfile,
  search,
  createContact,
} from "../../services/data.services";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Dashboard() {
  const [component, setComponent] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [profiles, setProfiles] = React.useState([]);
  const changeComponent = (data) => {
    setComponent(data);
  };
  const onCreateProfile = async (profileData) => {
    try {
      const data = await createProfile(profileData);
      setOpen(true);
      setStatus(data.statusText);
    } catch (error) {
      setOpen(true);
      setStatus(error.toString());
    }
  };

  const onSearch = async (interests) => {
    try {
      const result = await search(interests);
      setProfiles(result.data.data);
    } catch (error) {
    }
  };

  const onCreateContact = async (profileId) => {
    try {
      const result = await createContact(profileId);
      setOpen(true);
      setStatus(result.statusText);
    } catch (error) {
      setOpen(true);
      setStatus(error.toString());
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="dashboardBody">
      <Header changeComponent={changeComponent} />
      <div className="dynamicComponents">
        {component === 0 ? (
          <Introduction />
        ) : component === 1 ? (
          <Profile onCreateProfile={onCreateProfile} />
        ) : (
          <Contact onSearch={onSearch} profiles={profiles} onCreateContact={onCreateContact}/>
        )}
      </div>
      <div>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            {status !=="OK" && status !== "Created" ? (
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Error while adding profile.
              </Alert>
            ) : (
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Profile has been added successfully.
              </Alert>
            )}
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
}
export default Dashboard;
