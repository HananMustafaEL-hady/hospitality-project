import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { LoginForm } from "../components/Auth/login/index";
import { Logo } from "../components/logo";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { LoginAPI } from "../api/auth.api";
import { Toast } from "../components/toast";
import { Alert } from "react-bootstrap";
import { ToastError } from "../components/toast-error";
import { AxiosError } from "axios";

export const LoginHOC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState<AxiosError>();
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
    LoginAPI(
      { username: data.phone, password: data.password },
      dispatch,
      setErrorMessage
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }
  return (
    <div className="row">
      {errormessage ? <ToastError error={errormessage} /> : ""}
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
        {/* {errormessage ? <Alert variant="danger">{errormessage}</Alert> : ""} */}
      </div>
    </div>
  );
};
