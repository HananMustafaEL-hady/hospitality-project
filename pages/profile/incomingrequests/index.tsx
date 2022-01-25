import { Layout } from "../../../components/layout/layout";
import Head from "next/head";
import { IncomingRequestsHOC } from "../../../hoc/incoming-request.hoc";
import { GetServerSideProps, NextPage } from "next";
import { BookingsPage } from "../../../models/bookings.model";
import { fetcher } from "../../../utils/fetcher.utils";
import nookies from "nookies";

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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  try {
    const pending = await fetcher(
      "/bookings/providers?limit=9&pageNumber=1&status=PENDING",
      cookies.token
    );
    return {
      props: {
        bookingsPENDING: pending,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default IncomingRquests;
