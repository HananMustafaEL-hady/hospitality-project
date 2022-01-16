import axios, { AxiosResponse } from "axios";
import { Alert } from "react-bootstrap";
import { mapAxiosError } from "./map-error.util";
import Cookies from "js-cookie";

// import nookies from 'nookies'
const instance = axios.create({
  baseURL: "https://index-hospitality.herokuapp.com",

  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json ,multipart/form-data",
    // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    // "Access-Control-Allow-Credentials": "true",
    // supports_credentials: "true",
    // CORS_ALLOW_HEADERS: "true",
    // CORS_EXPOSE_HEADERS: "true",
  },
});
/* Axios interceptor to send the token*/
console.log(process.browser);
instance.interceptors.request.use(
  (config) => {
    console.log(config.headers);
    if (config.headers) {
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Content-Type"] = "application/json";
      const token = Cookies.get("token");
      console.log(token);
      config.headers.Authorization = `Bearer ${token}`;

      // if (process.browser) {
      //   const token = localStorage.getItem("token");
      //   if (token)
      //     config.headers.Authorization = `Bearer ${localStorage.token}`;
      // }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use((response) => {
  if (response.data.token) {
    if (process.browser) {
      localStorage.setItem("token", response.data.token);
    }
  }
});

/* Axios interceptor to catch errors*/

instance.interceptors.response.use(undefined, (error) => {
  throw mapAxiosError(error);
});

export default instance;
