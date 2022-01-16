import React, { Fragment } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
interface props {
  name: string;
  register: UseFormRegister<FieldValues>;
  hasError: boolean;
  errorMessage: string;
}
export const OTPinput = ({ name, register, hasError, errorMessage }: props) => {
  return (
    <div>
      <input
        className="input-opt"
        type="text"
        {...register(`${name}`, {
          required: {
            value: true,
            message: "يجب إدخال الكود كامل",
          },
        })}
      />
      {hasError ? <p className="input__error"> {errorMessage}</p> : ""}
    </div>
  );
};
