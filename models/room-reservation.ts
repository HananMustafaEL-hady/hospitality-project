import { Control, FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";


export interface RoomReservationprops{
    register: UseFormRegister<FieldValues>
    control:Control<FieldValues, object>
    errors:any  
    setStartDate:Function
    startDate:Date
    toggleForm:string
    setToggleForm:Function
}