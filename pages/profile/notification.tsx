import Head from "next/head";
import { Layout } from "../../components/layout/layout";
import { NotificationHOC } from "../../hoc/notification.hoc";

const notification = () => {
  return (
    <Layout>
      <Head>
        <title>Notifications </title>
      </Head>
      <NotificationHOC />
    </Layout>
  );
};

export default notification;
