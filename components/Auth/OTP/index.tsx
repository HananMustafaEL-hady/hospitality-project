import React from "react";
import { hookFormInputs } from "../../../models/inputs/hook-form-inputs";
import { BtnSubmit } from "../../form/button/btn-submit";
import { OTPinput } from "../../form/inputs/opt-input";
const AuthOTP: React.FC<hookFormInputs> = ({
  onSubmitFun,
  handleSubmit,
  errors,
  register,
  isLoading,
}) => {
  return (
    <section className="section-form">
      <div className="d-flex flex-column align-items-center ">
        <h2 className="login__title">كود التحقق !</h2>
        <h3 className="title-subsection-gray">
          أدخل كود التحقق لإستكمال عملية التسجيل
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmitFun)} className="submit-form  ">
        <div className="mt-32 section-otp">
          <OTPinput
            name="code1"
            register={register}
            hasError={Boolean(errors?.code1)}
            errorMessage={errors?.code1?.message}
          />
          <OTPinput
            name="code2"
            register={register}
            hasError={Boolean(errors?.code2)}
            errorMessage={errors?.code2?.message}
          />{" "}
          <OTPinput
            name="code3"
            register={register}
            hasError={Boolean(errors?.code3)}
            errorMessage={errors?.code3?.message}
          />{" "}
          <OTPinput
            name="code4"
            register={register}
            hasError={Boolean(errors?.code4)}
            errorMessage={errors?.code4?.message}
          />
        </div>
        <BtnSubmit
          btnclass="login__form__btn btn-primary btn mt-32"
          textValue=" تأكيد"
          isLoading={isLoading}
          hasErrors={Object.keys(errors).length != 0}
          onSubmit={onSubmitFun}
          handleSubmit={handleSubmit}
        />
      </form>
    </section>
  );
};

export default AuthOTP;
