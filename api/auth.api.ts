import { Dispatch } from "@reduxjs/toolkit";
import axios from "../utils/axios.util";
import React, { useEffect, useState } from "react";
import { getFormData } from "../components/FormDataFun";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { addAuthUser, authFail } from "../slices/auth.slices";

export async function SignupAPI(Data: any, otp: string, dispatch: Dispatch) {
  const { phone } = Data;
  const formData = getFormData(Data);

  try {
    const response1 = await axios.post("/otp/verify", { phone, otp });
    const response2 = await axios.post("/auth/signup", formData);
    dispatch(
      addAuthUser({
        user: response2.data.user,
        token: response2.data.token,
      })
    );
    Router.push(`/`);
  } catch (err: any) {
    authFail(err?.message);
  }
}

export async function LoginAPI(Data: any, dispatch: Dispatch) {
  try {
    const response2 = await axios.post("/auth/login", Data);
    dispatch(
      addAuthUser({
        user: response2.data.user,
        token: response2.data.token,
      })
    );
    Router.push(`/`);
  } catch (err: any) {
    authFail(err?.message);
  }
}
