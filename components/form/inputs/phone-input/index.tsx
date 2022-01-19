import React from "react";
import { FormInputProps } from "../../../../models/inputs/hook-form-inputs";

export const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  inputtype,
  label,
  hasError,
  message,
  register,
  name,
  Errormessage,
  isRequired,
}) => {
  return (
    <div className="mb-24">
      <label htmlFor={name} className="title-susubsection2">
        {label} <span className="text-danger">*</span>
      </label>
      <input
        id={name}
        type={inputtype}
        className={hasError ? `input border-danger ` : "input"}
        {...register(name, {
          required: {
            value: isRequired,
            message: Errormessage,
          },
          // pattern: {
          //   value:
          //     name == "phoneNumber"
          //       ? /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/
          //       : /[A-Za-z_][A-Za-z_0-9]/,
          //   message: "يجب إدخال رقم هاتف صحيح",
          // },
        })}
        placeholder={placeholder}
        autoComplete="username"
      />
      {hasError && <p className="text-danger">{message}</p>}
    </div>
  );
};
