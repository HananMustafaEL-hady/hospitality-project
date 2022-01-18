import React, { useState } from "react";
import { RoomReservation } from "../components/reservation/room-reservation-from";
import { useForm } from "react-hook-form";
import { BtnSubmit } from "../components/form/button/btn-submit";
import axios from "../utils/axios.util";
import Router from "next/router";
import { useRouter } from "next/router";

export const RoomReservationhoc = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toggleForm, setToggleForm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const router = useRouter();
  const { roomid } = router.query;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm();
  async function onSubmit(data: any) {
    const { startDate, endDate, notes } = data;

    setIsLoading(true);
    (async function () {
      try {
        const response = await axios.post("/bookings", {
          startDate,
          endDate,
          notes,
          room: roomid,
        });
        console.log(response.data);
        // Router.push(`/profile/reservations`);
      } catch (err: any) {
        console.log(err);
      }
    })();
    setIsLoading(false);
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
        btnclass={"btn  btn-primary btn-from mt-32"}
        textValue={"حجز"}
        isLoading={isLoading}
        hasErrors={Boolean(Object.keys(errors).length)}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />
    </section>
  );
};
