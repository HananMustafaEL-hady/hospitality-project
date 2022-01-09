import Link from "next/link";
import React from "react";
import {
  SubmitHandler,
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import { BtnSubmit } from "../../form/button/btn-submit";
import { FormInput } from "../../form/inputs/form-input";
interface Props {
  onSubmitFun: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  isLoading: boolean;
}

export const ForgetPassword: React.FC<Props> = ({
  onSubmitFun,
  handleSubmit,
  errors,
  register,
  isLoading,
}) => {
  return (
    <section className="section-form">
      <div className="">
        <h2 className="login__title">نسيت كلمة المرور !</h2>
        <h3 className="title-subsection-gray">أدخل رقم الهاتف لإسترجاعها</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmitFun)} className="submit-form">
        <FormInput
          register={register}
          placeholder="أدخل رقم الهاتف"
          inputtype="tel"
          label="  رقم الهاتف"
          hasError={Boolean(errors?.phonenumber)}
          message={errors?.phonenumber?.message}
          name="phonenumber"
          Errormessage="يجب إدخال رقم الهاتف"
          isRequired={true}
        />
        <BtnSubmit
          btnclass="login__form__btn btn-primary btn"
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
