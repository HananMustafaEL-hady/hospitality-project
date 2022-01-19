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
  imagaurl: string;
  // append: (
  //   value: Partial<unknown> | Partial<unknown>[],
  //   options?: FieldArrayMethodProps | undefined
  // ) => void;
  // disabledAppend: boolean;
}
export const FormInputImage: React.FC<props> = ({
  register,
  imagename,
  userimage,
  imagaurl,
  // append,
  // disabledAppend,
}) => {
  const [imageURL, setImageURL] = useState<{ image: string | any }>({
    image: null,
  });
  console.log(typeof imagaurl);
  console.log(imagaurl);

  useEffect(() => {
    if (typeof imagaurl == "string") {
      setImageURL({ image: imagaurl });
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
      <label
        htmlFor={imagename}
        className="input-img__label"
        // onClick={() => {
        //   disabledAppend && append({ image: "" });
        // }}
      >
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
      <input
        {...register(imagename, {
          // required: true,
          onChange: (e) => onImageChange(e),
        })}
        type="file"
        id={imagename}
        className="input-img"
      />
    </div>
  );
};
