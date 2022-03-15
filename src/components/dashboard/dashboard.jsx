import "./dashboard.css";
import React from "react";
import Header from "../header/header.jsx";
import Introduction from "../introduction/introduction.jsx";
import Profile from "../profile/profile.jsx"
import Contact from "../contacts/contacts.jsx"
import {createProfile} from "../../services/data.services"
function Dashboard(){
    const [component, setComponent] = React.useState(0)
    const changeComponent = (data) => {
        setComponent(data)
    }
    const onCreateProfile = async (profileData) => {
        try{
            const data = await createProfile(profileData);
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <div className="dashboardBody">
            <Header changeComponent = {changeComponent}/>
            <div className="dynamicComponents">{component===0?<Introduction/>:component===1?<Profile onCreateProfile={onCreateProfile}/>:<Contact/>}</div>
        </div>
    )
}
export default Dashboard;