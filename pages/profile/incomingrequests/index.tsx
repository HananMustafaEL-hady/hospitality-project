import { Layout } from "../../../components/layout/layout";
import Head from "next/head";
import { IncomingRequestsHOC } from "../../../hoc/incoming-request.hoc";
import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import axios from "axios";
import { BookingsPage } from "../../../models/bookings.model";

interface Props {
  bookingsPENDING: BookingsPage;
  bookingsCANCELLED_BY_CLIENT: BookingsPage;
  bookingsREJECTED: BookingsPage;
  bookingsAccepted: BookingsPage;
  bookingsEXPIRED: BookingsPage;
}

const IncomingRquests: NextPage<Props> = ({
  bookingsPENDING,
  bookingsCANCELLED_BY_CLIENT,
  bookingsREJECTED,
  bookingsAccepted,
  bookingsEXPIRED,
}) => {
  return (
    <Layout>
      <Head>
        <title> incoming Rquests </title>
      </Head>
      <IncomingRequestsHOC
        bookingsPENDING={bookingsPENDING}
        bookingsCANCELLED_BY_CLIENT={bookingsCANCELLED_BY_CLIENT}
        bookingsREJECTED={bookingsREJECTED}
        bookingsAccepted={bookingsAccepted}
        bookingsEXPIRED={bookingsEXPIRED}
      />
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  try {
    const responsePENDING = await axios.get(
      `/https://index-hospitality.herokuapp.com/bookings/providers?pageNumber=1&limit=9&status=PENDING`,
      {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : "",
        },
      }
    );
    const bookingsPENDING = await responsePENDING.data;
    const responseCANCELLED_BY_CLIENT = await axios.get(
      `/https://index-hospitality.herokuapp.com/bookings/providers?pageNumber=1&limit=9&status=CANCELLED_BY_CLIENT`,
      {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : "",
        },
      }
    );
    const bookingsCANCELLED_BY_CLIENT = await responseCANCELLED_BY_CLIENT.data;
    const responseREJECTED = await axios.get(
      `/https://index-hospitality.herokuapp.com/bookings/providers?pageNumber=1&limit=9&status=REJECTED`,
      {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : "",
        },
      }
    );
    const bookingsREJECTED = await responseREJECTED.data;
    const responseAccepted = await axios.get(
      `/https://index-hospitality.herokuapp.com/bookings/providers?pageNumber=1&limit=9&status=Accepted`,
      {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : "",
        },
      }
    );
    const bookingsAccepted = await responseAccepted.data;

    const responseEXPIRED = await axios.get(
      `/https://index-hospitality.herokuapp.com/bookings/providers?pageNumber=1&limit=9&status=EXPIRED`,
      {
        headers: {
          Authorization: cookies.token ? `Bearer ${cookies.token}` : "",
        },
      }
    );
    const bookingsEXPIRED = await responseEXPIRED.data;
    return {
      props: {
        bookingsPENDING,
        bookingsCANCELLED_BY_CLIENT,
        bookingsREJECTED,
        bookingsAccepted,
        bookingsEXPIRED,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default IncomingRquests;
