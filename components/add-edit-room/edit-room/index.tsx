import React from "react";
import { RoomForm } from "../form";
import { AddroomProps } from "../../../models/inputs/add-room";
import { LoadingSpinner } from "../../spinner";
import { EditBtns } from "../../form/button/edit-buttons";

export const EditRoom: React.FC<AddroomProps> = ({
  handleSubmit,
  onSubmit,
  register,
  control,
  isLoading,
  errors,
}) => {
  return (
    <section className="container mt-32 add-section ">
      <h2 className="title-section">إضافة غرفة</h2>
      <h3 className="title-subsection-gray ">أضف بيانات الغرفة المراد عرضها</h3>
      <RoomForm register={register} control={control} errors={errors} />
      <EditBtns
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={isLoading}
        hasErrors={Boolean(Object.keys(errors).length)}
      />
    </section>
  );
};
