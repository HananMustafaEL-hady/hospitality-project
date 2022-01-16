import React, { useState } from "react";
import { Filtercount } from "./search-persons";
import { Selectlocation } from "./map-Modal/selectlocation";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInputDate from "../../../form/inputs/date-input";
import { BtnSearch } from "../../../form/button/btn-search";
import { useRouter } from "next/router";

interface filtrationtypes {
  count?: string | string[];
  startdate?: string | string[];
  enddate?: string | string[];
  location?: string | string[];
}
export const FilterCard: React.FC<filtrationtypes> = ({
  count,
  startdate,
  enddate,
  location,
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
  const router = useRouter();

  const onSubmit: SubmitHandler<filtrationtypes> = (data) => {
    console.log(data);
    router.push({
      pathname: "/search",
      query: {
        location: data.location,
        toDate: data.startdate,
        fromDate: data.enddate,
      },
    });
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
          defaultValue={startdate}
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
          defaultValue={enddate}
        />
        <Filtercount register={register} defaultValue={count} />
      </div>
      <BtnSearch
        method={() => {
          console.log();
        }}
      />
    </form>
  );
};
function pathname(pathname: any, arg1: string, state: any, arg3: {}) {
  throw new Error("Function not implemented.");
}
