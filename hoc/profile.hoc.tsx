import Link from "next/link";
import React, { Fragment } from "react";
import { RoomsCard } from "../components/room/rooms-card";
import { OwnerCard } from "../components/user/owner-card";
import { Room } from "../models/inputs/Rooms";
interface Props {
  Rooms: [Room];
}
import { useRouter } from "next/router";
export const Profilehoc: React.FC<Props> = ({ Rooms }) => {
  const router = useRouter();
  return (
    <div className="">
      <div className="profile-header"></div>
      <section className="container d-flex justify-content-between align-items-center">
        <OwnerCard />
        <div>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => {
              router.push("/profile/edit");
            }}
          >
            <span className="mx-1"> تعديل الحساب </span>
          </button>
        </div>
      </section>
      <div className="container mt-5">
        <RoomsCard Rooms={Rooms} roomscol={3} urllink="/profile/room" />
      </div>
    </div>
  );
};
