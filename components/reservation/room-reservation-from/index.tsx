import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { RoomReservationprops } from "../../../models/inputs/room-reservation";
import FormInputDate from "../../form/inputs/date-input";
import { LoadingSpinner } from "../../spinner";

export const RoomReservation: React.FC<RoomReservationprops> = ({
  control,
  setStartDate,
  toggleForm,
  setToggleForm,
  startDate,
  register,
  errors,
}) => {
  return (
    <form className=" container container-section-booking__form">
      <div className="d-flex mb-24 flex-wrap justify-content-between">
        <div className="container-section-booking__section-date ">
          <p className="title-susubsection2 mr-6  ">
            التاريخ
            <span className="text-danger">*</span>
          </p>
          <FormInputDate
            placeholder={"من تاريخ"}
            name="startdate"
            control={control}
            setStartDate={setStartDate}
            startdate={startDate}
            toggleForm={toggleForm}
            setToggleForm={setToggleForm}
            divclassname={"input"}
            hasIcon={true}
            isrequired={true}
          />
        </div>
        <div className="container-section-booking__section-date ">
          <p className="title-susubsection2 mr-6 ">
            التاريخ
            <span className="text-danger">*</span>
          </p>
          <FormInputDate
            placeholder={"إلي تاريخ"}
            name="enddate"
            control={control}
            setStartDate={setStartDate}
            startdate={startDate}
            toggleForm={toggleForm}
            setToggleForm={setToggleForm}
            divclassname={"input"}
            hasIcon={true}
            isrequired={true}
          />
        </div>
      </div>
      <div>
        <p className="title-susubsection2 mr-6 ">
          ملاحظات
          <span className="text-danger">*</span>
        </p>
        {errors?.details?.message && (
          <p className="text-danger">{errors?.details?.message}</p>
        )}
        <textarea
          className="input input-notes "
          placeholder="
            أدخل التفاصيل"
          {...register("details", {
            required: "يجب إدخال تفاصيل الغرفة ",
            minLength: {
              value: 20,
              message: " يرجي كتابة ملاحظات اكثر",
            },
          })}
        />
      </div>
    </form>
  );
};
