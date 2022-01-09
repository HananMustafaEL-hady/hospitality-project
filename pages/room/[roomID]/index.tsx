import { Layout } from "../../../components/layout/layout";
import { RoomDetailshoc } from "../../../hoc/room-details.hoc";
import Head from "next/head";

const RoomDetails = () => {
  return (
    <Layout>
      <Head>
        <title>Room profile</title>
      </Head>
      <RoomDetailshoc />
    </Layout>
  );
};

export default RoomDetails;
