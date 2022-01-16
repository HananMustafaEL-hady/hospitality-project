import { AxiosError } from "axios";
import axios from "../utils/axios.util";
import { mapAxiosError } from "../utils/map-error.util";
export async function OTPsend(
  phone: string,
  setOTPResponse: Function,
  setISSignupform: Function
) {
  console.log(phone);
  try {
    const response = await axios.post("/otp/send", { phone });

    setOTPResponse(response.data);
    setISSignupform(false);

    return response.data;
  } catch (error: any) {
    setOTPResponse(error?.message);
    setISSignupform(true);
    console.log(error?.message);
  }
}
