import React from "react";
import {
  Control,
  FieldValues,
  useFieldArray,
  UseFormRegister,
} from "react-hook-form";
import { FormInputImage } from "../../../form/inputs/image-input";
interface props {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, object>;
}
export const FieldArrayImage: React.FC<props> = ({ register, control }) => {
  const { fields, append } = useFieldArray({ name: "images", control });
  return (
    <div className="">
      <h4 className="title-susubsection2 d-inline-block">أضف صور للغرفة</h4>
      {fields.length < 5 && (
        <button type="button" className="btn" onClick={() => append({})}>
          <i className="fas fa-plus"></i>
        </button>
      )}
      <div className="d-flex">
        {fields.map((item, index) => (
          <FormInputImage
            register={register}
            imagename={`images.${index}.images`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
