import React from "react";
import { hookFormInputs } from "../../../models/hook-form-inputs";
import { BtnSubmit } from "../../form/button/btn-submit";
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
          أدخل كود التحقق لإسترجاع كلمة المرور
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmitFun)} className="submit-form  ">
        <div className="mt-32 section-otp">
          <input
            className="input-opt"
            type="text"
            {...register(`code1`, {
              required: {
                value: true,
                message: "يجب إدخال الكود كامل",
              },
            })}
          />
          <input
            className="input-opt"
            type="text"
            {...register(`code2`, {
              required: {
                value: true,
                message: "يجب إدخال الكود كامل",
              },
            })}
          />{" "}
          <input
            className="input-opt"
            type="text"
            {...register(`code3`, {
              required: {
                value: true,
                message: "يجب إدخال الكود كامل",
              },
            })}
          />{" "}
          <input
            className="input-opt"
            type="text"
            {...register(`code4`, {
              required: {
                value: true,
                message: "يجب إدخال الكود كامل",
              },
            })}
          />{" "}
          <input
            className="input-opt"
            type="text"
            {...register(`code5`, {
              required: {
                value: true,
                message: "يجب إدخال الكود كامل",
              },
            })}
          />
          <p className="input__error"> {errors?.PhoneNumber?.message}</p>
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
