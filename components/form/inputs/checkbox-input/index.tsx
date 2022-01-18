import tr from "date-fns/esm/locale/tr/index.js";
import React, { useState } from "react";
import { hookformCheckbox } from "../../../../models/inputs/hook-form-inputs";

export const FormCheckboxInput: React.FC<hookformCheckbox> = ({
  inputValue,
  inputPlaceholder,
  register,
  iconClass,
  isRequired,
}) => {
  return (
    <div className="d-inline-block ml-8 mb-8">
      <input
        type="checkbox"
        {...register("service", {
          required: {
            value: isRequired,
            message: "يجب إدخال خدمات ",
          },
        })}
        id={inputValue}
        className="d-none input-checkbox"
        value={inputValue}
      />
      <label htmlFor={inputValue} className="CheckboxInput">
        <i className={iconClass}></i>
        <span>{inputPlaceholder}</span>
      </label>
    </div>
  );
};
