import React, { Fragment } from "react";
import ReactTooltip from "react-tooltip";

interface Props {
  fontAwesomeClass: string;
  handleOnClick: Function;
  pageIndex: number;
  stopValue?: number;
  dataFor: string;
}

export const Button: React.FC<Props> = ({
  fontAwesomeClass,
  handleOnClick,
  pageIndex,
  stopValue,
  dataFor,
}) => {
  return (
    <div data-for={dataFor} data-tip={dataFor} className="">
      <button
        className="btn btn-primary ml-16"
        onClick={() => handleOnClick()}
        disabled={pageIndex == stopValue ? true : false}
      >
        <i className={`fas ${fontAwesomeClass}`}></i>
      </button>
      <ReactTooltip place="bottom" id={dataFor} className="custom-tooltip" />{" "}
    </div>
  );
};
