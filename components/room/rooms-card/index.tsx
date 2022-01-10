import React, { Fragment } from "react";
import { RoomCard } from "../room-card/index";
import { Room } from "../../../models/rooms";
interface Props {
  Rooms: [Room];
  roomscol: number;
  urllink?: string;
}
export const RoomsCard: React.FC<Props> = ({ Rooms, roomscol, urllink }) => {
  return (
    <section className="row ">
      {Rooms?.map((room) => {
        return (
          <div key={room.id} className={`col-lg-${roomscol} col-md-6  `}>
            <RoomCard
              description={room.name}
              imageurl={room?.images[0]?.original}
              location={room.location.type}
              countUsers={room.capacity}
              price={room.nightPrice}
              id={room.id}
              urllink={urllink}
            />
          </div>
        );
      })}
    </section>
  );
};
