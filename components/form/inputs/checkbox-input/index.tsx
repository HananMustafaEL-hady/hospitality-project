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
  const [isChecked, SetisChecked] = useState(false);
  return (
    <div className="d-inline-block ml-8 mb-8">
      <input
        type="checkbox"
        {...register("services", {
          required: {
            value: isRequired,
            message: "يجب إدخال خدمات ",
          },
        })}
        id={inputValue}
        className="d-none"
        value={inputValue}
      />
      <label
        htmlFor={inputValue}
        className={
          isChecked ? "CheckboxInput CheckboxInput__active" : "CheckboxInput"
        }
        onClick={() => SetisChecked(!isChecked)}
      >
        <i className={iconClass}></i>
        <span>{inputPlaceholder}</span>
      </label>
    </div>
  );
};
