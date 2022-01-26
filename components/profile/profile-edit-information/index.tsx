import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ProfileEditrops } from "../../../models/inputs/profile-edit";
import { EditBtns } from "../../form/button/edit-buttons";
import { FormInput } from "../../form/inputs/form-input";
import { FormInputImage } from "../../form/inputs/image-input";
import axios from "../../../utils/axios.util";
import Router from "next/router";
import { getFormData } from "../../FormDataFun";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, useCurrentUser } from "../../../slices/auth.slices";
import { mutate } from "swr";
import { InputPhone } from "../../form/inputs/phone-input";
import { AxiosError } from "axios";
import { ToastError } from "../../toast-error";
import { Toast } from "../../toast";

export const EditInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorObj, setErrorObj] = useState<AxiosError>();
  const [successmessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(useCurrentUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm({
    defaultValues: {
      name: user?.name,
      phone: user?.phone,
      profileImage: null,
    },
  });

  async function onSubmit(data: any) {
    setIsLoading(true);
    const { name } = data;
    const profileImage = data?.profileImage ? data.profileImage[0] : "";
    let formdata = {};
    if (profileImage == "") {
      formdata = getFormData({ name });
    } else {
      formdata = getFormData({ name, profileImage });
    }

    try {
      const response = await axios.patch("/users/updateProfile", formdata);
      console.log(response.data);
      dispatch(updateUser({ user: response.data }));
      mutate(`/rooms?pageNumber=1&limit=12&owners=${user?._id}`);
      mutate(`/users/${user?._id}`);
      setSuccessMessage("تم التعديل بنجاح");
      Router.push(`/profile/${user?._id}`);
    } catch (err: any) {
      setErrorObj(err);
    }
  }
  return (
    <section className="section-edit-info ">
      {errorObj ? <ToastError error={errorObj} /> : ""}
      {successmessage ? <Toast message={successmessage} /> : ""}
      <form className="section-edit-info__form">
        <div className="">
          <h4 className="title-susubsection2">
            إختر صورة
            <span className="text-danger">*</span>
          </h4>
          <FormInputImage
            imagename={"profileImage"}
            register={register}
            userimage={user?.profileImage?.original}
            imagaurl={""}
          />
          {errors?.profileImage?.message && (
            <p className="text-danger">{errors?.profileImage?.message}</p>
          )}
        </div>
        <div className="mb-16">
          <FormInput
            register={register}
            placeholder="أدخل الإسم"
            inputtype="text"
            label="الإسم"
            name="name"
            hasError={Boolean(errors?.name)}
            message={errors?.name?.message}
            Errormessage={"يجب إدخال الإسم"}
            isRequired={true}
          />
        </div>
        <div className="mb-16">
          <InputPhone
            isRequired={true}
            register={register}
            errors={errors}
            disabled={true}
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
