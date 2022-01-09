import React, { Fragment, useState } from "react";
import Image from "next/image";
import { LocationModal } from "../../home-filtration/filter-card/map-Modal/map";
import router from "next/router";
import { ReservationSection } from "./reservation-section";
interface props {
  hasReservationSection: boolean;
}
export const RoomDetails: React.FC<props> = ({ hasReservationSection }) => {
  return (
    <Fragment>
      <p className="mb-5 room-details__room-title">
        غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين
        السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك
      </p>
      {hasReservationSection ? <ReservationSection /> : ""}
      <div className="room-details__line"></div>
      <div>
        <h2 className="title-subsection-18 f-bold">التفاصيل</h2>
        <p className="title-subsection-18">
          غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة
          بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين
          السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في
          كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند
          أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك
          48 بجانب أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب
          أكوا بارك غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك
          غرفة بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة
          بالعين السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين
          السخنة في كمباوند أروما بلوك 48 بجانب أكوا بارك غرفة بالعين السخنة في
          كمباوند أروما بلوك 48 بجانب أكوا بارك
        </p>
      </div>
      <div className="room-details__line"></div>
      <div>
        <h2 className="title-subsection-18 f-bold">الخدمات المقدمة</h2>
        <div className="room-details__icons">
          <Image src={`/room-services.svg`} width={17} height={17} />
          <span className="room-details__icons__text"> روم سيرفيس </span>
        </div>
        <div className="room-details__icons">
          <Image src={`/wifi.svg`} width={17} height={17} />
          <span className="room-details__icons__text"> واي فاي </span>
        </div>

        <div className="room-details__icons">
          <Image src={`/air-conditioner.svg`} width={17} height={17} />
          <span className="room-details__icons__text"> تكيف </span>
        </div>

        <div className="room-details__icons">
          <Image src={`/kitchen.svg`} width={17} height={17} />
          <span className="room-details__icons__text"> المطبخ </span>
        </div>
      </div>

      <div className="room-details__line"></div>
      <LocationModal />
    </Fragment>
  );
};
