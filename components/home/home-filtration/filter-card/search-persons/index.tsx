import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  defaultValue?: string | string[];
}

export const Filtercount: React.FC<Props> = ({ register, defaultValue }) => {
  const [state, setstate] = useState(
    defaultValue ? defaultValue : "عدد الأفراد"
  );
  return (
    <div className="grid__item">
      <i
        className="fas fa-user"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        aria-hidden="true"
      ></i>{" "}
      <span>الأفراد</span>
      <select
        className="select-count"
        {...register("count")}
        onChange={(e) => {
          setstate(e.target.value);
        }}
        defaultValue={defaultValue ? defaultValue : 0}
      >
        <option className="d-none" value="1">
          0
        </option>

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>{" "}
      <p className="secondary__title px-1  m-0">{state} </p>
    </div>
  );
};
