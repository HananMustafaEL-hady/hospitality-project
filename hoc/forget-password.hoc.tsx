import React, { useState } from "react";
import { ForgetPassword } from "../components/Auth/forget-password";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useRouter } from "next/router";
export const ForgetPasswordHOC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm();
  const router = useRouter();

  async function onSubmitFun(data: any) {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      router.push(`/OTP`);
      setIsLoading(false);
    }, 2000);
  }
  return (
    <section>
      <ForgetPassword
        onSubmitFun={onSubmitFun}
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        isLoading={isLoading}
      />
    </section>
  );
};
