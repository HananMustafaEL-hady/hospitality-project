import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { Room } from "../../../../models/rooms.model";
interface RoomIncomingReques {
  room: Room;
}

export const IncomingRequestRoomCard: React.FC<RoomIncomingReques> = ({
  room,
}) => {
  return (
    <Link href={`/profile/incomingrequests/${room.bookingid}`}>
      <div className="IncomingRequestRoomCard">
        <div className="IncomingRequestRoomCard__img">
          <img src={room.images[0].original} />
        </div>
        <div className="IncomingRequestRoomCard__right">
          <h3 className="IncomingRequestRoomCard__description">{room.name}</h3>
          <h4 className="IncomingRequestRoomCard__location">
            <i className="fa fa-map-marker"></i>
            {room.location.coordinates}
          </h4>
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="IncomingRequestRoomCard__date">
              <i className="fas fa-calendar-week"></i>
              <span> من تاريخ</span>
              {/* {room} */}
              <span> إلى تاريخ</span>
              {/* {room.} */}
            </h4>
            <h4 className="IncomingRequestRoomCard__price">
              {room.nightPrice}L.E
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};
