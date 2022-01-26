import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { HomeHOC } from "../hoc/home.hoc";
import { Roomspage } from "../models/rooms.model";
import axios from "../utils/axios.util";

interface Props {
  Roomspage?: Roomspage;
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
  try {
    const response = await axios.get(`/rooms?pageNumber=1&limit=12`);
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
};

export default Home;
