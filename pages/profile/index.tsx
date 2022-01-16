import { Layout } from "../../components/layout/layout";
import Head from "next/head";
import { Profilehoc } from "../../hoc/profile.hoc";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import nookies from "nookies";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { Owner } from "../../models/owner.model";
import { json } from "stream/consumers";
import { requireAuthentication } from "../../hoc/require-authentication.hoc";

interface Props {
  profile: Owner;
}
const Profile: NextPage<Props> = ({ profile }) => {
  console.log(profile);
  return (
    <Layout>
      <Head>
        <title>Profile </title>
      </Head>
      <Profilehoc profile={profile} />
    </Layout>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    const { req } = context;
    const { token } = parseCookies({ req });
    console.log("token", token);
    try {
      const res = await axios(
        `https://index-hospitality.herokuapp.com/users/profile`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res);
      // const profile = res;

      return {
        props: {
          profile: {},
        },
      };
    } catch (error) {
      console.log("error", error);

      return {
        props: {},
      };
    }
  }
);
// async (context) => {
// const cookies = nookies.get(context);
// const { req } = context;
// const parsedCookies = parseCookies({ req });
// let token = undefined;
// if (parsedCookies != undefined) {
//   token = parsedCookies.token;
// }

// if (!token) {
//   return {
//     redirect: {
//       destination: "/login",
//       permanent: false,
//     },
//   };
//   }
//   try {
//     const res = await axios(
//       `https://index-hospitality.herokuapp.com/users/profile`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     console.log(res);
//     const profile = res?.data;

//     return {
//       props: {
//         profile,
//       },
//     };
//   } catch (error) {
//     console.log("error", error);

//     return {
//       props: {},
//     };
//   }
// };
