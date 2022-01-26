import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EditRoom } from "../components/add-edit-room/edit-room";
import { useRoom } from "../hook/room.hook";
import { useRouter } from "next/router";
import { Room } from "../models/rooms.model";
import { Toast } from "../components/toast";
import { getFormData } from "../components/FormDataFun";
import axios from "../utils/axios.util";
import Router from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { userInfo } from "os";

interface Props {
  room: Room;
}
export const EditRoomhoc: React.FC<Props> = ({ room }) => {
  const router = useRouter();
  const { roomID } = router.query;
  const [isLoadingState, setIsLoadingState] = useState(false);

  const { Roomdata, isLoading, error } = useRoom(roomID, room);
  const { mutate } = useSWRConfig();

  // const [isLoading, setIsLoading] = useState(false);
  console.log(Roomdata?.services[0]._id);
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
            placeholder: Roomdata?.images[index]?.placeholder,
          },
        };
      }),
      service: Roomdata?.services.map((item, index) => {
        return item._id;
      }),
    },
  });

  async function onSubmit(data: any) {
    setIsLoadingState(true);
    const imagesarr = [];
    const imagearr = [];

    for (var i = 0; i < data.images.length; i++) {
      if (data.images[i]?.image[0]) imagesarr.push(data.images[i]?.image[0]);
      else imagearr.push(data.images[i]?.image);
    }
    data.images = imagesarr;
    data.image = imagearr;
    console.log(imagearr);
    console.log(data);
    const formData = getFormData(data);
    try {
      console.log(formData);
      const res = await axios.patch(`/rooms/${roomID}`, formData);
      console.log(res);
      // setIsLoadingState(false);

      Router.push(`/profile/room/${roomID}`);
      mutate(`/rooms/${Roomdata?._id}`);
      mutate(
        `/rooms?pageNumber=1&limit=12&owners=${Roomdata?.owner._id}`,
        true
      );

      // mutate(`/rooms?pageNumber=1&limit=12&owners=5`, true);

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
      isLoading={isLoadingState}
      errors={errors}
      setValue={setValue}
    />
  );
};
