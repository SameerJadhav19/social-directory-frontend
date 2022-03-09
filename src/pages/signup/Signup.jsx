import React from "react";
import "./Signup.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { register } from "../../services/user.services"
const emailRegex =
  /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@([0-9a-zA-Z][-]?)+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/;
const phoneRegex =
  /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
const passwordRegex =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

function Signup() {
  let history = useHistory();
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [regexPattern, setRegexPattern] = React.useState({
    emailBorder: false,
    phoneBorder: false,
    passwordBorder: false,
  });
  const [regexHelperText, setRegexHelperText] = React.useState({
    emailText: "Enter email",
    phoneText: "Enter phone number",
    passwordText: "Enter password",
  });

  const takeEmail = (e) => {
    setEmail(e.target.value);
  };

  const takePhone = (e) => {
    setPhone(e.target.value);
  };

  const takePassword = (e) => {
    setPassword(e.target.value);
  };

  const ReDirect = () => {
    history.push("/signin")
}

  const Next = () => {
    if (
      email === "" &&
      phone === "" &&
      password === ""
    ) {
      setRegexPattern((regexPattern) => ({
        ...regexPattern,
        emailBorder: true,
        phoneBorder: true,
        passwordBorder: true,
      }));
      setRegexHelperText((regexHelperText) => ({
        ...regexHelperText,
        emailText: "Enter Your Email",
        phoneText: "Enter Your Phone Number",
        passwordText: "Enter The Password",
      }));
    } else {
      const emailValidation = emailRegex.test(email);
      const phoneValidation = phoneRegex.test(phone);
      const passwordValidation = passwordRegex.test(password);

      if (
        emailValidation &&
        phoneValidation &&
        passwordValidation
      ) {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          emailBorder: false,
          phoneBorder: false,
          passwordBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          emailText: "",
          phoneText: "",
          passwordText: "",
        }));
      }

      if (!emailValidation) {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          emailBorder: true,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          emailText: "Email Must Contain User Name And Domain Name.",
        }));
      } else {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          emailBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          emailText: "You can use letters, numbers & periods",
        }));
      }

      if (!phoneValidation) {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          phoneBorder: true,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          phoneText: "Enter 10 digit number (+91, 0 is acceptable)",
        }));
      } else {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          phoneBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          phoneText: "Enter Phone Number",
        }));
      }

      if (!passwordValidation) {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          passwordBorder: true,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          passwordText:
            "Password Must Contain Atleast 1 Uppercase and Minimum 8 Characters.",
        }));
      } else {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          passwordBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          passwordText:
            "Use 8 or more characters with a mix of letters, numbers & symbols",
        }));
      }
      if (
        emailValidation === true &&
        phoneValidation === true &&
        passwordValidation === true
      ) {
        let object = {
          "email": email,
          "phone": phone,
          "password": password,
        };
        register(object).then((result)=>{
          console.log(result.data);
          history.push("/success")
        }).catch((error) => {
          console.log(error);
        })
      }
    }
  };

  return (
    <div className="registration">
      <div className="formContainer">
        <div className="welcome">
          <h4>Welcome to Social Directory</h4>
        </div>
        <div className="board">
          <div className="form">
            <div className="email">
              <TextField
                id="mail"
                label="Email"
                size="small"
                variant="outlined"
                onChange={takeEmail}
                helperText={regexHelperText.emailText}
                error={regexPattern.emailBorder}
              />
            </div>
            <div className="number">
              <TextField
                id="phone"
                label="Phone Number"
                size="small"
                variant="outlined"
                onChange={takePhone}
                helperText={regexHelperText.phoneText}
                error={regexPattern.phoneBorder}
              />
            </div>
            <div className="password">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                size="small"
                autoComplete="current-password"
                onChange={takePassword}
                helperText={regexHelperText.passwordText}
                error={regexPattern.passwordBorder}
              />
            </div>
            <div className="signupButton">
              <Button variant="contained" id="signup-btn" onClick={Next}>
                Sign Up
              </Button>
            </div>
          </div>
          <div className="routeToLogin">
            <div className="info">
              <h4>If you already have an account, Login...</h4>
            </div>
            <div className="arrow">
              <ArrowForwardIosIcon id="arrow-forward" onClick={ReDirect}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
