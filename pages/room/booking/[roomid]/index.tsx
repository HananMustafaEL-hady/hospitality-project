import { RoomReservationhoc } from "../../../../hoc/room-reservation.hoc";
import { Layout } from "../../../../components/layout/layout";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "../../../../hoc/require-authentication.hoc";
const Booking = () => {
  return (
    <Layout>
      <Head>
        <title>booking Room </title>
      </Head>
      <RoomReservationhoc />
    </Layout>
  );
};

export default Booking;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    return {
      props: {},
    };
  }
);
