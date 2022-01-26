import { Roomspage } from "../models/rooms";
import { getFormData } from "../components/FormDataFun";
import axios from "../utils/axios.util";
import Router from "next/router";
import { mutate } from "swr";

export const AddRoomAPI = async (
  data: any,
  setErrorMessage: Function,
  setIsLoading: Function,
  setSuccessMessage: Function
) => {
  const formData = getFormData(data);
  try {
    console.log(formData);
    const res = await axios.post("/rooms", formData);
    console.log(res);
    setIsLoading(false);
    setErrorMessage("");
    setSuccessMessage("تم إضافة الغرفة بنجاح");
    Router.push(`/profile/room/${res.data?._id}`);

    return res.data;
  } catch (error: any) {
    setIsLoading(false);
    setSuccessMessage("");
    setErrorMessage(error?.message);
  }
};

export const deleteRoom = async (roomid: string, userid: number) => {
  try {
    const res = await axios.delete(`/rooms/${roomid}`);
    mutate(`/rooms?pageNumber=1&limit=12&owners=${userid}`);
    mutate(
      `/rooms?pageNumber=1&limit=12&owners=${userid}`,
      async (roomspage: Roomspage) => {
        return roomspage?.data.filter((item: any) => item._id !== roomid);
      },
      false
    );
    Router.push(`/profile/${userid}`);
    return res.data;
  } catch (error: any) {
    // console.log(error?.message);
  }
};
