import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AddRoom } from "../components/add-edit-room/add-room";
export const AddRoomhoc = () => {
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <AddRoom
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      control={control}
      isLoading={isLoading}
      errors={errors}
    />
  );
};
