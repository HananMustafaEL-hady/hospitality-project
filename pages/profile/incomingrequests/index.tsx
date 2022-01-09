import { Layout } from "../../../components/layout/layout";
import Head from "next/head";
import { IncomingRequestsHOC } from "../../../hoc/incoming-request.hoc";
import { NextPage } from "next";
import { Room } from "../../../models/Rooms";
import { RoomsData } from "../../../db";

interface Props {
  rooms: [Room];
}

const IncomingRquests: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Head>
        <title> incoming Rquests </title>
      </Head>
      <IncomingRequestsHOC Rooms={props.rooms} />
    </Layout>
  );
};
export async function getStaticProps() {
  // const response = await fetch("http://localhost:3000/Rooms");
  // const rooms = await response.json();
  const rooms = RoomsData;

  return {
    props: {
      rooms,
    },
  };
}

export default IncomingRquests;
