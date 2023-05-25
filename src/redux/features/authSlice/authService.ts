import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const validateEmail = (email:string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const registerUser = async (userData:any) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/user/register`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("Registration Successful");
    }
    return response.data;
  } catch (error:any) {
    const message:any =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const loginUser = async (userData:any) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("Login Successful");
    }
    return response.data;
  } catch (error:any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const loginUserOut = async () => {
  try {
    await axios.get(`${BACKEND_URL}/api/users/logout`, {
      withCredentials: true,
    });
    toast.success("User is Logged out!!! ");
  } catch (error:any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const forgotPassword = async (userData:any) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/forgotpassword`,
      userData
    );
    toast.success(response.data.message);
  } catch (error:any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};


export const resetPassword = async (userData:any, resetToken:string) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/api/users/resetpassword/${resetToken}`,
      userData
    );
    return response.data
  } catch (error:any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};



export const getLoginStatus = async () => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/users/loggedin`
    );
    return response.data;
  } catch (error:any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};


export const getUser = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/getuser`);
    return response.data;
  } catch (error:any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
}


export const changePassword = async (pass:string) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/api/users/changepassword`,
      pass
    );
    return response.data;
  } catch (error:any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};