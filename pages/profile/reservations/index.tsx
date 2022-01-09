import { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../../components/layout/layout";
import { RoomsData } from "../../../db";
import { UserReservationsHOC } from "../../../hoc/user-reservations.hoc";
import { Room } from "../../../models/Rooms";
interface Props {
  rooms: [Room];
}
const ownerProfile: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Head>
        <title>owner profile</title>
      </Head>
      <UserReservationsHOC Rooms={props.rooms} />
    </Layout>
  );
};
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

export default ownerProfile;
