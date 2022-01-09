import React, { Fragment } from "react";
import Image from "next/image";
import { FilterCard } from "../components/home-filtration/filter-card";
import { RoomsCard } from "../components/room/rooms-card";
import { Room } from "../models/Rooms";

interface Props {
  Rooms: [Room];
}

export const Homehoc: React.FC<Props> = ({ Rooms }) => {
  return (
    <Fragment>
      <section className="header-home ">
        <h2 className="header-home__title ">
          هل تواجه صعوبة في إختيار وجهتك القادمة؟
          <br />! لدينا الحل
        </h2>
      </section>
      <FilterCard />
      <section className="container mt-5">
        <h2 className="mb-3 f-bold"> غرفة قريبة منك !</h2>
        <RoomsCard Rooms={Rooms} roomscol={3} />
      </section>
    </Fragment>
  );
};
