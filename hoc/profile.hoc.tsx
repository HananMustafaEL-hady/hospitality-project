import Link from "next/link";
import React, { Fragment } from "react";
import { OwnerCard } from "../components/user/owner-card";
import { useRouter } from "next/router";
import { useProfile } from "../hook/profile.hook";
import { Owner } from "../models/owner.model";
import { Room, Roomspage } from "../models/rooms";
import { RoomsHOC } from "./rooms.hooc";
import { ProfileEditbtn } from "../components/profile/profile-edit-information/profile-edit-btn";
import useCurrentUser from "../hook/select-current-user.hook";
import { ProfileChatbtn } from "../components/profile/chat-btn";
interface Props {
  profile: Owner;
  Roomspage: Roomspage;
}

export const Profilehoc: React.FC<Props> = ({ profile, Roomspage }) => {
  const router = useRouter();
  const { profileID } = router.query;
  const { profileData, error } = useProfile(profileID, profile);
  const { user } = useCurrentUser();
  console.log(profileData);
  return (
    <div className="">
      <div className="profile-header"></div>
      <section className="container d-flex justify-content-between align-items-center">
        <OwnerCard owner={profileData} />
        {profileID == user?.id ? <ProfileEditbtn /> : <ProfileChatbtn />}
      </section>
      <div className="container mt-5">
        <RoomsHOC initialData={Roomspage} />
      </div>
    </div>
  );
};
