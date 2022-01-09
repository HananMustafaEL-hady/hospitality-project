import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ProfileEditrops } from "../../../models/profile-edit";
import { EditBtns } from "../../form/button/edit-buttons";
import { FormInputImage } from "../../form/inputs/image-input";
import { FormPasswordInput } from "../../form/inputs/password-input";
import { LoadingSpinner } from "../../spinner";

export const EditPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm({});

  async function onSubmit(data: any) {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
    }, 2000);
  }
  const password = watch("password", "");
  return (
    <section className="section-edit-info ">
      <form>
        <FormPasswordInput
          register={register}
          errors={errors}
          placeholder="كلمة المرور القديمة"
          label="كلمة المرور القديمة"
          name={"oldPassword"}
          hasError={Boolean(errors?.oldPassword)}
          message={errors?.oldPassword?.message}
        />

        <FormPasswordInput
          register={register}
          errors={errors}
          placeholder="كلمة المرور الجديدة"
          label="كلمة المرور الجديدة"
          name={"password"}
          hasError={Boolean(errors?.password)}
          message={errors?.password?.message}
        />

        <FormPasswordInput
          register={register}
          errors={errors}
          placeholder="تأكيد كلمة المرور الجديدة"
          label="تأكيد كلمة المرور الجديدة"
          name="Confirmpassword"
          hasError={Boolean(errors?.Confirmpassword)}
          message={errors?.Confirmpassword?.message}
          validate={(value: {}) =>
            value == password || "كلمة المرور غير متطابقة "
          }
        />

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
