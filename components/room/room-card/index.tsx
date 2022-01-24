import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { BlurImage } from "../../blurimage";
import { Room } from "../../../models/rooms";
import useCurrentUser from "../../../hook/select-current-user.hook";
import axios from "../../../utils/axios.util";
interface Props {
  room: Room;
  isBookingCard: boolean;
}
export const RoomCard: React.FC<Props> = ({ room, isBookingCard }) => {
  const [stateFavorite, setStateFavorite] = useState(false);

  const AddToFavourites = async () => {
    setStateFavorite(!stateFavorite);

    try {
      const response = await axios.patch(`/users/favourites/${room._id}`);
      const data = await response.data;
      return data;
    } catch (error: any) {}
  };
  const { user } = useCurrentUser();
  const cardurl = isBookingCard
    ? `/profile/reservations/${room?.bookingid}`
    : room?.owner?._id == user?._id
    ? `/profile/room/${room._id}`
    : `/room/${room._id}`;
  return (
    <div className="room-card">
      <div className="heart_icon" onClick={() => AddToFavourites()}>
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
