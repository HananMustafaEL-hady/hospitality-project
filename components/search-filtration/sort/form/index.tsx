import React, { useState } from "react";
import { hookFilterForm } from "../../../../models/inputs/hook-form-inputs";

import { LocationModal } from "../../../home/home-filtration/filter-card/map-Modal/map";
import { SelectPrice } from "./select-price";
export const FilterForm: React.FC<hookFilterForm> = ({
  register,
  setValue,
  control,
}) => {
  return (
    <form>
      <div className="mb-32">
        <h3 className="title-subsection"> السعر</h3>
        <SelectPrice control={control} />
      </div>
      <div className="line"></div>
      <div className="mtb-15">
        <h3 className="title-subsection">العنوان على الخريطة</h3>
        <LocationModal />
      </div>
    </form>
  );
};
