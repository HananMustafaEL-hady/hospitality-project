import Link from "next/link";
import React from "react";
import { hookFormLogin } from "../../../models/inputs/hook-form-inputs";
import { BtnSubmit } from "../../form/button/btn-submit";
import { FormInput } from "../../form/inputs/form-input";
import { FormInputImage } from "../../form/inputs/image-input";
import { FormPasswordInput } from "../../form/inputs/password-input/index";

export const SignupForm: React.FC<hookFormLogin> = ({
  onSubmitFun,
  handleSubmit,
  errors,
  register,
  isLoading,
  watch,
}) => {
  const password = watch("password", "");

  return (
    <div className="login signup">
      <div className="mb-32">
        <h2 className="login__title">سجل حسابك الآن</h2>
        <h3 className="title-subsection-gray">
          سجل حسابك وإحجز الغرف .. أو إعرض غرفك للحجز
        </h3>
      </div>

      <form className="login__form mb-24">
        <div className="">
          <h4 className="title-susubsection2">
            إختر صورة
            <span className="text-danger">*</span>
          </h4>
          <FormInputImage imagename={"image"} register={register} />
          {errors?.image?.message && (
            <p className="text-danger">{errors?.image?.message}</p>
          )}
        </div>
        <FormInput
          register={register}
          placeholder="أدخل الإسم"
          inputtype="text"
          label="الإسم"
          name="name"
          hasError={Boolean(errors?.name)}
          message={errors?.name?.message}
          Errormessage={"يجب إدخال الإسم"}
          isRequired={true}
        />

        <FormInput
          register={register}
          placeholder="أدخل رقم الهاتف"
          inputtype="tel"
          label="  رقم الهاتف"
          hasError={Boolean(errors?.phonenumber)}
          message={errors?.phonenumber?.message}
          Errormessage="يجب إدخال رقم الهاتف"
          isRequired={true}
          name={"phonenumber"}
        />

        <FormPasswordInput
          register={register}
          errors={errors}
          placeholder="أدخل كلمة المرور"
          label="أدخل كلمة المرور"
          name={"password"}
          hasError={Boolean(errors?.password)}
          message={errors?.password?.message}
        />
        <FormPasswordInput
          register={register}
          errors={errors}
          placeholder="تأكيد كلمة المرور "
          label="تأكيد كلمة المرور "
          name="Confirmpassword"
          hasError={Boolean(errors?.Confirmpassword)}
          message={errors?.Confirmpassword?.message}
          validate={(value: {}) =>
            value == password || "كلمة المرور غير متطابقة "
          }
        />
        <BtnSubmit
          btnclass="login__form__btn btn-primary btn"
          textValue="تسجيل دخول"
          isLoading={isLoading}
          hasErrors={Object.keys(errors).length != 0}
          onSubmit={onSubmitFun}
          handleSubmit={handleSubmit}
        />
        {console.log("errors", errors)}
      </form>
      <div className="">
        <span className="title-susubsection2"> لديك حساب بالفعل !</span>
        <Link href={"/login"}>
          <a className="font-14"> تسجيل دخول</a>
        </Link>
      </div>
    </div>
  );
};
