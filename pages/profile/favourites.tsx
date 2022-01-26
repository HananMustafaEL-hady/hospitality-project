import { ProfileEdithoc } from "../../hoc/profile-edit.hoc";
import { Layout } from "../../components/layout/layout";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { requireAuthentication } from "../../hoc/require-authentication.hoc";
import ProfileFavouriteshoc from "../../hoc/profile-favourites.hoc";
import { Room } from "../../models/rooms";
import axios from "../../utils/axios.util";
import nookies from "nookies";

interface Props {
  rooms: [Room];
}
const favourites: NextPage<Props> = ({ rooms }) => {
  return (
    <Layout>
      <Head>
        <title> Favourites Rooms </title>
      </Head>
      <ProfileFavouriteshoc rooms={rooms} />
    </Layout>
  );
};

export default favourites;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    try {
      const res = await axios(`/users/profile`);

      const data = await res.data;
      return {
        props: {
          rooms: data,
        },
      };
    } catch (err) {
      console.log(err);
      return {
        props: {},
      };
    }
  }
);
