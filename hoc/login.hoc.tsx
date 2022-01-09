import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { LoginForm } from "../components/Auth/login/index";
import { Logo } from "../components/logo";
import { useRouter } from "next/router";
export const LoginHOC = () => {
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
      router.push(`/`);
      setIsLoading(false);
    }, 2000);
  }
  return (
    <div className="row">
      <div className=" login__img col-6"></div>
      <div className="col-lg-6 col-sm-12">
        <section className="container login__section ">
          <LoginForm
            onSubmitFun={onSubmitFun}
            handleSubmit={handleSubmit}
            errors={errors}
            register={register}
            isLoading={isLoading}
            watch={watch}
          />
          <Logo />
        </section>
      </div>
    </div>
  );
};
