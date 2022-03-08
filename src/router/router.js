import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "../pages/signup/Signup.jsx"
import Signin from "../pages/signin/Signin.jsx"

const RouterDom = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>
        </Switch>
        </BrowserRouter>
    )
}
export default RouterDom;