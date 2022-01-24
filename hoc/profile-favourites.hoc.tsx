import { useRouter } from "next/router";
import React, { useState } from "react";
import { useFavourites } from "../hook/favourites.hook";
import { Room } from "../models/rooms";

interface Props {
  rooms: [Room];
}
const ProfileFavouriteshoc: React.FC<Props> = ({ rooms }) => {
  const { favourites, error, isLoading } = useFavourites();

  return <></>;
};

export default ProfileFavouriteshoc;
