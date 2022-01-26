import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FieldArrayMethodProps,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface props {
  imagename: string;
  register: UseFormRegister<any>;
  userimage?: string;
  imagaurl: any;
  isRequired?: boolean;
  errorMessage?: string;
}
export const FormInputImage: React.FC<props> = ({
  register,
  imagename,
  userimage,
  imagaurl,
  isRequired,
  errorMessage,
}) => {
  const [imageURL, setImageURL] = useState<{ image: string | any }>({
    image: null,
  });
  const hasImage = imagaurl?.image?.original;
  useEffect(() => {
    if (typeof imagaurl?.image?.original == "string") {
      setImageURL({ image: imagaurl?.image?.original });
    }
  }, [imagaurl]);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        -setImageURL({ image: e?.target?.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="d-inline-block  ml-8">
      <label htmlFor={imagename} className="input-img__label">
        {imageURL.image ? (
          <Image
            src={imageURL.image}
            layout="fill"
            className="input-img__label__image"
          />
        ) : imagename == "profileImage" && userimage ? (
          <Image
            src={userimage}
            layout="fill"
            className="input-img__label__image"
          />
        ) : (
          <i className="fas fa-plus"></i>
        )}
      </label>
      {errorMessage ? <p className="text-danger">{errorMessage}</p> : ""}
      <input
        {...register(imagename, {
          required: {
            value: hasImage ? false : isRequired ? isRequired : false,
            message: "يجب إدخال الصورة",
          },
          onChange: (e) => onImageChange(e),
        })}
        type="file"
        id={imagename}
        className="input-img"
      />
    </div>
  );
};
