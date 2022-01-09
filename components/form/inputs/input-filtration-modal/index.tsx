import React from "react";
import { hookformFiltrationInput } from "../../../../models/hook-form-inputs";

export const FormFiltrationInput: React.FC<hookformFiltrationInput> = ({
  register,
  name,
  placeholder,
}) => {
  return (
    <div className="input-filter">
      <p>{placeholder}</p>
      <div className="d-flex flex-row justify-content-between ">
        <input placeholder="00" type="number" {...register(name)} />
        <span>جنية</span>
      </div>
    </div>
  );
};
