import React from "react";
interface props {
  name: string;
}
export const RoomService: React.FC<props> = ({ name }) => {
  return (
    <div className="room-details__services__icons">
      <span className={`$icon icon-${name} ml-8`}></span>
      <span className="room-details__icons__text"> {name} </span>
    </div>
  );
};
