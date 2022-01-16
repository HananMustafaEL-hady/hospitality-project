import axios from "../utils/axios.util";
import React, { useEffect, useState } from "react";
import { getFormData } from "../components/FormDataFun";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { addAuthUser, authFail } from "../slices/auth.slices";

export default function useSignup(Data: any, OTPCode: string) {
  const { phone } = Data;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formData = getFormData(Data);

  useEffect(() => {
    if (Data && OTPCode) {
      (async function () {
        try {
          setLoading(true);
          const response1 = await axios.post("/otp/verify", { phone, OTPCode });
          console.log(formData);
          const response2 = await axios.post("", formData);
          console.log(response2.data);
          dispatch(
            addAuthUser({
              user: response2.data.user,
              token: response2.data.token,
            })
          );
          Router.push(`/`);
          setData(response2.data);
        } catch (err: any) {
          console.log(err);
          setError(err?.message);
          authFail(err?.message);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [Data]);
  return { data, error, loading };
}
