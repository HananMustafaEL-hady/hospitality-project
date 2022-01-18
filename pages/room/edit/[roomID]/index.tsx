import { Layout } from "../../../../components/layout/layout";
import Head from "next/head";
import { EditRoomhoc } from "../../../../hoc/edit-room.hoc";
import { GetServerSideProps, NextPage } from "next";
import axios from "../../../../utils/axios.util";
import { Room } from "../../../../models/rooms";
interface Props {
  room: Room;
}
const EditRoom: NextPage<Props> = ({ room }) => {
  return (
    <Layout>
      <Head>
        <title>Edit Room </title>
      </Head>
      <EditRoomhoc room={room} />
    </Layout>
  );
};

export default EditRoom;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await axios(`/rooms/${context.params?.roomID}`);
    const room = await res.data;
    return { props: { room } };
  } catch (error) {
    return { props: {} };
  }
};
