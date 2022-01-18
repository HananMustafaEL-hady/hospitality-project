import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ProfileEditrops } from "../../../models/inputs/profile-edit";
import { EditBtns } from "../../form/button/edit-buttons";
import { FormInput } from "../../form/inputs/form-input";
import { FormInputImage } from "../../form/inputs/image-input";
import axios from "../../../utils/axios.util";
import Router from "next/router";
import useCurrentUser from "../../../hook/select-current-user.hook";
import { getFormData } from "../../FormDataFun";
import { updateUser } from "../../../slices/auth.slices";
import { useDispatch } from "react-redux";
export const EditInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useCurrentUser();
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
    const { name, phone } = data;
    const profileImage = data?.profileImage ? data.profileImage[0] : "";
    let formdata = {};
    if (phone != user?.phone) {
      formdata = getFormData({ name, phone, profileImage });
    } else {
      formdata = getFormData({ name, profileImage });
    }
    (async function () {
      try {
        if (phone !== user?.phone) {
        }
        const response = await axios.patch("/users/updateProfile", formdata);
        console.log(response.data);
        dispatch(updateUser({ user: response.data }));
        Router.push(`/profile`);
      } catch (err: any) {
        console.log(err);
      }
    })();
    setIsLoading(false);
  }
  return (
    <section className="section-edit-info ">
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
          <FormInput
            register={register}
            placeholder="أدخل رقم الهاتف"
            inputtype="tel"
            label="  رقم الهاتف"
            hasError={Boolean(errors?.phone)}
            message={errors?.phone?.message}
            name="phone"
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
