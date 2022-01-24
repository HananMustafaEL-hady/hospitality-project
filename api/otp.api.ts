import axios from "../utils/axios.util";
export async function OTPsend(
  phone: string,
  setOTPResponse: Function,
  setISSignupform: Function
) {
  try {
    const response = await axios.post("/otp/send", { phone });
    const data = await response.data;
    setOTPResponse(data);
    setISSignupform(false);

    return response.data;
  } catch (error: any) {
    setOTPResponse(error?.message);
    setISSignupform(true);
    console.log(error?.message);
  }
}
