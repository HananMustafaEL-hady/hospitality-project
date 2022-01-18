import { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../../components/layout/layout";
import { RoomsData } from "../../../db";
import { UserReservationsHOC } from "../../../hoc/user-reservations.hoc";
import axios from "../../../utils/axios.util";

interface Props {
  rooms: [];
}
const ownerProfile: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Head>
        <title>owner profile</title>
      </Head>
      {/* <UserReservationsHOC Rooms={[]} /> */}
    </Layout>
  );
};
export async function getStaticProps() {
  try {
    const response = await axios.get(`/rooms?pageNumber=1&limit=12`);

    console.log(response);
    const Roomspage = await response.data;
    return {
      props: {
        Roomspage,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
}

export default ownerProfile;
