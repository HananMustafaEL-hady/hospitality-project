import React, { Fragment, useEffect, useState } from "react";
import { FilterCard } from "../components/home/home-filtration/filter-card";
import { RoomsCard } from "../components/room/rooms-card";
import { Roomspage } from "../models/rooms";
import { useRoomPages } from "../hook";
import { LoadingSpinner } from "../components/spinner";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import { HomeHeader } from "../components/home/home-header";
import { Pagination } from "../components/pagination";

interface Props {
  initialData?: Roomspage;
}

export const HomeHOC: React.FC<Props> = ({ initialData }) => {
  const router = useRouter();
  const { Roomspage, isLoading, error } = useRoomPages(
    router?.query?.page ? router?.query?.page : 1,
    initialData
  );

  return (
    <Fragment>
      <HomeHeader />
      <FilterCard />
      <section className="container mt-5">
        <h2 className="mb-3 f-bold"> غرفة قريبة منك !</h2>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <LoadingSpinner color={"green"} loading={isLoading} />
          </div>
        ) : (
          Roomspage && (
            <RoomsCard
              Rooms={Roomspage.data}
              roomscol={3}
              isBookingCard={false}
            />
          )
        )}
      </section>
      <Pagination maxPages={Roomspage?.pageCount} />
    </Fragment>
  );
};
