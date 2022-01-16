import Link from "next/link";
import React, { Fragment } from "react";
import { RoomsCard } from "../components/room/rooms-card";
import { OwnerCard } from "../components/user/owner-card";
import Cookies from "js-cookie";

interface Props {
  profile: Owner;
}
import { useRouter } from "next/router";
import { useProfile } from "../hook/profile.hook";
import { Owner } from "../models/owner.model";
export const Profilehoc: React.FC<Props> = ({ profile }) => {
  const token = Cookies.get("token");
  console.log(token);
  const { profileData, error } = useProfile();
  console.log(profileData);
  const router = useRouter();
  return (
    <div className="">
      <div className="profile-header"></div>
      <section className="container d-flex justify-content-between align-items-center">
        <OwnerCard owner={profileData} />
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
        {/* <RoomsCard Rooms={Rooms} roomscol={3} urllink="/profile/room" /> */}
      </div>
    </div>
  );
};
