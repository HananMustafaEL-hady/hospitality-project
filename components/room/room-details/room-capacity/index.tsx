import React from "react";

interface props {
  id: string;
  nightPrice: number;
  capacity: number;
}
export const CapacitySection: React.FC<props> = ({
  id,
  nightPrice,
  capacity,
}) => {
  return (
    <div className=" d-flex flex-row align-items-center">
      <span className="room-details__price"> {nightPrice} L.E </span>
      <div className="room-details__user-icon">
        <i className="fas fa-user"></i>
        <span> {capacity} </span>
      </div>
    </div>
  );
};
