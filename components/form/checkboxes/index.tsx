import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
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
  const services = [
    { name: "روم سيرفيس", value: "room services", iconClass: "fas fa-bed" },
    { name: "واي فاي", value: "wifi", iconClass: "fas fa-wifi" },
    {
      name: "حمام سباحة",
      value: "swimming pool",
      iconClass: "fas fa-swimming-pool",
    },
    {
      name: "تكيف",
      value: "air conditioner",
      iconClass: "fas fa-snowflake",
    },
    { name: "بلكونة", value: "balcony", iconClass: "fas fa-home" },
    { name: "مطبخ", value: "kitchen", iconClass: "fas fa-utensils" },
    { name: "جراج", value: "garage", iconClass: "fas fa-car" },
  ];
  return (
    <fieldset className="mtb-15">
      <h3 className="title-subsection">
        الخدمات المقدمة
        {isRequired && <span className="text-danger">*</span>}
      </h3>
      {services.map((item) => (
        <FormCheckboxInput
          key={item.value}
          inputValue={item.value}
          inputPlaceholder={item.name}
          register={register}
          iconClass={item.iconClass}
          isRequired={isRequired}
        />
      ))}
      {errors?.services?.message && (
        <p className="text-danger">{errors?.services?.message}</p>
      )}
    </fieldset>
  );
};
