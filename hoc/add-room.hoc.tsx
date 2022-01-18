import React, { Fragment, useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm, useWatch } from "react-hook-form";
import { AddRoomAPI } from "../api/room.api";
import { AddRoom } from "../components/add-edit-room/add-room";
import { Toast } from "../components/toast";

export const AddRoomhoc = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState(false);
  const [successmessage, setSuccessMessage] = useState("");

  // const defaultValues = {
  //   images: [
  //     {
  //       name: "images",
  //     },
  //   ],
  // };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm();
  // watch(["nightPrice", "number"]);
  // const watchData = watch();

  // const useWatchData = useWatch({
  //   control,
  //   name: "images",
  //   defaultValue: defaultValues.images,
  // });
  // console.log("watch", watchData);
  // console.log("useWatch", useWatchData);
  async function onSubmit(data: any) {
    setIsLoading(true);
    const arr = [];
    for (var i = 0; i < data.images.length; i++) {
      arr.push(data.images[i]?.image[0]);
    }
    data.images = arr;
    console.log();
    console.log(data);
    AddRoomAPI(data, setErrorMessage, setIsLoading, setSuccessMessage);
  }

  return (
    <Fragment>
      {errormessage ? <Alert variant="danger">{errormessage}</Alert> : ""}
      {successmessage ? <Toast message={successmessage} /> : ""}
      <AddRoom
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        control={control}
        isLoading={isLoading}
        setValue={setValue}
        errors={errors}
      />
    </Fragment>
  );
};
