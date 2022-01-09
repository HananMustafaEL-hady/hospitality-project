import { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../../../../components/layout/layout";
import { UserReservationsDetailsHOC } from "../../../../hoc/user-reservations-details.hoc";

const ownerProfile = () => {
  return (
    <Layout>
      <Head>
        <title>owner profile</title>
      </Head>
      <UserReservationsDetailsHOC />
    </Layout>
  );
};

export default ownerProfile;
