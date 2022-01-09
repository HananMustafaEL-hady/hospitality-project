import router from "next/router";
import React from "react";
import { RoomDetails } from "../components/room/room-details";
import { RoomDetailsSwiper } from "../components/room/room-images-slider";
import { OwnerCard } from "../components/user/owner-card";

export const ProfileRoomDetailsHOC = () => {
  return (
    <div className="">
      <div className="profile-header"></div>
      <section className="container d-flex justify-content-between align-items-center">
        <OwnerCard />
        <div className="mt-3">
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
            className="btn btn-outline-danger btn-sm"
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
        <RoomDetailsSwiper />

        <section className="p-32 container-section">
          <RoomDetails hasReservationSection={false} />
        </section>
      </div>
    </div>
  );
};
