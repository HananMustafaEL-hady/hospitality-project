import { Layout } from "../../../../components/layout/layout";
import Head from "next/head";
import { IncomingRequestDetailsHOC } from "../../../../hoc/incoming-request-details.hoc";

const RquestDetails = () => {
  return (
    <Layout>
      <Head>
        <title>Rquest Details </title>
      </Head>
      <IncomingRequestDetailsHOC />
    </Layout>
  );
};

export default RquestDetails;
