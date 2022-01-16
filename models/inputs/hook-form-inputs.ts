import {
  SubmitHandler,
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  UseFormSetValue,
  Control,
  UseFormWatch,
  UseFormSetError,
} from "react-hook-form";
export interface hookFormInputs {
  onSubmitFun: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  isLoading: boolean;
}
export interface hookFormLogin {
  onSubmitFun: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  isLoading: boolean;
  errormessage?: string;
  watch: UseFormWatch<FieldValues>;
  setError: UseFormSetError<FieldValues>;
}
export interface hookformCheckbox {
  inputValue: string;
  inputPlaceholder: string;
  register: UseFormRegister<FieldValues>;
  iconClass: string;
  isRequired: boolean;
}
export interface hookformCount {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}
export interface hookformFiltrationInput {
  register: UseFormRegister<FieldValues>;
  name: string;
  placeholder: string;
}

export interface hookFilterForm {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<any>;
}

export interface hookInputdate {
  placeholder: string;
  name: string;
  control: Control<any>;
  setStartDate: Function;
  startdate: Date;
  toggleForm: string;
  setToggleForm: Function;
  divclassname: string;
  hasIcon: boolean;
  isrequired: boolean;
  defaultValue?: any;
}

export interface FormInputProps {
  placeholder: string;
  inputtype: string;
  label: string;
  hasError: boolean;
  message: string;
  register: UseFormRegister<FieldValues>;
  name: string;
  Errormessage: string;
  isRequired: boolean;
  setError: UseFormSetError<FieldValues>;
}
