import router from "next/router";
import React from "react";

export const ReservationSection = () => {
  return (
    <div className=" d-flex flex-row justify-content-between align-items-center">
      <div className=" d-flex flex-row align-items-center">
        <span className="room-details__price"> 750 L.E </span>
        <div className="room-details__user-icon">
          <i className="fas fa-user"></i>
          <span> 4 </span>
        </div>
      </div>
      <div>
        <button className="btn  btn-sm btn-outline-secondary  ml-16">
          <i className={"fas fa-heart"}></i>
          <span className=""> المفضلة </span>
        </button>
        <button
          className="btn btn-primary btn-md"
          onClick={() => {
            router.push({
              pathname: `/room/booking/5`,
            });
          }}
        >
          احجز
        </button>
      </div>
    </div>
  );
};
