import React, { Fragment, useEffect, useState } from "react";
import { RoomsCard } from "../components/room/rooms-card";
import { Roomspage } from "../models/rooms.model";
import { LoadingSpinner } from "../components/spinner";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import { HomeHeader } from "../components/home/home-header";
import { useRoomPagesProfile } from "../hook/rooms-profile.hook";
import { useRoomPages } from "../hook";
import { useRoomSearchPages } from "../hook/rooms-search.hook";
import Image from "next/image";
import { Pagination } from "../components/pagination";
interface Props {
  initialData?: Roomspage;
}

export const RoomsSearchHOC: React.FC<Props> = ({ initialData }) => {
  const router = useRouter();

  const { Roomspage, isLoading, error } = useRoomSearchPages(
    router?.query?.page ? router?.query?.page : 1,
    initialData
  );

  return (
    <Fragment>
      <section className="container mt-5">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <LoadingSpinner color={"green"} loading={isLoading} />
          </div>
        ) : Roomspage?.data.length ? (
          <Fragment>
            <RoomsCard
              Rooms={Roomspage.data}
              roomscol={3}
              isBookingCard={false}
            />
            <Pagination maxPages={Roomspage?.pageCount} />
          </Fragment>
        ) : (
          <div className="d-flex  flex-column justify-content-center align-items-center ">
            <h3 className="text-primary f-bold"> لا توجد غرف لنتائج البحث</h3>
            <Image
              src="/Search.png"
              width={250}
              height={250}
              objectFit="contain"
            />
          </div>
        )}
      </section>
    </Fragment>
  );
};
