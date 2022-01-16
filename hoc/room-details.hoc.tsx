import React from "react";
import { RoomDetails } from "../components/room/room-details";
import { RoomDetailsSwiper } from "../components/room/room-images-slider";
import { ProfileCard } from "../components/user/profile-card";
import { Room } from "../models/rooms";
interface Props {
  room: Room;
}
export const RoomDetailshoc: React.FC<Props> = ({ room }) => {
  return (
    <div className="container ">
      <RoomDetailsSwiper />
      <div className="row g-1 room-details">
        <div className="col-lg-3 col-md-12">
          <ProfileCard owner={room?.owner} />
        </div>
        <section className="col-lg-8 col-md-12   container  room-details__item p-2  ">
          <div className="px-32 py-24">
            <RoomDetails
              hasReservationSection={true}
              room={room}
              hasCapacitySection={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
};
