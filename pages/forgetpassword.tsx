import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { ForgetPasswordHOC } from "../hoc/forget-password.hoc";
const forgetpassword = () => {
  return (
    <Layout>
      <Head>
        <title>Forget Password</title>
      </Head>
      <ForgetPasswordHOC />
    </Layout>
  );
};

export default forgetpassword;
