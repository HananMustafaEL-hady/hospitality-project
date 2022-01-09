import { Chathoc } from "../../hoc/chat.hoc";
import { Layout } from "../../components/layout/layout";
import Head from "next/head";
const Chat = () => {
  return (
    <Layout>
      <Head>
        <title>Chat</title>
      </Head>
      <Chathoc />;
    </Layout>
  );
};

export default Chat;
