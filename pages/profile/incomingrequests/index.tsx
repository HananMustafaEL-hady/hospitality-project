import { Layout } from "../../../components/layout/layout";
import Head from "next/head";
import { IncomingRequestsHOC } from "../../../hoc/incoming-request.hoc";
import { GetServerSideProps, NextPage } from "next";
import axios from "../../../utils/axios.util";
import { BookingsPage } from "../../../models/bookings.model";
import { requireAuthentication } from "../../../hoc/require-authentication.hoc";

interface Props {
  bookingsPENDING: BookingsPage;
}

const IncomingRquests: NextPage<Props> = ({ bookingsPENDING }) => {
  return (
    <Layout>
      <Head>
        <title> incoming Rquests </title>
      </Head>
      <IncomingRequestsHOC bookingsPENDING={bookingsPENDING} />
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    try {
      const responsePENDING = await axios.get(
        `/bookings/providers?pageNumber=1&limit=9&status=PENDING`
      );
      const bookingsPENDING = await responsePENDING.data;

      return {
        props: {
          bookingsPENDING,
        },
      };
    } catch {
      return {
        props: {},
      };
    }
  }
);

export default IncomingRquests;
