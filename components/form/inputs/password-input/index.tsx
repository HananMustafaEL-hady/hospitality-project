import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";
import { Alert } from "react-bootstrap";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";
interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  placeholder: string;
  label: string;
  name: string;
  hasError: boolean;
  message?: string;
  validate?: any;
  hasForget?: boolean;
}
export const FormPasswordInput: React.FC<Props> = ({
  register,
  errors,
  placeholder = "",
  label = "",
  name = "",
  hasError = false,
  message,
  validate,
  hasForget,
}) => {
  const [PassType, setPassType] = useState("password");
  function handlerPasswordType() {
    setPassType(PassType == "password" ? "text" : "password");
  }
  return (
    <div className="mb-32">
      <div className="pass-btn ">
        {PassType == "password" ? (
          <i
            className={`fa fa-eye btn  pass-btn__eye `}
            onClick={handlerPasswordType}
          ></i>
        ) : (
          <i
            className="fa fa-eye-slash pass-btn__eye  btn"
            onClick={handlerPasswordType}
          ></i>
        )}
        <label htmlFor={name} className="title-susubsection2">
          {" "}
          {label}
          <span className="text-danger">*</span>
        </label>
        <input
          id={name}
          className={hasError ? `input border-danger ` : "input"}
          type={PassType}
          placeholder={placeholder}
          {...register(name, {
            required: {
              value: true,
              message: "يجب إدخال كلمة المرور ",
            },
            validate,
          })}
          autoComplete="new-password"
        />
      </div>
      {hasError && <p className="text-danger mt-1">{message}</p>}{" "}
      {hasForget && (
        <Link href={"/forgetpassword"}>
          <a>نسيت كلمة المرور !</a>
        </Link>
      )}
    </div>
  );
};
