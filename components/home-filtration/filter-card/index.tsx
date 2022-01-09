import React, { useState } from "react";
import { Filtercount } from "./search-persons";
import { Selectlocation } from "./map-Modal/selectlocation";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInputDate from "../../form/inputs/date-input";
import { BtnSearch } from "../../form/button/btn-search";
interface filtrationtypes {
  count?: number;
  toDate?: Date;
  fromDate?: Date;
  map?: string;
}

export const FilterCard: React.FC<filtrationtypes> = ({
  count,
  toDate,
  fromDate,
  map,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();
  const [toggleForm, setToggleForm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const onSubmit: SubmitHandler<filtrationtypes> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-container_col  container"
    >
      <div className="grid-container_col container">
        <Selectlocation setValue={setValue} />

        <FormInputDate
          placeholder={"من تاريخ"}
          name="startdate"
          control={control}
          setStartDate={setStartDate}
          startdate={startDate}
          toggleForm={toggleForm}
          setToggleForm={setToggleForm}
          divclassname={"grid__item"}
          hasIcon={true}
          isrequired={false}
        />
        <FormInputDate
          placeholder={"  إلي تاريخ"}
          name="enddate"
          control={control}
          setStartDate={setStartDate}
          startdate={startDate}
          toggleForm={toggleForm}
          setToggleForm={setToggleForm}
          divclassname={"grid__item"}
          hasIcon={true}
          isrequired={false}
        />
        <Filtercount register={register} />
      </div>
      <BtnSearch
        method={() => {
          console.log();
        }}
      />
    </form>
  );
};
