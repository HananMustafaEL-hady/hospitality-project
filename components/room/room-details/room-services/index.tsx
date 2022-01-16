import React, { Fragment } from "react";
import { Service } from "../../../../models/services";
import { services } from "../../../../services";
interface props {
  roomServices: [Service];
}
export const RoomServices: React.FC<props> = ({ roomServices }) => {
  return (
    <div className="room-details__services">
      {roomServices?.map((item) =>
        services.map((service) => {
          return service.value == item.name ? (
            <div className="room-details__services__icons">
              <i className={service.iconClass}></i>
              <span className="room-details__icons__text">
                {" "}
                {service.name}{" "}
              </span>
            </div>
          ) : (
            ""
          );
        })
      )}
    </div>
  );
};
