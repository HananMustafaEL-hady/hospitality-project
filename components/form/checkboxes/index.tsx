import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { useServices } from "../../../hook/services.hook";
import { FormCheckboxInput } from "../inputs/checkbox-input";
interface Props {
  register: UseFormRegister<FieldValues>;
  isRequired: boolean;
  errors?: FieldErrors<FieldValues>;
}
export const Checkboxes: React.FC<Props> = ({
  register,
  isRequired,
  errors,
}) => {
  const { services, error } = useServices();
  return (
    <fieldset className="mtb-15">
      <h3 className="title-subsection">
        الخدمات المقدمة
        {isRequired && <span className="text-danger">*</span>}
      </h3>
      {services?.map((item) => (
        <FormCheckboxInput
          key={item.name}
          inputValue={item._id}
          inputPlaceholder={item.name}
          register={register}
          iconClass={item.name}
          isRequired={isRequired}
        />
      ))}
      {errors?.service?.message && (
        <p className="text-danger">{errors?.service?.message}</p>
      )}
    </fieldset>
  );
};
