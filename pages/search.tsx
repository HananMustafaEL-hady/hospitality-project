import axios from "../utils/axios.util";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { RoomsData } from "../db";
import { SearchResulthoc } from "../hoc/search-result.hoc";
import { Roomspage } from "../models/rooms";
interface Props {
  Roomspage?: Roomspage;
}

const Home: NextPage<Props> = ({ Roomspage }) => {
  return (
    <Layout>
      <Head>
        <title>Search</title>
      </Head>
      <SearchResulthoc initialData={Roomspage} />
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { longitude, latitude, capacity } = context.query;
  let url = ``;
  try {
    if (longitude && latitude) {
      url = `/rooms?pageNumber=1&limit=12&longitude=${longitude}&latitude=${latitude}&minCapacity=${capacity}&maxCapacity=${capacity}`;
    } else {
      url = `/rooms?pageNumber=1&limit=12&minCapacity=${capacity}&maxCapacity=${capacity}`;
    }
    const response = await axios(url);
    const Roomspage = await response.data;
    return {
      props: {
        Roomspage,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Home;
