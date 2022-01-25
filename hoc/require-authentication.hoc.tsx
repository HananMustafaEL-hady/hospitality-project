import { GetServerSideProps, GetServerSidePropsContext } from "next";
// import { parseCookies } from "nookies";

import nookies from "nookies";
import axios from "../utils/axios.util";

export function requireAuthentication(gssp: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const cookies = nookies.get(context);
    let token = cookies.token ? cookies.token : undefined;
    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    } else {
      axios.interceptors.request.use(
        (config) => {
          if (config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (err) => {}
      );
    }

    return await gssp(context);
  };
}
