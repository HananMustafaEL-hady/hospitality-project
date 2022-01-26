import {
  Control,
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { Room } from "../rooms.model";

export interface AddroomProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: Function;
  register: UseFormRegister<any>;
  control: Control<any, object>;
  isLoading: boolean;
  errors: any;
  setValue: UseFormSetValue<any>;
  getValues?: UseFormGetValues<Room>;
}
