import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../../../components/layout/layout";
import { UserReservationsDetailsHOC } from "../../../../hoc/user-reservations-details.hoc";
import { Booking } from "../../../../models/bookings.model";
import axios from "axios";
import nookies from "nookies";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);

  try {
    const res = await axios(
      `/https://index-hospitality.herokuapp.com/rooms/${context.params?.reservationID}`,
      {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : "",
        },
      }
    );
    const booking = await res.data;
    return { props: { booking } };
  } catch (error) {
    return { props: {} };
  }
};
