import { mutate } from "swr";
import axios from "../utils/axios.util";

export const AcceptedRequest = async (bookingID: string) => {
  try {
    const response = await axios.patch(`/bookings/${bookingID}`, {
      status: "accepted",
    });
    const data = await response.data;
    mutate(`/bookings/${bookingID}`);
  } catch (error) {}
};

export const RejectedRequest = async (bookingID: string) => {
  try {
    const response = await axios.patch(`/bookings/${bookingID}`, {
      status: "REJECTED",
    });
    const data = await response.data;
    console.log(data);
  } catch (error) {}
};
