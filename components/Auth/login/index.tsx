import Link from "next/link";
import React from "react";
import { hookFormLogin } from "../../../models/inputs/hook-form-inputs";
import { BtnSubmit } from "../../form/button/btn-submit";
import { FormPasswordInput } from "../../form/inputs/password-input/index";
import { InputPhone } from "../../form/inputs/phone-input";

export const LoginForm: React.FC<hookFormLogin> = ({
  onSubmitFun,
  handleSubmit,
  errors,
  register,
  isLoading,
  watch,
}) => {
  return (
    <div className="login ">
      <div className="mb-32">
        <h2 className="login__title">سجل الدخول الآن</h2>
        <h3 className="title-subsection-gray">
          سجل الدخول .. هناك حجوزات بإنتظارك !
        </h3>
      </div>

      <form className="login__form mb-24">
        <InputPhone
          isRequired={true}
          register={register}
          errors={errors}
          disabled={false}
        />
        <FormPasswordInput
          register={register}
          errors={errors}
          placeholder="أدخل كلمة المرور"
          label="أدخل كلمة المرور"
          name={"password"}
          hasError={Boolean(errors?.password)}
          message={errors?.password?.message}
          hasForget={true}
        />
        <BtnSubmit
          btnclass="login__form__btn btn-primary btn"
          textValue="تسجيل دخول"
          isLoading={isLoading}
          hasErrors={Object.keys(errors).length != 0}
          onSubmit={onSubmitFun}
          handleSubmit={handleSubmit}
        />
      </form>
      <div className="">
        <span className="title-susubsection2">ليس لديك حساب !</span>
        <Link href={"/signup"}>
          <a className="font-14">إنشاء حساب</a>
        </Link>
      </div>
    </div>
  );
};
