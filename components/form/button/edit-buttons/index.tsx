import React from "react";
import { BtnsEditrops } from "../../../../models/inputs/button";
import { LoadingSpinner } from "../../../spinner";

export const EditBtns: React.FC<BtnsEditrops> = ({
  handleSubmit,
  onSubmit,
  isLoading,
  hasErrors,
}) => {
  return (
    <div className="section-edit-btns">
      <button
        className="btn btn-md btn-primary "
        onClick={handleSubmit((e) => onSubmit(e))}
        disabled={isLoading || hasErrors}
      >
        <LoadingSpinner color={"#fff"} loading={isLoading} />
        {!isLoading && "حفظ"}
      </button>
      <button className="btn btn-outline-primary btn-md">تراجع</button>
    </div>
  );
};
