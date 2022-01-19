import React, { Fragment } from "react";
import { useServices } from "../../../../hook/services.hook";
import { Service } from "../../../../models/services.model";
interface props {
  roomServices: [Service];
}
export const RoomServices: React.FC<props> = ({ roomServices }) => {
  const { services, error } = useServices();

  return (
    <div className="room-details__services">
      {roomServices?.map((item) =>
        services?.map((service) => {
          return service.name == item.name ? (
            <div className="room-details__services__icons">
              <i className={service.name}></i>
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
