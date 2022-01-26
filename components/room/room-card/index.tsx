import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { BlurImage } from "../../blurimage";
import { Room } from "../../../models/rooms.model";
import useCurrentUser from "../../../hook/select-current-user.hook";
import axios from "../../../utils/axios.util";
import { mutate } from "swr";
import { Owner } from "../../../models/owner.model";
import { AddToFavouritesAPI } from "../../../api/favourites.api";
import { ToastError } from "../../toast-error";
import { AxiosError } from "axios";

interface Props {
  room: Room;
  isBookingCard: boolean;
}
export const RoomCard: React.FC<Props> = ({ room, isBookingCard }) => {
  const [stateFavorite, setStateFavorite] = useState(
    room?.isFavourite ? room?.isFavourite : false
  );
  const [errorstate, setErrorstate] = useState<AxiosError>();

  const AddToFavourites = async (roomid: string) => {
    // setStateFavorite(!stateFavorite);
    const res = AddToFavouritesAPI(roomid, setStateFavorite, stateFavorite);
    res.then((res) => {
      setErrorstate(res);
    });
  };
  const { user } = useCurrentUser();
  const cardurl = isBookingCard
    ? `/profile/reservations/${room?.bookingid}`
    : room?.owner?._id == user?._id
    ? `/profile/room/${room._id}`
    : `/room/${room._id}`;
  return (
    <div className="room-card">
      {errorstate?.message ? <ToastError error={errorstate} /> : ""}
      <div className="heart_icon" onClick={() => AddToFavourites(room._id)}>
        <i
          className={stateFavorite ? "fas fa-heart heart-fav" : "fas fa-heart"}
        ></i>
      </div>
      <Link href={cardurl}>
        <div>
          <div className="img-top">
            {room && room?.images && <BlurImage image={room?.images[0]} />}
          </div>
          <div className="userIcon">
            <span>{room?.capacity} </span>
            <i className="fas fa-user"></i>
          </div>
          <div className="priceIcon">
            <span> L.E </span>
            <span> {room?.nightPrice}</span>
          </div>
          <Card.Body className="card-body-room">
            <div>
              {room?.name?.length >= 80 ? (
                <h3 className="room-card__description">
                  {room?.name.substring(1, 80)}...
                </h3>
              ) : (
                <h3 className="room-card__description">{room?.name}</h3>
              )}
            </div>
            <div>
              <p className="room-card__location">
                <i className="fa fa-map-marker"></i>{" "}
                {room?.location?.coordinates}
              </p>
            </div>
          </Card.Body>
        </div>
      </Link>
    </div>
  );
};
