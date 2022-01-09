import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthOTP from "../components/Auth/OTP";

const OTPhoc = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  async function onSubmitFun(data: any) {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      router.push(`/resetpassword`);
      setIsLoading(false);
    }, 2000);
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
