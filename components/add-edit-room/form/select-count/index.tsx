import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import Select from "react-select";
interface props {
  control: Control<FieldValues, object>;
}

export const SelectPersonsCount: React.FC<props> = ({ control }) => {
  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
  ];
  return (
    <Controller
      control={control}
      defaultValue={options.map((c) => c.value)}
      name="capacity"
      rules={{
        required: "يجب ادخال عدد الافراد",
      }}
      render={({ field: { onChange, value, ref } }) => (
        <Select
          // defaultValue={options[0]}
          placeholder="أدخل عدد الافراد"
          // inputRef={ref}
          onChange={(val) => onChange(val?.value)}
          options={options}
          styles={{
            menu: (provided, state) => ({
              ...provided,
              width: "97%",
              borderRadius: "8px",
              marginTop: "20px",
              zIndex: 3,
            }),

            option: (styles) => ({
              ...styles,
              width: "100%",
              paddingTop: 4,
              marginBottom: 8,
            }),

            placeholder: (defaultStyles) => {
              return {
                ...defaultStyles,
                color: "#d2d2d2",
                fontSize: 14,
                padding: "0 8px",
              };
            },
            control: (styles) => ({
              ...styles,
              height: 49,
              borderRadius: 8,
              border: "1px solid #d2d2d2",
              margin: 0,
              width: "375px",
            }),
          }}
          className=" border-0 Form"
          components={{
            IndicatorSeparator: () => null,
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 8,
            colors: {
              ...theme.colors,
              primary25: "#f0f0f0",
              primary: "#DCDCDC	",
            },
          })}
        />
      )}
    />
  );
};
