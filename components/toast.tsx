import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface Props {
  message: string;
}
export const Toast: React.FC<Props> = ({ message }) => {
  useEffect(() => {
    toast(`${message}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }, [message]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
    />
  );
};
