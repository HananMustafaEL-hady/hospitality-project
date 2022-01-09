import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { ResetPasswordHOC } from "../hoc/reset-password.hoc";
const forgetpassword = () => {
  return (
    <Layout>
      <Head>
        <title>Reset Password</title>
      </Head>
      <ResetPasswordHOC />
    </Layout>
  );
};

export default forgetpassword;
