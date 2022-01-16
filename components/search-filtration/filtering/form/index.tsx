import React, { useState } from "react";
import DatePicker from "sassy-datepicker";
import { addDays } from "date-fns";
import { FormCheckboxInput } from "../../../form/inputs/checkbox-input";
import { FormFiltrationInput } from "../../../form/inputs/input-filtration-modal";
import { hookFilterForm } from "../../../../models/inputs/hook-form-inputs";
import { FormCounterInput } from "../../../form/inputs/counter-input/input";
import FormInputDate from "../../../form/inputs/date-input";
import { Checkboxes } from "../../../form/checkboxes";
import { LocationModal } from "../../../home/home-filtration/filter-card/map-Modal/map";
export const FilterForm: React.FC<hookFilterForm> = ({
  register,
  setValue,
  control,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [toggleForm, setToggleForm] = useState("");

  return (
    <form>
      <div>
        <h3 className="title-subsection">نطاق السعر</h3>
        <div className="d-flex flex-row justify-content-between mtb-15 ">
          <FormFiltrationInput
            placeholder="الحد الادني للسعر"
            name="min-price"
            register={register}
          />
          <FormFiltrationInput
            placeholder="الحد الاقصي للسعر"
            name="max-price"
            register={register}
          />
        </div>
      </div>
      <div className="line"></div>
      <div className="mtb-15 ">
        <h3 className="title-subsection"> مدة الاقامة</h3>
        <div className="d-flex flex-row justify-content-between">
          <FormInputDate
            placeholder={"  من  تاريخ"}
            name="startdate"
            control={control}
            setStartDate={setStartDate}
            startdate={startDate}
            toggleForm={toggleForm}
            setToggleForm={setToggleForm}
            divclassname={"input-filter"}
            hasIcon={false}
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
            divclassname={"input-filter"}
            hasIcon={false}
            isrequired={false}
          />
        </div>
      </div>
      <div className="line"></div>
      <Checkboxes register={register} isRequired={false} />
      <div className="line"></div>
      <div className="d-flex flex-row justify-content-between mtb-15 ">
        <h3 className="title-subsection">عدد الافراد</h3>
        <FormCounterInput register={register} setValue={setValue} />
      </div>
      <div className="line"></div>
      <div className="mtb-15">
        <h3 className="title-subsection">العنوان على الخريطة</h3>
        <LocationModal />
      </div>
    </form>
  );
};
