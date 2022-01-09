import React from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import { LoadingSpinner } from "../../../spinner";
interface Props {
  btnclass: string;
  textValue: string;
  isLoading: boolean;
  hasErrors: boolean;
  onSubmit: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}
export const BtnSubmit: React.FC<Props> = ({
  handleSubmit,
  onSubmit,
  textValue,
  btnclass,
  hasErrors,
  isLoading,
}) => {
  return (
    <button
      className={btnclass}
      onClick={handleSubmit((e) => onSubmit(e))}
      disabled={isLoading || hasErrors}
    >
      <LoadingSpinner color={"#fff"} loading={isLoading} />
      {!isLoading && textValue}
    </button>
  );
};
