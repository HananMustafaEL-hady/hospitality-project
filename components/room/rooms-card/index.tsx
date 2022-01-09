import React, { Fragment } from "react";
import { RoomCard } from "../room-card/index";
import { Room } from "../../../models/Rooms";
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
              description={room.description}
              imageurl={room.imageurl}
              location={room.location}
              countUsers={room.countUsers}
              price={room.price}
              id={room.id}
              urllink={urllink}
            />
          </div>
        );
      })}
    </section>
  );
};
