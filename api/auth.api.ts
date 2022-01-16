import { Dispatch } from "@reduxjs/toolkit";
import axios from "../utils/axios.util";
import React, { useEffect, useState } from "react";
import { getFormData } from "../components/FormDataFun";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { addAuthUser, authFail } from "../slices/auth.slices";

export default async function SignupAPI(
  Data: any,
  otp: string,
  dispatch: Dispatch
) {
  const { phone } = Data;
  console.log(phone);
  const formData = getFormData(Data);

  try {
    const response1 = await axios.post("/otp/verify", { phone, otp });
    console.log(formData);
    const response2 = await axios.post("/auth/signup", formData);
    console.log(response2.data);
    dispatch(
      addAuthUser({
        user: response2.data.user,
        token: response2.data.token,
      })
    );
    Router.push(`/`);
  } catch (err: any) {
    console.log(err);
    authFail(err?.message);
  }
}
