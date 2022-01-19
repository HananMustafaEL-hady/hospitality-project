import { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../../components/layout/layout";
import { RoomsData } from "../../../db";
import { UserReservationsHOC } from "../../../hoc/user-reservations.hoc";
import { BookingsPage } from "../../../models/bookings.model";
import axios from "../../../utils/axios.util";

interface Props {
  bookings: BookingsPage;
}
const ownerProfile: NextPage<Props> = ({ bookings }) => {
  return (
    <Layout>
      <Head>
        <title>Your bookings </title>
      </Head>
      <UserReservationsHOC bookings={bookings} />
    </Layout>
  );
};
export async function getStaticProps() {
  try {
    const response = await axios.get(
      `/https://index-hospitality.herokuapp.com/bookings/clients?pageNumber=1&limit=9`
    );

    console.log(response);
    const bookings = await response.data;
    return {
      props: {
        bookings,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
}

export default ownerProfile;
