import Link from "next/link";
import React from "react";
import {
  SubmitHandler,
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form";
import { BtnSubmit } from "../../form/button/btn-submit";
import { FormInput } from "../../form/inputs/form-input";
import { FormPasswordInput } from "../../form/inputs/password-input";
interface Props {
  onSubmitFun: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  isLoading: boolean;
  watch: UseFormWatch<FieldValues>;
}

export const ResetPassword: React.FC<Props> = ({
  onSubmitFun,
  handleSubmit,
  errors,
  register,
  isLoading,
  watch,
}) => {
  const password = watch("password", "");

  return (
    <section className="section-form">
      <div className="">
        <h2 className="login__title">كلمة مرور جديدة</h2>
        <h3 className="title-subsection-gray">أدخل كلمة المرور الجديدة</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmitFun)} className="submit-form mt-32">
        <FormPasswordInput
          register={register}
          errors={errors}
          placeholder="كلمة المرور الجديدة"
          label="كلمة المرور الجديدة"
          name={"password"}
          hasError={Boolean(errors?.password)}
          message={errors?.password?.message}
        />

        <FormPasswordInput
          register={register}
          errors={errors}
          placeholder="تأكيد كلمة المرور الجديدة"
          label="تأكيد كلمة المرور الجديدة"
          name="Confirmpassword"
          hasError={Boolean(errors?.Confirmpassword)}
          message={errors?.Confirmpassword?.message}
          validate={(value: {}) =>
            value == password || "كلمة المرور غير متطابقة "
          }
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
