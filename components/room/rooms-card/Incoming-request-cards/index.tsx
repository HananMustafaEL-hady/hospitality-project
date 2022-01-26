import React, { Fragment } from "react";
import { Room } from "../../../../models/rooms.model";
import { RoomCard } from "../../room-card";
import { IncomingRequestRoomCard } from "../../room-card/Incoming-request-card";
interface Props {
  Rooms: [Room];
}
export const RoomRequestsCardS: React.FC<Props> = ({ Rooms }) => {
  return (
    <section className="row ">
      {Rooms?.map((room) => {
        return (
          <div key={room._id} className="col-12 ">
            <IncomingRequestRoomCard room={room} />
          </div>
        );
      })}
    </section>
  );
};
