import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { SignupHOC } from "../hoc/signup.hoc";
import { Room } from "../models/Rooms";
interface Props {
  rooms: [Room];
}
const Signup: NextPage<Props> = () => {
  return (
    <Fragment>
      <Head>
        <title>sign up</title>
      </Head>
      <SignupHOC />
    </Fragment>
  );
};

export default Signup;
