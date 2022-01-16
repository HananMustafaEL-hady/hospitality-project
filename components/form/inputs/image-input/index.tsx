import React, { useState } from "react";
import Image from "next/image";
import { FieldValues, UseFormRegister } from "react-hook-form";
interface props {
  imagename: string;
  register: UseFormRegister<FieldValues>;
}
export const FormInputImage: React.FC<props> = ({ register, imagename }) => {
  const [state, setstate] = useState<{
    image: string | any;
  }>({ image: null });
  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setstate({ image: e?.target?.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <div className="d-inline-block  ml-8">
      <label htmlFor={imagename} className="input-img__label">
        {state.image ? (
          <Image
            src={state.image}
            layout="fill"
            className="input-img__label__image"
          />
        ) : (
          <i className="fas fa-plus"></i>
        )}
      </label>
      <input
        {...register(imagename, {
          onChange: (e) => onImageChange(e),
        })}
        type="file"
        id={imagename}
        className="input-img"
      />
    </div>
  );
};
