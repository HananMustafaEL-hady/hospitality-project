import { getFormData } from "../components/FormDataFun";
import axios from "../utils/axios.util";
import Router from "next/router";

export const AddRoomAPI = async (
  data: any,
  setErrorMessage: Function,
  setIsLoading: Function,
  setSuccessMessage: Function
) => {
  console.log(data);
  const formData = getFormData(data);
  try {
    console.log(formData);
    const res = await axios.post("/rooms", formData);
    console.log(res);
    setIsLoading(false);
    setErrorMessage("");
    setSuccessMessage("تم إضافة الغرفة بنجاح");
    setTimeout(() => {
      Router.push(`/profile/room/${res.data?.id}`);
    }, 2000);

    return res.data;
  } catch (error: any) {
    console.log(error?.message);
    setIsLoading(false);
    setSuccessMessage("");
    setErrorMessage(error?.message);
  }
};
