import {
  Control,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export interface AddroomProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: Function;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, object>;
  isLoading: boolean;
  errors: any;
  setValue: UseFormSetValue<FieldValues>;
}
