import { Control, FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ProfileEditrops{
     handleSubmit: UseFormHandleSubmit<FieldValues>;
     onSubmit:Function;
     register: UseFormRegister<FieldValues>
     control:Control<FieldValues, object>
     isLoading:boolean
     errors:any
}