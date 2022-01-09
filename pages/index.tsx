import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layout/layout";
import { RoomsData } from "../db";
import { Homehoc } from "../hoc/home.hoc";
import { Room } from "../models/Rooms";
interface Props {
  rooms: [Room];
}
const Home: NextPage<Props> = (props) => {
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Homehoc Rooms={props.rooms} />
    </Layout>
  );
};
export async function getStaticProps() {
  // const response = await fetch('http://localhost:3000/Rooms')
  // const rooms = await response.json();
  const rooms = RoomsData;
  return {
    props: {
      rooms,
    },
  };
}

export default Home;
