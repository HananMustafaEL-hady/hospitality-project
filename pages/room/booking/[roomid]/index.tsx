import { RoomReservationhoc } from "../../../../hoc/room-reservation.hoc";
import { Layout } from "../../../../components/layout/layout";
import Head from "next/head";
const Booing = () => {
  return (
    <Layout>
      <Head>
        <title>booking Room </title>
      </Head>
      <RoomReservationhoc />
    </Layout>
  );
};

export default Booing;
