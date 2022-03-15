import axios from "axios";

const config = {
    headers: {
        authorization: "Bearer" + " " + localStorage.getItem("token"),
    },
};

export const createProfile = async (object) => {
    let response =  await axios.post("http://localhost:3000/api/user-profile/",object, config);
    return response;
}