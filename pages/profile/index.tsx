import { Layout } from "../../components/layout/layout";
import Head from "next/head";
import { Profilehoc } from "../../hoc/profile.hoc";
import { Room } from "../../models/Rooms";
import { NextPage } from "next";
import { RoomsData } from "../../db";

interface Props {
  rooms: [Room];
}
const Profile: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Head>
        <title>Profile </title>
      </Head>
      <Profilehoc Rooms={props.rooms} />
    </Layout>
  );
};

export default Profile;

export async function getStaticProps() {
  // const response = await fetch("http://localhost:3000/Rooms");
  // const rooms = await response.json();
  const rooms = RoomsData;

  return {
    props: {
      rooms,
    },
  };
}
