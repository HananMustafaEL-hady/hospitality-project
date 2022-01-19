import React, { Fragment } from "react";
import { RoomCard } from "../../room-card/index";
import { Room } from "../../../../models/rooms";
interface Props {
  Rooms: [Room];
  roomscol: number;
}
export const RoomsCard: React.FC<Props> = ({ Rooms, roomscol }) => {
  console.log(roomscol);
  return (
    <section className="row ">
      {Rooms?.map((room) => {
        return (
          <div key={room.id} className={`col-lg-${roomscol} col-md-6`}>
            <RoomCard room={room} />
          </div>
        );
      })}
    </section>
  );
};
