import axios, { AxiosError } from 'axios';
import registrationData from "../interfaces/registrationData"
import toastNotify from "../Helpers/toastNotify";
import loginData from "../interfaces/loginInterface";

export const API_URL = process.env.BACKEND_URL

export const validateEmail = async (email : string) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

export const registerUser = async (userData:registrationData) => {
    try {
        const response = await axios.post("http://localhost:5000/api/user/register", userData, { withCredentials: true })
        if (response.statusText === "Created") {
            toastNotify("Registration is successful", "success")
        }
        return response.data;
    } catch (error) {
        toastNotify("Email already Exists, Pleaset try again", "error")
    }
}


export const loginUser = async (userData:loginData) => {
    try {
        const response = await axios.post("http://localhost:5000/api/user/login", userData, { withCredentials: true })
        if (response.statusText === "OK" || response.status === 200) {
            toastNotify("Login is successful", "success")
        }
        return response.data;
    } catch (error: any) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        return toastNotify(message, "error")
    }
}


export const logoutUser = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/user/logout")
        if (response.statusText === "OK" || response.status === 200) {
            toastNotify("Logout is successful", "success")
        }
        return response.data;
    } catch (error) {
        toastNotify(" Error, Please try again", "error")
    }
}