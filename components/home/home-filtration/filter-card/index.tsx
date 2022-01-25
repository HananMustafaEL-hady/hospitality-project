import React, { useState } from "react";
import { Filtercount } from "./search-persons";
import { Selectlocation } from "./map-Modal/selectlocation";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInputDate from "../../../form/inputs/date-input";
import { BtnSearch } from "../../../form/button/btn-search";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";

interface filtrationtypes {
  count?: string | string[];
  startdate?: string | string[];
  enddate?: string | string[];
  longitude?: string | string[];
  latitude?: string | string[];
}
export const FilterCard: React.FC<filtrationtypes> = ({
  count,
  startdate,
  enddate,
  longitude,
  latitude,
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
  const { mutate } = useSWRConfig();
  console.log(router.query);
  console.log(router.query);
  console.log(router.query);

  const onSubmit: SubmitHandler<filtrationtypes> = (data) => {
    console.log(data);
    router.push({
      pathname: "/search",
      query: {
        // latitude: data.latitude,
        // longitude: data.longitude,
        // toDate: data.startdate,
        // fromDate: data.enddate,
        ...router.query,
        capacity: data.count,
      },
    });
    let url = "";
    if (latitude && longitude) {
      url = `/rooms?pageNumber=1&limit=12&longitude=${
        data.longitude
      }&latitude=${data.latitude}&minCapacity=${
        data.count ? data.count : ""
      }&maxCapacity=${data.count ? data.count : ""}`;
    } else {
      url = `/rooms?pageNumber=1&limit=12&minCapacity=${
        data.count ? data.count : ""
      }&maxCapacity=${data.count ? data.count : ""}`;
    }
    mutate(url);
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
