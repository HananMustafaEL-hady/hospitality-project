import { Layout } from "../../../../components/layout/layout";
import Head from "next/head";
import { ProfileRoomDetailsHOC } from "../../../../hoc/profile-room-details.hoc";

const MyRoom = () => {
  return (
    <Layout>
      <Head>
        <title>my Room </title>
      </Head>
      <ProfileRoomDetailsHOC />
    </Layout>
  );
};

export default MyRoom;
