import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { hookformCount } from "../../../../models/hook-form-inputs";
export const FormCounterInput: React.FC<hookformCount> = ({
  register,
  setValue,
}) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <input type="hidden" {...register("countpersons")} value={count} />

      <Button
        variant="default"
        className={` counterInput p-0  ${count == 0 ? "disabled" : ""}`}
        onClick={() => {
          setCount((prevcount) => prevcount - 1);
          setValue("countpersons", count - 1);
        }}
      >
        <i className="fas fa-minus"></i>
      </Button>

      <span className="mx-3"> {count} </span>

      <Button
        className={`counterInput  p-0 btn-default `}
        onClick={() => {
          setCount((prevcount) => prevcount + 1);
          setValue("countpersons", count + 1);
        }}
      >
        <i className="fas fa-plus"></i>
      </Button>
    </div>
  );
};
