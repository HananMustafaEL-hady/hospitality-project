import React, { Fragment } from "react";
import { RoomCard } from "../room-card/index";
import { Room } from "../../../models/rooms.model";
interface Props {
  Rooms: [Room];
  roomscol: number;
  isBookingCard: boolean;
  bookingid?: string;
}
export const RoomsCard: React.FC<Props> = ({
  Rooms,
  roomscol,
  isBookingCard,
}) => {
  console.log(roomscol);
  return (
    <section className="row ">
      {Rooms?.map((room) => {
        return (
          <div key={room._id} className={`col-lg-${roomscol} col-md-6  `}>
            <RoomCard room={room} isBookingCard={isBookingCard} />
          </div>
        );
      })}
    </section>
  );
};
