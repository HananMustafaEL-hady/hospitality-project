import { Layout } from "../../../components/layout/layout";
import Head from "next/head";
import { AddRoomhoc } from "../../../hoc/add-room.hoc";

const AddRoom = () => {
  return (
    <Layout>
      <Head>
        <title>add Room </title>
      </Head>
      <AddRoomhoc />
    </Layout>
  );
};

export default AddRoom;
