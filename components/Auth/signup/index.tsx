import Link from "next/link";
import React from "react";
import { hookFormLogin } from "../../../models/inputs/hook-form-inputs";
import { BtnSubmit } from "../../form/button/btn-submit";
import { EmailInput } from "../../form/inputs/email-input";
import { FormInput } from "../../form/inputs/form-input";
import { FormInputImage } from "../../form/inputs/image-input";
import { FormPasswordInput } from "../../form/inputs/password-input/index";
import { InputPhone } from "../../form/inputs/phone-input";
import { Logo } from "../../logo";

export const SignupForm: React.FC<hookFormLogin> = ({
  onSubmitFun,
  handleSubmit,
  errors,
  register,
  isLoading,
  watch,
  errormessage,
  setError,
  control,
}) => {
  const password = watch("password", "");

  return (
    <div className="row">
      <div className=" login__img signup__img col-6"></div>
      <div className="col-lg-6 col-sm-12 ">
        <section className="container login__section ">
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
                <FormInputImage
                  imagename={"profileImage"}
                  register={register}
                  imagaurl={""}
                />
                {errors?.profileImage?.message && (
                  <p className="text-danger">{errors?.profileImage?.message}</p>
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
                setError={setError}
              />
              <FormInput
                register={register}
                placeholder="أدخل "
                inputtype="text"
                label="رقم الهاتف"
                name="phone"
                hasError={Boolean(errors?.phone)}
                message={errors?.phone?.message}
                Errormessage={"يجب إدخال الهاتف"}
                isRequired={true}
                setError={setError}
              />

              {/* <InputPhone
                isRequired={true}
                register={register}
                errors={errors}
                disabled={false}
              /> */}

              <EmailInput
                register={register}
                placeholder="أدخل البريد الالكتروني"
                inputtype="email"
                label="البريد الالكتروني "
                hasError={Boolean(errors?.email)}
                message={errors?.email?.message}
                Errormessage="يجب إدخال البريد "
                isRequired={true}
                name={"email"}
                setError={setError}
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
              {errormessage ? (
                <p className="text-danger">{errormessage}</p>
              ) : (
                ""
              )}
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
          <Logo />
        </section>
      </div>
    </div>
  );
};
