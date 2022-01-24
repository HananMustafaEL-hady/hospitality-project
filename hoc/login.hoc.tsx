import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { LoginForm } from "../components/Auth/login/index";
import { Logo } from "../components/logo";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { LoginAPI } from "../api/auth.api";
export const LoginHOC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  async function onSubmitFun(data: any) {
    setIsLoading(true);
    LoginAPI({ username: data.phone, password: data.password }, dispatch);
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
            setError={setError}
          />
          <Logo />
        </section>
      </div>
    </div>
  );
};
