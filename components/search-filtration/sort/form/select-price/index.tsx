import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { Control } from "react-hook-form";
interface Props {
  control: Control<any>;
}
export const SelectPrice: React.FC<Props> = ({ control }) => {
  const options = [
    { value: "descending", label: "الترتيب من الاعلي إلي الاقل" },
    { value: "ascending", label: "الترتيب من الاقل إلي الاعلي" },
  ];
  return (
    <Controller
      control={control}
      defaultValue={options.map((c) => c.value)}
      name="price-order"
      render={({ field: { onChange, value, ref } }) => (
        <Select
          styles={{
            option: (styles) => ({
              ...styles,
            }),
            control: (styles) => ({
              ...styles,
              border: "1px solid #A5A9AB",
              borderRadius: "8px",
              height: "57px",
            }),
            menu: (provided, state) => ({
              ...provided,
              width: "97%",
              borderRadius: "8px",
              marginTop: "20px",
              zIndex: 3,
            }),
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
          components={{
            IndicatorSeparator: () => null,
          }}
          // inputRef={ref}
          defaultValue={options[0]}
          onChange={(val) => onChange(val?.value)}
          options={options}
          className="input border-0"
        />
      )}
    />
  );
};
