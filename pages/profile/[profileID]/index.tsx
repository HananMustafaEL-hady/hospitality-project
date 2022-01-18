import { Layout } from "../../../components/layout/layout";
import Head from "next/head";
import { Profilehoc } from "../../../hoc/profile.hoc";
import { GetServerSideProps, NextPage } from "next";
import axios from "../../../utils/axios.util";
import { Owner } from "../../../models/owner.model";
import { Room, Roomspage } from "../../../models/rooms";
interface Props {
  profile: Owner;
  Roomspage: Roomspage;
}
const Profile: NextPage<Props> = ({ profile, Roomspage }) => {
  console.log(profile);
  return (
    <Layout>
      <Head>
        <title>Profile </title>
      </Head>
      <Profilehoc profile={profile} Roomspage={Roomspage} />
    </Layout>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await axios(`/users/${context.params?.profileID}`);
    const resrooms = await axios(
      `/rooms?pageNumber=1&limit=12&owners=${context.params?.profileID}`
    );

    console.log("resrooms", resrooms);
    const profile = await res.data;
    const Roomspage = await resrooms.data;

    return {
      props: {
        profile,
        Roomspage,
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {},
    };
  }
};
