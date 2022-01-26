import router from "next/router";
import React from "react";
import { useRoom } from "../hook/room.hook";
import { useRouter } from "next/router";
import { Room } from "../models/rooms.model";
import { Toast } from "../components/toast";
import { ProfileRoomDetails } from "../components/profile/room-details";
import { LoadingSpinner } from "../components/spinner";

interface Props {
  room: Room;
}
export const ProfileRoomDetailsHOC: React.FC<Props> = ({ room }) => {
  const router = useRouter();
  const { roomID } = router.query;
  const { Roomdata, isLoading, error } = useRoom(roomID, room);
  console.log("Roomdata", Roomdata);
  if (Roomdata) return <ProfileRoomDetails room={Roomdata} />;
  if (error) return <Toast message={error.message} />;
  else return <LoadingSpinner color={"red"} loading={isLoading} />;
};
