import axios from 'axios';


export function register(object)
{
    let response=axios.post("http://localhost:3000/api/user/register/",object)
    return response;
}

export async function login(object)
{
    let response= await axios.post("http://localhost:3000/api/user/login/",object)
    return response;
}
