import React from "react";
import { AddroomProps } from "../../../models/inputs/add-room";
import { LoadingSpinner } from "../../spinner";
import { RoomForm } from "../form";

export const AddRoom: React.FC<AddroomProps> = ({
  handleSubmit,
  onSubmit,
  setValue,
  register,
  control,
  isLoading,
  errors,
}) => {
  return (
    <section className="container mt-32 add-section ">
      <h2 className="title-section">إضافة غرفة</h2>
      <h3 className="title-subsection-gray ">أضف بيانات الغرفة المراد عرضها</h3>
      <RoomForm
        register={register}
        control={control}
        errors={errors}
        setValue={setValue}
      />
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-from btn-primary"
          onClick={handleSubmit((e) => onSubmit(e))}
          disabled={isLoading || Object.keys(errors).length != 0}
        >
          <LoadingSpinner color={"#fff"} loading={isLoading} />
          {!isLoading && "إضافة"}
        </button>
      </div>
    </section>
  );
};
