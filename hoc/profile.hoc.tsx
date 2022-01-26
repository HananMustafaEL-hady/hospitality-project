import Link from "next/link";
import React, { Fragment } from "react";
import { OwnerCard } from "../components/user/owner-card";
import { useRouter } from "next/router";
import { useProfile } from "../hook/profile.hook";
import { Owner } from "../models/owner.model";
import { Room, Roomspage } from "../models/rooms";
import { ProfileEditbtn } from "../components/profile/profile-edit-information/profile-edit-btn";
import useCurrentUser from "../hook/select-current-user.hook";
import { ProfileChatbtn } from "../components/profile/chat-btn";
import { useRoomPagesProfile } from "../hook/rooms-profile.hook";
import { RoomsCard } from "../components/room/rooms-card";
import { Pagination } from "../components/pagination";
import { LoadingSpinner } from "../components/spinner";

interface Props {
  profile: Owner;
  Roomspage: Roomspage;
}

export const Profilehoc: React.FC<Props> = ({ profile, Roomspage }) => {
  const router = useRouter();
  const { profileID } = router.query;
  const { profileData, isLoading, error } = useProfile(profileID, profile);
  const { user } = useCurrentUser();
  const { RoomspageProfile, isLoadingRoomPagesProfile, errorRoomPagesProfile } =
    useRoomPagesProfile(
      router?.query?.page ? router?.query?.page : 1,
      Roomspage,
      profileID
    );
  if (profileData)
    return (
      <div className="">
        <div className="profile-header"></div>
        <section className="container d-flex justify-content-between align-items-center">
          <OwnerCard owner={profileData} />
          {profileID == user?._id ? <ProfileEditbtn /> : <ProfileChatbtn />}
        </section>
        <div className="container mt-5">
          {RoomspageProfile ? (
            <Fragment>
              <RoomsCard
                Rooms={RoomspageProfile.data}
                roomscol={3}
                isBookingCard={false}
              />
              {Roomspage?.pageCount <= 1 ? (
                ""
              ) : (
                <Pagination maxPages={Roomspage?.pageCount} />
              )}
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  else
    return (
      <div className="d-flex justify-content-center mt-32">
        <LoadingSpinner color={"green"} loading={isLoading} />
      </div>
    );
};
