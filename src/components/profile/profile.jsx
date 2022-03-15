import React from "react";
import "./profile.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Profile({ onCreateProfile }) {
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [interests, setInterests] = React.useState([]);
  const [date, setDate] = React.useState(new Date());
  const [dateOfBirth, setDateOfBirth] = React.useState("");

  const takeName = (e) => {
    setName(e.target.value);
  };
  const takeDate = (data) => {
    const str = data.split(" ").splice(1, 3).join(" ");
    setDateOfBirth(str);
  };
  const takeLocation = (e) => {
    setLocation(e.target.value);
  };
  const takeInterest = (e) => {
    const incomingValues = e.target.value;
    const data = incomingValues.split(",");
    setInterests(data);
  };

  const Create = () => {
    const profileData = {
      name,
      dateOfBirth,
      location,
      interests,
    };
    onCreateProfile(profileData);
  };
  return (
    <div className="profileContainer">
      <div className="profileForm">
        <div className="profileMessage">
          <h4>Create Your Profile</h4>
        </div>
        <div className="name">
          <TextField
            id="userName"
            label="Name"
            size="small"
            variant="outlined"
            onChange={takeName}
          />
        </div>
        <div className="date">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                disableFuture
                label="Date of birth"
                openTo="year"
                views={["year", "month", "day"]}
                value={date}
                id="date-picker"
                onChange={(newValue) => {
                  setDate(newValue);
                  takeDate(newValue.toString());
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div className="location">
          <TextField
            id="location"
            label="Location"
            size="small"
            variant="outlined"
            onChange={takeLocation}
          />
        </div>
        <div className="interests">
          <TextField
            id="interests"
            label="Interests"
            size="small"
            variant="outlined"
            onChange={takeInterest}
          />
        </div>
        <div className="createButton">
          <Button variant="contained" id="create-btn" onClick={Create}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Profile;
