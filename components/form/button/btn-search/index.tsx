import React from "react";

interface Props {
  method: Function;
}
export const BtnSearch: React.FC<Props> = ({ method }) => {
  return (
    <button className="btn-search" type="submit" onClick={() => method()}>
      <span className="d-lg-none px-2">بحث</span>
      <i className="fas fa-search"></i>
    </button>
  );
};
