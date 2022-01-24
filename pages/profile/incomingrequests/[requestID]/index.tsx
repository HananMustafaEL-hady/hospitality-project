import { Layout } from "../../../../components/layout/layout";
import Head from "next/head";
import { IncomingRequestDetailsHOC } from "../../../../hoc/incoming-request-details.hoc";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import nookies from "nookies";
import { Booking } from "../../../../models/bookings.model";
interface Props {
  booking: Booking;
}
const RquestDetails: NextPage<Props> = ({ booking }) => {
  return (
    <Layout>
      <Head>
        <title>Rquest Details </title>
      </Head>
      <IncomingRequestDetailsHOC booking={booking} />
    </Layout>
  );
};

export default RquestDetails;

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
