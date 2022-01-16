import { Layout } from "../../../components/layout/layout";
import { RoomDetailshoc } from "../../../hoc/room-details.hoc";
import Head from "next/head";
import { Room } from "../../../models/rooms";

import { GetServerSideProps, NextPage } from "next";
interface Props {
  room: Room;
}
const RoomDetails: NextPage<Props> = ({ room }) => {
  console.log(room);
  return (
    <Layout>
      <Head>
        <title>Room Details</title>
      </Head>
      <RoomDetailshoc room={room} />
    </Layout>
  );
};

export default RoomDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://index-hospitality.herokuapp.com/rooms/${context.params?.roomID}`
  );
  const room = await res.json();
  console.log("context.params?.roomID", context.params?.roomID);
  console.log(room);
  return { props: { room } };
};
