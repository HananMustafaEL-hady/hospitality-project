import React from "react";

export const ChatSearch = () => {
  return (
    <div className="d-flex     align-items-center    ">
      <input
        className="fas fa-search chat__search "
        type="text"
        name="search"
        placeholder="بحث &#xf002; "
      />{" "}
      <i className="fas fa-plus"></i>
    </div>
  );
};
