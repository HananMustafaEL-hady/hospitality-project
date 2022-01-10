import React, { Fragment, useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import DatePicker from "sassy-datepicker";
import { addDays } from "date-fns";
import { hookInputdate } from "../../../../models/inputs/hook-form-inputs";
import { ErrorMessage } from "@hookform/error-message";
import { Alert } from "react-bootstrap";
import dayjs from "dayjs";
const FormInputDate: React.FC<hookInputdate> = ({
  placeholder,
  name,
  control,
  setStartDate,
  startdate,
  toggleForm,
  setToggleForm,
  divclassname,
  hasIcon,
  isrequired,
  defaultValue,
}) => {
  const [toggledate, setToggledate] = useState(false);
  const [value, SetValue] = useState<any>();
  // useEffect(() => {
  //   defaultValue && SetValue(dayjs(defaultValue).format("ddd MMM DD YYYY"));
  // }, []);

  return (
    <>
      <section>
        <div
          className={
            divclassname == "input"
              ? `input-date ${divclassname}`
              : `${divclassname}`
          }
          onClick={() => {
            setToggleForm(name), setToggledate(!toggledate);
          }}
        >
          {hasIcon && (
            <i
              className="far fa-calendar"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              aria-hidden="true"
            ></i>
          )}
          {divclassname != "input" && <span> التاريخ </span>}
          <p className=" px-1 m-0"> {value ? value : placeholder} </p>
        </div>
        <Controller
          name={name}
          control={control}
          rules={{
            required: {
              value: isrequired,
              message: "يجب ادخال التاريخ",
            },
          }}
          render={({ field, fieldState }) => (
            <>
              {toggleForm == name && toggledate && (
                <div className="dropdown-menu-items">
                  <DatePicker
                    onChange={(e) => {
                      SetValue(e?.toDateString());
                      if (name == "startdate") {
                        field.onChange(+dayjs(e).startOf("day"));
                        setStartDate(e);
                      } else {
                        field.onChange(+dayjs(e).endOf("day"));
                      }
                    }}
                    selected={startdate}
                    minDate={
                      name == "enddate" ? startdate : addDays(new Date(), -1)
                    }
                    maxDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() + 1)
                      )
                    }
                  />
                </div>
              )}

              {fieldState.error && (
                <p className="text-danger"> {fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </section>
    </>
  );
};

export default FormInputDate;
