import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Image from "next/image";
import { RoomIncomingReques } from "../../../../models/Rooms";
import Link from "next/link";
export const IncomingRequestRoomCard: React.FC<RoomIncomingReques> = ({
  description,
  imageurl,
  location,
  FromDate,
  Todate,
  id,
  price,
}) => {
  return (
    <Link href={`/profile/incomingrequests/${id}`}>
      <div className="IncomingRequestRoomCard">
        <div className="IncomingRequestRoomCard__img">
          <img src={imageurl} />
        </div>
        <div className="IncomingRequestRoomCard__right">
          <h3 className="IncomingRequestRoomCard__description">
            {description}
          </h3>
          <h4 className="IncomingRequestRoomCard__location">
            <i className="fa fa-map-marker"></i>
            {location}
          </h4>
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="IncomingRequestRoomCard__date">
              <i className="fas fa-calendar-week"></i>
              <span> من تاريخ</span>
              {FromDate}
              <span> إلى تاريخ</span>
              {Todate}
            </h4>
            <h4 className="IncomingRequestRoomCard__price">{price}L.E</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};
