import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Image from "next/image";
import { RoomCardProps } from "../../../models/inputs/Rooms";
import Link from "next/link";
import { Blurhash } from "react-blurhash";
import { BlurImage } from "../../blurimage";

export const RoomCard: React.FC<RoomCardProps> = ({ room, urllink }) => {
  const [stateFavorite, setStateFavorite] = useState(false);
  return (
    <Link href={urllink ? `${urllink}/${room.id}` : `room/${room.id}`}>
      <div className="room-card">
        <div className="img-top">
          <BlurImage image={room.images[0]} />
        </div>

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
          <span>{room.capacity} </span>
          <i className="fas fa-user"></i>
        </div>
        <div className="priceIcon">
          <span> L.E </span>
          <span> {room.nightPrice}</span>
        </div>
        <Card.Body className="card-body-room">
          <div>
            <h3 className="room-card__description">{room.description}</h3>
          </div>
          <div>
            <p className="room-card__location">
              <i className="fa fa-map-marker"></i> {room.location.coordinates}
            </p>
          </div>
        </Card.Body>
      </div>
    </Link>
  );
};
