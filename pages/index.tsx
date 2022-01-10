import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layout/layout";
import { HomeHOC } from "../hoc/home.hoc";
import { Roomspage } from "../models/rooms";

interface Props {
  Roomspage: Roomspage;
}
const Home: NextPage<Props> = ({ Roomspage }) => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <HomeHOC initialData={Roomspage} />
    </Layout>
  );
};
export const getServerSideProps = async (context: {
  query: { page: string };
}) => {
  const page = context.query.page;
  const response = await fetch(
    `https://index-hospitality.herokuapp.com/rooms?pageNumber=${1}&limit=12`
  );
  console.log(response);
  const Roomspage = await response.json();
  return {
    props: {
      Roomspage,
    },
  };
};

export default Home;
