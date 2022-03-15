import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "../pages/signup/Signup.jsx"
import Signin from "../pages/signin/Signin.jsx"
import SuccessMessage from "../pages/succesMessage/successMessage.jsx"
import Dashboard from "../components/dashboard/dashboard.jsx"

const RouterDom = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/success" component={SuccessMessage}/>
            <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
        </BrowserRouter>
    )
}
export default RouterDom;