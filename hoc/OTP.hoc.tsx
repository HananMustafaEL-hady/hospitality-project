import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import SignupAPI from "../api/auth.api";
import AuthOTP from "../components/Auth/OTP";
import useSignup from "../hook/signup.hook";
import { authUser } from "../models/auth.model";
interface Props {
  formdata: authUser;
}
const OTPhoc: React.FC<Props> = ({ formdata }) => {
  console.log(formdata?.phone, formdata);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  // const [statecode, setstatecode] = useState("");
  // const [statedata, setstatdata] = useState("");
  // const { data, loading, error } = useSignup(statedata, statecode);

  async function onSubmitFun(data: any) {
    setIsLoading(true);
    const code = `${data.code4}${data.code3}${data.code2}${data.code1}`;
    await SignupAPI(formdata, code, dispatch);
    setIsLoading(false);
  }
  return (
    <AuthOTP
      onSubmitFun={onSubmitFun}
      handleSubmit={handleSubmit}
      errors={errors}
      register={register}
      isLoading={isLoading}
    />
  );
};

export default OTPhoc;
