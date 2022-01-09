import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Image from "next/image";
import { Room } from "../../../models/Rooms";
import Link from "next/link";
export const RoomCard: React.FC<Room> = ({
  description,
  imageurl,
  location,
  countUsers,
  price,
  id,
  urllink,
}) => {
  const [stateFavorite, setStateFavorite] = useState(false);
  return (
    <Link href={urllink ? `${urllink}/${id}` : `room/${id}`}>
      <div className="room-card">
        <Card.Img variant="top" src={imageurl} />
        <div
          className="heart_icon"
          onClick={() => setStateFavorite(!stateFavorite)}
        >
          <i
            className={
              stateFavorite ? "fas fa-heart heart-fav" : "fas fa-heart"
            }
          ></i>
        </div>
        <div className="userIcon">
          <span>{countUsers} </span>
          <i className="fas fa-user"></i>
        </div>
        <div className="priceIcon">
          <span> L.E </span>
          <span> {price}</span>
        </div>
        <Card.Body className="card-body-room">
          <div>
            <h3 className="room-card__description">{description}</h3>
          </div>
          <div>
            <p className="room-card__location">
              <i className="fa fa-map-marker"></i> {location}
            </p>
          </div>
        </Card.Body>
      </div>
    </Link>
  );
};
