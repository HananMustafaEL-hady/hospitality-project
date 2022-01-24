import React, { Fragment, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Logo } from "../components/logo";
import { useRouter } from "next/router";
import { SignupForm } from "../components/Auth/signup";
import OTPhoc from "./OTP.hoc";
import { authUser } from "../models/auth.model";
import { OTPsend } from "../api/otp.api";

export const SignupHOC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [iSSignupform, setISSignupform] = useState(true);
  const [OTPResponse, setOTPResponse] = useState();
  const [dataFormState, SetDataFormState] = useState<authUser>({
    email: "",
    name: "",
    phone: "",
    profileImage: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
    control,
    setError,
    watch,
  } = useForm();
  const router = useRouter();

  async function onSubmitFun(data: any) {
    setIsLoading(true);
    await OTPsend(data.phone, setOTPResponse, setISSignupform);
    const { email, name, password, phone } = data;
    const profileImage = data?.profileImage ? data.profileImage[0] : "";
    SetDataFormState({ email, name, password, phone, profileImage });

    setIsLoading(false);
  }
  return (
    <Fragment>
      {iSSignupform ? (
        <Fragment>
          <SignupForm
            onSubmitFun={onSubmitFun}
            handleSubmit={handleSubmit}
            errors={errors}
            register={register}
            isLoading={isLoading}
            watch={watch}
            errormessage={OTPResponse}
            setError={setError}
            control={control}
          />
        </Fragment>
      ) : (
        <OTPhoc formdata={dataFormState} />
      )}
    </Fragment>
  );
};
