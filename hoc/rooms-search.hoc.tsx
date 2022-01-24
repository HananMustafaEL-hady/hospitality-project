import React, { Fragment, useEffect, useState } from "react";
import { RoomsCard } from "../components/room/rooms-card";
import { Roomspage } from "../models/rooms";
import { LoadingSpinner } from "../components/spinner";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import { HomeHeader } from "../components/home/home-header";
import { useRoomPagesProfile } from "../hook/rooms-profile.hook";
import { useRoomPages } from "../hook";
import { useRoomSearchPages } from "../hook/rooms-search.hook";
import Image from "next/image";
interface Props {
  initialData?: Roomspage;
}

export const RoomsSearchHOC: React.FC<Props> = ({ initialData }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [roomsScroll, setRoomsScroll] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const { Roomspage, isLoading, error } = useRoomSearchPages(
    pageNumber,
    initialData
  );
  useEffect(() => {
    if (Roomspage?.data && !isLoading) {
      setRoomsScroll((prevState: any) => [...prevState, ...Roomspage.data]);
    }
    if (pageNumber == maxPages) {
      setHasMore(false);
    }
  }, [Roomspage, isLoading]);
  const maxPages = Roomspage
    ? Math.ceil(Roomspage.totalCount / Roomspage?.limit)
    : 0;

  return (
    <Fragment>
      <section className="container mt-5">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <LoadingSpinner color={"green"} loading={isLoading} />
          </div>
        ) : Roomspage?.data.length ? (
          <InfiniteScroll
            dataLength={roomsScroll.length || 0}
            style={{ overflow: "hidden" }}
            next={() => setPageNumber(pageNumber + 1)}
            hasMore={hasMore}
            loader={
              <div className="d-flex justify-content-center">
                <LoadingSpinner color={"green"} loading={isLoading} />
              </div>
            }
            // endMessage={<h4>لا يوجد المزيد </h4>}
          >
            {Roomspage && (
              <RoomsCard
                Rooms={roomsScroll}
                roomscol={3}
                isBookingCard={false}
              />
            )}
          </InfiniteScroll>
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
