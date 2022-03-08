import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Signin.css";
import { useHistory } from "react-router-dom";
import { login } from "../../services/user.services"
const emailRegex =
  /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@([0-9a-zA-Z][-]?)+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/;
const passwordRegex =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
function Signin() {
  let history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [regexPattern, setRegexPattern] = React.useState({
    emailBorder: false,
    passwordBorder: false,
  });
  const [regexHelperText, setRegexHelperText] = React.useState({
    emailText: "",
    passwordText: "",
  });

  function takeEmail(e) {
    setEmail(e.target.value);
  }

  function takePassword(e) {
    setPassword(e.target.value);
  }

  const ReDirect = () => {
      history.push("/")
  }

  const Submit = () => {
    if (email === "" && password === "") {
      setRegexPattern((regexPattern) => ({
        ...regexPattern,
        emailBorder: true,
        passwordBorder: true,
      }));
      setRegexHelperText((regexHelperText) => ({
        ...regexHelperText,
        emailText: "Enter Your Email",
        passwordText: "Enter The Password",
      }));
    } else {
      const emailValidation = emailRegex.test(email);
      const passwordValidation = passwordRegex.test(password);

      if (emailValidation && passwordValidation) {
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          emailBorder: false,
          passwordBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          emailText: "",
          passwordText: "",
        }));
      }
      if (!emailValidation) {
        console.log("emailTest3", emailValidation);
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          emailBorder: true,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          emailText: "Enter A Valid Email",
        }));
      } else {
        console.log("emailTest2", emailValidation);
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          emailBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          emailText: "",
        }));
      }
      if (passwordValidation) {
        console.log("passwordTest2", passwordValidation);
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          passwordBorder: false,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          passwordText: "",
        }));
      } else {
        console.log("passwordTest3", passwordValidation);
        setRegexPattern((regexPattern) => ({
          ...regexPattern,
          passwordBorder: true,
        }));
        setRegexHelperText((regexHelperText) => ({
          ...regexHelperText,
          passwordText:
            "Password Must Not Be Less Than 8 Characters And Must Contain One Uppercase, One Lowercase and One Numeric.",
        }));
      }
      if (emailValidation && passwordValidation) {
        let object ={
          "email": email,
         "password": password
        }
        console.log(object);
        login(object).then((result)=>{
          console.log(result.data.data.id);
          console.log(result.data.data.token);
          localStorage.setItem("token", result.data.data.token)
          localStorage.setItem("id",result.data.data.id)
        }).catch((error) =>{
          console.log(error);
        })
      }
    }
  };
  return (
    <div className="Login">
      <div className="loginFormContainer">
        <div className="message">
          <h4>Welcome to Social Directory</h4>
        </div>
        <div className="mainBoard">
          <div className="loginForm">
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
            <div className="loginButton">
              <Button variant="contained" id="login-btn" onClick={Submit}>
                Submit
              </Button>
            </div>
          </div>
          <div className="routeToSignup">
            <div className="info">
              <h4>Don't have an account yet? Sign up...</h4>
            </div>
            <div className="arrow-back">
              <ArrowBackIosNewOutlinedIcon id="arrow-backward" onClick={ReDirect}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
