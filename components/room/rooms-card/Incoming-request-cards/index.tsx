import React, { Fragment } from "react";
import { Room } from "../../../../models/inputs/Rooms";
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
          <div key={room.id} className="col-12 ">
            <IncomingRequestRoomCard
              description={room.description}
              imageurl={room.imageurl}
              location={room.location}
              price={room.price}
              id={room.id}
              FromDate="November 20"
              Todate="December 9"
            />
          </div>
        );
      })}
    </section>
  );
};
