import React from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
interface Props {
  disabled: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
  isRequired: boolean;
  control?: Control<FieldValues>;
}
export const InputPhone: React.FC<Props> = ({
  errors,
  register,
  isRequired,
  disabled,
}) => {
  return (
    <div className="mb-24">
      <label htmlFor="phone" className="title-susubsection2">
        رقم الهاتف <span className="text-danger">*</span>
      </label>
      <input
        id="phone"
        type="tel"
        disabled={disabled}
        className={errors.phone ? `input border-danger ` : "input"}
        {...register("phone", {
          required: {
            value: isRequired,
            message: "يجب إدخال رقم الهاتف",
          },
          pattern: {
            value: /^[\+]2?01[0125][0-9]{8}$/,
            message: "هذا الهاتف غير صالح",
          },
        })}
        placeholder="أدخل رقم الهاتف"
        autoComplete="username"
      />
      {errors.phone && <p className="text-danger">{errors?.phone?.message}</p>}
    </div>
  );
};
