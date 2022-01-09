import React, { useState } from "react";
import { RoomReservation } from "../components/reservation/room-reservation-from";
import { useForm } from "react-hook-form";
import { LoadingSpinner } from "../components/spinner";
import { BtnSubmit } from "../components/form/button/btn-submit";
export const RoomReservationhoc = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toggleForm, setToggleForm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm();
  async function onSubmit(data: any) {
    setIsLoading(true);
    setTimeout(() => {
      console.log(data);
      setIsLoading(false);
    }, 2000);
  }
  console.log(Object.keys(errors).length);
  console.log(errors);
  return (
    <section className="container container-section-booking mt-32">
      <div>
        <h2 className="title-section mb-16">حجز الغرفة</h2>
        <h3 className="title-subsection-gray mb-32">اضف بيانات الحجز</h3>
        <RoomReservation
          control={control}
          setStartDate={setStartDate}
          toggleForm={toggleForm}
          setToggleForm={setToggleForm}
          startDate={startDate}
          register={register}
          errors={errors}
        />
      </div>
      {/* <button
        className="btn btn-from mt-32"
        onClick={handleSubmit((e) => onSubmit(e))}
        disabled={isLoading || Object.keys(errors).length != 0}
      >
        <LoadingSpinner color={"#fff"} loading={isLoading} />
        {!isLoading && "حجز"}
      </button>{" "} */}
      <BtnSubmit
        btnclass={"btn btn-from mt-32"}
        textValue={"حجز"}
        isLoading={false}
        hasErrors={Boolean(Object.keys(errors).length)}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};
