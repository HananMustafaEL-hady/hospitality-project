import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { services } from "../../../services";
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
  return (
    <fieldset className="mtb-15">
      <h3 className="title-subsection">
        الخدمات المقدمة
        {isRequired && <span className="text-danger">*</span>}
      </h3>
      {services.map((item) => (
        <FormCheckboxInput
          key={item.value}
          inputValue={item.id}
          inputPlaceholder={item.name}
          register={register}
          iconClass={item.iconClass}
          isRequired={isRequired}
        />
      ))}
      {errors?.service?.message && (
        <p className="text-danger">{errors?.service?.message}</p>
      )}
    </fieldset>
  );
};
