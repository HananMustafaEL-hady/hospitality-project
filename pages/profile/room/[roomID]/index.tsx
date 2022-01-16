import { Layout } from "../../../../components/layout/layout";
import Head from "next/head";
import { ProfileRoomDetailsHOC } from "../../../../hoc/profile-room-details.hoc";
import axios from "../../../../utils/axios.util";
import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import { Room } from "../../../../models/rooms";
interface Props {
  room: Room;
}
const MyRoom: NextPage<Props> = ({ room }) => {
  console.log(room);
  return (
    <Layout>
      <Head>
        <title>my Room </title>
      </Head>
      <ProfileRoomDetailsHOC room={room} />
    </Layout>
  );
};

export default MyRoom;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await axios(`/rooms/${context.params?.roomID}`);
    const room = await res.data;
    return { props: { room } };
  } catch (error) {
    return { props: {} };
  }
};
