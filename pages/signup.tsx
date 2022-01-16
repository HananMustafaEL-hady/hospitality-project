import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { SignupHOC } from "../hoc/signup.hoc";

const Signup = () => {
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
