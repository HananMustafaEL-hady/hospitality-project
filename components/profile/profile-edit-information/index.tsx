import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ProfileEditrops } from "../../../models/inputs/profile-edit";
import { EditBtns } from "../../form/button/edit-buttons";
import { FormInput } from "../../form/inputs/form-input";
import { FormInputImage } from "../../form/inputs/image-input";
import { LoadingSpinner } from "../../spinner";

export const EditInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm({ mode: "onTouched" });

  async function onSubmit(data: any) {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
    }, 2000);
  }
  return (
    <section className="section-edit-info ">
      <form className="section-edit-info__form">
        <div className="">
          <h4 className="title-susubsection2">
            إختر صورة
            <span className="text-danger">*</span>
          </h4>
          <FormInputImage imagename={"imageIfo"} register={register} />
          {errors?.imageIfo?.message && (
            <p className="text-danger">{errors?.imageIfo?.message}</p>
          )}
        </div>
        <div className="mb-16">
          <FormInput
            register={register}
            placeholder="أدخل الإسم"
            inputtype="text"
            label="الإسم"
            name="profilename"
            hasError={Boolean(errors?.profilename)}
            message={errors?.profilename?.message}
            Errormessage={"يجب إدخال الإسم"}
            isRequired={true}
          />
        </div>
        <div className="mb-16">
          <FormInput
            register={register}
            placeholder="أدخل رقم الهاتف"
            inputtype="tel"
            label="  رقم الهاتف"
            hasError={Boolean(errors?.phonenumber)}
            message={errors?.phonenumber?.message}
            name="phonenumber"
            Errormessage="يجب إدخال رقم الهاتف"
            isRequired={true}
          />
        </div>
        <EditBtns
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isLoading={isLoading}
          hasErrors={Object.keys(errors).length != 0}
        />
      </form>
    </section>
  );
};
