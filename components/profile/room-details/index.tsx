import router from "next/router";
import React from "react";
import { RoomDetails } from "../../room/room-details";
import { RoomDetailsSwiper } from "../../room/room-images-slider";
import { OwnerCard } from "../../user/owner-card";
import { Room } from "../../../models/rooms";
import { ImagesSwiper } from "../../swiper";

interface Props {
  room: Room;
}
export const ProfileRoomDetails: React.FC<Props> = ({ room }) => {
  console.log(room);
  return (
    <div className="">
      <div className="profile-header"></div>
      <section className="container d-flex justify-content-between align-items-center">
        <OwnerCard owner={room?.owner} />
        <div className="mt-3 room-details__editbts ">
          <button
            className="btn btn-outline-primary btn-sm ml-16"
            onClick={() => {
              router.push("/profile/edit");
            }}
          >
            <i className="fas fa-pen mx-2"></i>
            <span className="mx-1"> تعديل </span>
          </button>{" "}
          <button
            className="btn btn-outline-secondary btn-sm ml-16"
            onClick={() => {
              router.push("/profile/edit");
            }}
          >
            <i className="fas fa-ban mx-2"></i>
            <span className="mx-1"> تعطيل </span>
          </button>
          <button
            className="btn btn-outline-danger btn-sm ml-16"
            onClick={() => {
              router.push("/profile/edit");
            }}
          >
            <i className="fas fa-trash mx-2"></i>
            <span className="mx-1"> حذف </span>
          </button>
        </div>
      </section>
      <div className="container mt-5">
        <ImagesSwiper images={room.images} />

        <section className="p-32 container-section">
          <RoomDetails
            hasReservationSection={false}
            room={room}
            hasCapacitySection={true}
          />
        </section>
      </div>
    </div>
  );
};
