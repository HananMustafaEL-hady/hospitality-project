import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { RoomCard } from "../components/room/room-card";
import { RoomsCard } from "../components/room/rooms-card";
import { LoadingSpinner } from "../components/spinner";
import { useFavourites } from "../hook/favourites.hook";
import { Room } from "../models/rooms.model";

interface Props {
  rooms: [Room];
}
const ProfileFavouriteshoc: React.FC<Props> = ({ rooms }) => {
  const { owner, error, isLoading } = useFavourites();
  if (isLoading) return <LoadingSpinner color={"red"} loading={isLoading} />;
  if (owner)
    return (
      <div className="container mt-5">
        <RoomsCard
          Rooms={owner.favourites}
          roomscol={3}
          isBookingCard={false}
        />
      </div>
    );

  return <></>;
};

export default ProfileFavouriteshoc;
