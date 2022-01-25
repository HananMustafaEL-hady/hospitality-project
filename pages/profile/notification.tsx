import axios from "../../utils/axios.util";
import Head from "next/head";
import { Layout } from "../../components/layout/layout";
import { NotificationHOC } from "../../hoc/notification.hoc";
import { Notificationpage } from "../../models/notification.model";
import { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import { requireAuthentication } from "../../hoc/require-authentication.hoc";

interface Props {
  notificationpage?: Notificationpage;
}
const notification: NextPage<Props> = ({ notificationpage }) => {
  return (
    <Layout>
      <Head>
        <title>Notifications </title>
      </Head>
      <NotificationHOC initialData={notificationpage} />
    </Layout>
  );
};

export default notification;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (context) => {
    const cookies = nookies.get(context);
    try {
      const response = await axios.get(`/notifications?pageNumber=1&limit=12`);

      const notificationpage = await response.data;
      return {
        props: {
          notificationpage,
        },
      };
    } catch {
      return {
        props: {},
      };
    }
  }
);
