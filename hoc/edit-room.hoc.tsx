import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EditRoom } from "../components/add-edit-room/edit-room";
import { useRoom } from "../hook/room.hook";
import { useRouter } from "next/router";
import { Room } from "../models/rooms";
import { Toast } from "../components/toast";
import { getFormData } from "../components/FormDataFun";
import axios from "../utils/axios.util";
import Router from "next/router";

interface Props {
  room: Room;
}
export const EditRoomhoc: React.FC<Props> = ({ room }) => {
  const router = useRouter();
  const { roomID } = router.query;
  const { Roomdata, isLoading, error } = useRoom(roomID, room);
  // const [isLoading, setIsLoading] = useState(false);
  console.log(Roomdata?.services[0].id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<any>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      nightPrice: Roomdata?.nightPrice,
      description: Roomdata?.description,
      name: Roomdata?.name,
      capacity: Roomdata?.capacity,
      images: Roomdata?.images.map((item, index) => {
        return {
          image: {
            original: Roomdata?.images[index]?.original,
            placeholder: Roomdata?.images[index]?.original,
          },
        };
      }),
      service: Roomdata?.services.map((item, index) => {
        return item.id;
      }),
    },
  });

  async function onSubmit(data: any) {
    // setIsLoading(true);
    const arr = [];
    for (var i = 0; i < data.images.length; i++) {
      if (data.images[i]?.image[0]) arr.push(data.images[i]?.image[0]);
      else arr.push(data.images[i]?.image);
    }
    data.images = arr;
    console.log(arr);
    console.log(data);
    const formData = getFormData(data);
    try {
      console.log(formData);
      const res = await axios.patch(`/rooms/${roomID}`, formData);
      console.log(res);

      Router.push(`/profile/room/${roomID}`);

      return res.data;
    } catch (error: any) {
      console.log(error?.message);
    }
    // setIsLoading(false);
  }

  return (
    <EditRoom
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      control={control}
      isLoading={false}
      errors={errors}
      setValue={setValue}
    />
  );
};
