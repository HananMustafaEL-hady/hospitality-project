import { AxiosError } from "axios";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  error: AxiosError;
}
export const ToastError: React.FC<Props> = ({ error }) => {
  useEffect(() => {
    toast(`${error.message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [error]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5002}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};
