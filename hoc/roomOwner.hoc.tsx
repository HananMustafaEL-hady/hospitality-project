import React, { Fragment } from "react";
import { RoomsCard } from "../components/room/rooms-card";
import { OwnerCard } from "../components/user/owner-card";
import { Room } from "../models/Rooms";
interface Props {
  Rooms: [Room];
}

export const RoomOwnerhoc: React.FC<Props> = ({ Rooms }) => {
  return (
    <div className="">
      <div className="profile-header"></div>
      <section className="container d-flex justify-content-between align-items-center flex-wrap">
        <OwnerCard />
        <button className="btn btn-primary btn-sm">
          <i className="fas fa-comment-dots"></i>{" "}
          <span className="mx-1  "> محادثة </span>
        </button>
      </section>
      <div className="container mt-5">
        <RoomsCard Rooms={Rooms} roomscol={3} />
      </div>
    </div>
  );
};
