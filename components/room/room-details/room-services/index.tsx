import React, { Fragment } from "react";
import { useServices } from "../../../../hook/services.hook";
import { Service } from "../../../../models/services.model";
import { RoomService } from "./service";
interface props {
  roomServices: [Service];
}
export const RoomServices: React.FC<props> = ({ roomServices }) => {
  const { services, error } = useServices();
  return (
    <div className="room-details__services">
      {roomServices?.map((item) =>
        services?.map((service) => {
          return service._id == item._id ? (
            <RoomService name={item.name} />
          ) : (
            ""
          );
        })
      )}
    </div>
  );
};
