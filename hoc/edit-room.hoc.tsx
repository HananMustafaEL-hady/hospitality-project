import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EditRoom } from "../components/add-edit-room/edit-room";
export const EditRoomhoc = () => {
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
    <EditRoom
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      control={control}
      isLoading={isLoading}
      errors={errors}
    />
  );
};
