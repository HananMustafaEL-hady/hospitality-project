import { ProfileEdithoc } from "../../../hoc/profile-edit.hoc";
import { Layout } from "../../../components/layout/layout";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "../../../hoc/require-authentication.hoc";
const editInformation = () => {
  return (
    <Layout>
      <Head>
        <title> Edit Profile </title>
      </Head>
      <ProfileEdithoc />
    </Layout>
  );
};

export default editInformation;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    return {
      props: {},
    };
  }
);
