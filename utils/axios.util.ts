import axios, { AxiosResponse } from "axios";
import { mapAxiosError } from "./map-error.util";
import nookies from "nookies";
// import nookies from 'nookies'
const instance = axios.create({
  baseURL: "https://index-hospitality.herokuapp.com",
});

/* Axios interceptor to send the token*/
instance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Content-Type"] = "application/json";
      // const { token } = parseCookies();
      const cookies = nookies.get();
      const token = cookies.token ? cookies.token : undefined;
      token ? (config.headers.Authorization = `Bearer ${token}`) : "";
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/* Axios interceptor to catch errors*/

instance.interceptors.response.use(undefined, (error) => {
  throw mapAxiosError(error);
});

export default instance;
