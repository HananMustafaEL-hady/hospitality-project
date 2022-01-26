import React from "react";
import {
  Control,
  FieldValues,
  useFieldArray,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { FormInputImage } from "../../../form/inputs/image-input";

interface props {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, object>;
  errors: any;
}

export const FieldArrayImage: React.FC<props> = ({
  register,
  control,
  errors,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

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
          <div key={item.id} className="position-relative">
            <FormInputImage
              register={register}
              imagename={`images.${index}.image`}
              key={index}
              imagaurl={item}
              isRequired={true}
              errorMessage={
                errors?.images ? errors?.images[index]?.image?.message : ""
              }
              // append={append}
              // disabledAppend={Boolean(fields.length < 5)}
            />
            <button
              type="button"
              className="btn input-img__delete"
              onClick={() => remove(index)}
              disabled={fields.length == 1 ? true : false}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
