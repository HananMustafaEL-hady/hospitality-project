import React, { Fragment } from "react";

import { Room } from "../models/rooms.model";
interface Props {
  Rooms: [Room];
}

export const RoomOwnerhoc: React.FC<Props> = ({ Rooms }) => {
  return (
    <div className="">
      <div className="profile-header"></div>
      <section className="container d-flex justify-content-between align-items-center flex-wrap">
        <button className="btn btn-primary btn-sm">
          <i className="fas fa-comment-dots"></i>{" "}
          <span className="mx-1  "> محادثة </span>
        </button>
      </section>
      <div className="container mt-5"></div>
    </div>
  );
};
