import React, { Fragment, useState } from "react";
import Image from "next/image";
import { LocationModal } from "../../home/home-filtration/filter-card/map-Modal/map";
import router from "next/router";
import { Room } from "../../../models/rooms.model";
import { ReservationSection } from "./reservation-section";
import { RoomServices } from "./room-services";
import { CapacitySection } from "./room-capacity";
import { Owner } from "../../../models/owner.model";
interface props {
  hasReservationSection: boolean;
  hasCapacitySection: boolean;
  room: Room;
}
export const RoomDetails: React.FC<props> = ({
  hasReservationSection,
  room,
  hasCapacitySection,
}) => {
  return (
    <Fragment>
      <p className="mb-5 room-details__room-title">{room?.name}</p>
      <div className=" room-details__reservarion">
        {hasCapacitySection ? (
          <CapacitySection
            id={room?._id}
            nightPrice={room?.nightPrice}
            capacity={room?.capacity}
          />
        ) : (
          ""
        )}
        {hasReservationSection ? (
          <ReservationSection id={room?._id} isbusy={room?.busy} />
        ) : (
          ""
        )}
      </div>
      <div className="room-details__line"></div>
      <div>
        <h2 className="title-subsection-18 f-bold">التفاصيل</h2>
        <p className="title-subsection-18">{room?.description}</p>
      </div>
      <div className="room-details__line"></div>
      <div>
        <h2 className="title-subsection-18 f-bold">الخدمات المقدمة</h2>

        <RoomServices roomServices={room?.services} />
      </div>

      <div className="room-details__line"></div>
      <LocationModal />
    </Fragment>
  );
};
