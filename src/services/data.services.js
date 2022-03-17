import axios from "axios";

const config = {
    headers: {
        authorization: "Bearer" + " " + localStorage.getItem("token"),
    },
};

export const createProfile = async (object) => {
    let response =  await axios.post("http://localhost:3000/api/user-profile/",object, config);
    return response;
};

export const search = async (object) => {
    let response =  await axios.post("http://localhost:3000/api/user-profile/get",object, config);
    return response;
}

export const createContact = async (profileId) => {
    let response = await axios.put(`http://localhost:3000/api/contact/${profileId}`, config, config);
    return response;
}