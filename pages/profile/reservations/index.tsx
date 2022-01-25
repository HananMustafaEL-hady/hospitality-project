import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import nookies from "nookies";
import { Layout } from "../../../components/layout/layout";
import { requireAuthentication } from "../../../hoc/require-authentication.hoc";
import { UserReservationsHOC } from "../../../hoc/user-reservations.hoc";
import { BookingsPage } from "../../../models/bookings.model";
import axios from "../../../utils/axios.util";
import { fetcher } from "../../../utils/fetcher.utils";

interface Props {
  bookingsPENDING: BookingsPage;
}
const clientbookings: NextPage<Props> = ({ bookingsPENDING }) => {
  return (
    <Layout>
      <Head>
        <title>Your bookings </title>
      </Head>
      <UserReservationsHOC bookingsPENDING={bookingsPENDING} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  try {
    const pending = await fetcher(
      `/bookings/clients?pageNumber=1&limit=9&status=PENDING`,
      cookies.token
    );

    return {
      props: {
        bookingsPENDING: pending,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default clientbookings;
