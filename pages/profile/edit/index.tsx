import { ProfileEdithoc } from "../../../hoc/profile-edit.hoc";
import { Layout } from "../../../components/layout/layout";
import Head from "next/head";
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
