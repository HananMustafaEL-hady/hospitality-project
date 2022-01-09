import { Control, FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface BtnsEditrops{
     handleSubmit: UseFormHandleSubmit<FieldValues>;
     onSubmit:Function;
     isLoading:boolean
     hasErrors:boolean
}