import React from "react";
import {
  Control,
  FieldValues,
  useFieldArray,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { image } from "../../../../models/image.model";
import { Room } from "../../../../models/rooms";
import { FormInputImage } from "../../../form/inputs/image-input";

interface props {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, object>;
}

export const FieldArrayImage: React.FC<props> = ({ register, control }) => {
  const { fields, append, remove } = useFieldArray({ control, name: "images" });

  return (
    <div className="">
      <h4 className="title-susubsection2 d-inline-block">أضف صور للغرفة</h4>
      {fields.length < 5 && (
        <button
          type="button"
          className="btn"
          onClick={() => append({ image: "" })}
        >
          <i className="fas fa-plus"></i>
        </button>
      )}
      <div className="d-flex">
        {fields.map((item, index) => (
          <div key={item.id}>
            <FormInputImage
              register={register}
              imagename={`images.${index}.image`}
              key={index}
              imagaurl={item?.image?.original}
            />
            <button
              type="button"
              className="btn "
              onClick={() => remove(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
