import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../../../components/layout/layout";
import { UserReservationsDetailsHOC } from "../../../../hoc/user-reservations-details.hoc";
import { Booking } from "../../../../models/bookings.model";
import axios from "../../../../utils/axios.util";
import nookies from "nookies";
import { requireAuthentication } from "../../../../hoc/require-authentication.hoc";

interface Props {
  booking: Booking;
}
const bookingDetails: NextPage<Props> = ({ booking }) => {
  return (
    <Layout>
      <Head>
        <title>Booking Details</title>
      </Head>
      <UserReservationsDetailsHOC booking={booking} />
    </Layout>
  );
};

export default bookingDetails;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    const cookies = nookies.get(context);

    try {
      const res = await axios(`/bookings/${context.params?.reservationID}`);
      const booking = await res.data;
      return { props: { booking } };
    } catch (error) {
      return { props: {} };
    }
  }
);
