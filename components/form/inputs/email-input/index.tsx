import axios from "../../../../utils/axios.util";
import React, { useState } from "react";
import { FormInputProps } from "../../../../models/inputs/hook-form-inputs";

export const EmailInput: React.FC<FormInputProps> = ({
  label,
  hasError,
  message,
  register,
  setError,
  isRequired,
}) => {
  const [state, setstate] = useState(false);
  console.log(setError);
  if (state) {
    setError &&
      setError(
        "email",
        {
          type: "server",
          message: "تم استخدام هذا البريد من قبل",
        },
        { shouldFocus: true }
      );
  }
  return (
    <div className="mb-24">
      <label htmlFor="email" className="title-susubsection2">
        {label} <span className="text-danger">*</span>
      </label>
      <input
        id="email"
        type="email"
        className={hasError ? `input border-danger ` : "input"}
        {...register("email", {
          required: {
            value: isRequired,
            message: "يجب إدخال البريد الالكتروني",
          },
          minLength: {
            value: 8,
            message: "بالرجاء كتابة بريد الكتروني صحيح",
          },
          maxLength: {
            value: 120,
            message: "بالرجاء كتابة بريد الكتروني صحيح",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "هذا البريد الإلكتروني غير صالح ",
          },
          validate: {
            asyncValidate: async (e) => {
              try {
                const res = await axios.post("/users/checkEmail", { email: e });
                const data = await res.data;
                setstate(data);
                return !data || "تم استخدام هذا البريد من قبل";
              } catch (error) {
                // return false;
              }
            },
          },
        })}
        placeholder="أدخل البريد الالكتروني"
        autoComplete="email"
      />
      {hasError && <p className="text-danger">{message}</p>}
    </div>
  );
};
