import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

export function requireAuthentication(gssp: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const parsedCookies = parseCookies({ req });
    let token = undefined;
    if (parsedCookies != undefined) {
      token = parsedCookies.token;
    }

    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    return await gssp(context);
  };
}
