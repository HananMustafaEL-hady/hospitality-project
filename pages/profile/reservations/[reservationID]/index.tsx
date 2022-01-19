import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../../../components/layout/layout";
import { UserReservationsDetailsHOC } from "../../../../hoc/user-reservations-details.hoc";
import axios from "../../../../utils/axios.util";

const bookingDetails = ({}) => {
  return (
    <Layout>
      <Head>
        <title>Booking Details</title>
      </Head>
      <UserReservationsDetailsHOC />
    </Layout>
  );
};

export default bookingDetails;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const res = await axios(`/rooms/${context.params?.reservationID}`);
//     const room = await res.data;
//     return { props: { room } };
//   } catch (error) {
//     return { props: {} };
//   }
// };
