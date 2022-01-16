import router from "next/router";
import React from "react";
interface props {
  id: string;
}
export const ReservationSection: React.FC<props> = ({ id }) => {
  return (
    <div className="d-flex mt-32">
      <button className="btn  btn-sm btn-outline-secondary  ml-16">
        <i className={"fas fa-heart"}></i>
        <span className=""> المفضلة </span>
      </button>
      <button
        className="btn btn-primary btn-md"
        onClick={() => {
          router.push({
            pathname: `/room/booking/${id}`,
          });
        }}
      >
        احجز
      </button>
    </div>
  );
};
