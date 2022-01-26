import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ProfileEditrops } from "../../../models/inputs/profile-edit";
import { EditBtns } from "../../form/button/edit-buttons";
import { FormInputImage } from "../../form/inputs/image-input";
import { FormPasswordInput } from "../../form/inputs/password-input";
import { LoadingSpinner } from "../../spinner";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, useCurrentUser } from "../../../slices/auth.slices";
import { mutate } from "swr";
import axios from "../../../utils/axios.util";
import { ToastError } from "../../toast-error";
import { AxiosError } from "axios";
import { Toast } from "../../toast";

export const EditPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState<AxiosError>();
  const [successmessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm({});
  const user = useSelector(useCurrentUser);

  async function onSubmit(data: any) {
    setIsLoading(true);
    const { newPassword, password } = data;

    try {
      const response = await axios.patch("/users/updateProfile", {
        newPassword,
        password,
      });
      console.log(response.data);
      dispatch(updateUser({ user: response.data }));
      mutate(`/rooms?pageNumber=1&limit=12&owners=${user?._id}`);
      mutate(`/users/${user?._id}`);

      Router.push(`/profile/${user?._id}`);
      setSuccessMessage("تم التعديل بنجاح");
    } catch (err: any) {
      setErrorObj(err);
    }
    setIsLoading(false);
  }
  const password = watch("newPassword", "");
  return (
    <section className="section-edit-info ">
      {errorObj ? <ToastError error={errorObj} /> : ""}
      {successmessage ? <Toast message={successmessage} /> : ""}
      <form>
        <FormPasswordInput
          register={register}
          errors={errors}
          placeholder="كلمة المرور القديمة"
          label="كلمة المرور القديمة"
          name={"password"}
          hasError={Boolean(errors?.password)}
          message={errors?.password?.message}
        />

        <FormPasswordInput
          register={register}
          errors={errors}
          placeholder="كلمة المرور الجديدة"
          label="كلمة المرور الجديدة"
          name={"newPassword"}
          hasError={Boolean(errors?.newPassword)}
          message={errors?.newPassword?.message}
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
