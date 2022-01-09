import { Layout } from "../../../../components/layout/layout";
import Head from "next/head";
import { EditRoomhoc } from "../../../../hoc/edit-room.hoc";

const EditRoom = () => {
  return (
    <Layout>
      <Head>
        <title>Edit Room </title>
      </Head>
      <EditRoomhoc />
    </Layout>
  );
};

export default EditRoom;
