import React from "react";
import { Alert } from "react-bootstrap";
import {
  Control,
  Controller,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { Room } from "../../../models/rooms";
import { Checkboxes } from "../../form/checkboxes";
import { FormInput } from "../../form/inputs/form-input";
import { LocationModal } from "../../home/home-filtration/filter-card/map-Modal/map";
import { FieldArrayImage } from "./fieldArrayImage";
import { SelectPersonsCount } from "./select-count";

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
];
interface props {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, object>;
  errors: any;
  setValue: UseFormSetValue<FieldValues>;
}

export const RoomForm: React.FC<props> = ({
  register,
  control,
  errors,
  setValue,
}) => {
  console.log(Object.keys(errors).length);
  console.log(errors);
  return (
    <form className="mt-32">
      <section className="row ">
        <div className="col-lg-6 col-sm-12 ">
          <div className="Form ">
            <FormInput
              register={register}
              placeholder="أضف  إسم الغرفة"
              inputtype="text"
              label="اسم الغرفة"
              name="name"
              hasError={Boolean(errors?.name)}
              message={errors?.name?.message}
              Errormessage="يجب إدخال اسم الغرفة"
              isRequired={true}
            />
          </div>
          <div className="mb-24 Form">
            <h4 className="title-susubsection2">
              {" "}
              التفاصيل
              <span className="text-danger">*</span>
            </h4>
            <textarea
              className={
                errors?.description
                  ? "input textarea-room border-danger"
                  : `input textarea-room  `
              }
              placeholder="أدخل التفاصيل"
              {...register("description", {
                required: "يجب إدخال تفاصيل الغرفة ",
              })}
            />
            {errors?.description?.message && (
              <p className="text-danger">{errors?.description?.message}</p>
            )}
          </div>
          <div className="mb-24 Form ">
            <h4 className="title-susubsection2">
              سعر الليلة
              <span className="text-danger">*</span>
            </h4>
            <input
              className={errors?.nightPrice ? `input border-danger ` : "input"}
              type="number"
              {...register("nightPrice", {
                required: "يجب إدخال سعر الليلة ",
                pattern: {
                  value: /^[0-9]{1,5}$/,
                  message: "يجب إدخال رقم صحيح ",
                },
              })}
              placeholder={`أدخل سعر الليلة ${"                                                                              "} جنية`}
            />
            {errors?.nightPrice?.message && (
              <p className="text-danger">{errors?.nightPrice?.message}</p>
            )}
          </div>

          <div className="mb-24 ">
            <h4 className="title-susubsection2">
              عدد الافراد
              <span className="text-danger">*</span>
            </h4>

            <SelectPersonsCount control={control} />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 ">
          <Checkboxes register={register} isRequired={true} errors={errors} />
          <FieldArrayImage
            register={register}
            control={control}
            errors={errors}
          />
          <div className="mtb-15">
            <h4 className="title-susubsection2">
              العنوان على الخريطة
              <span className="text-danger">*</span>
            </h4>
            <LocationModal setValue={setValue} />
          </div>
        </div>
      </section>
    </form>
  );
};
