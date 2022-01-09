import React, { Fragment } from "react";
import { RoomsCard } from "../components/room/rooms-card";
import { OwnerCard } from "../components/user/owner-card";
import { Room } from "../models/Rooms";

export const RoomOwnerhoc = () => {
  return (
    <div className="">
      <div className="profile-header"></div>
      <section className="container d-flex justify-content-between align-items-center">
        <OwnerCard />
        <div>
          <button className="btn btn-primary btn-sm">
            <i className="fas fa-comment-dots"></i>{" "}
            <span className="mx-1  "> محادثة </span>
          </button>
        </div>
      </section>
      <div className="container mt-5"></div>
    </div>
  );
};
