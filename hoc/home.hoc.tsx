import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { FilterCard } from "../components/home-filtration/filter-card";
import { RoomsCard } from "../components/room/rooms-card";
import { Room } from "../models/inputs/Rooms";
import { Roomspage } from "../models/rooms";
import { useRoomPages } from "../hook";
import { LoadingSpinner } from "../components/spinner";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  initialData: Roomspage;
}

export const HomeHOC: React.FC<Props> = ({ initialData }) => {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [roomsScroll, setRoomsScroll] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);

  const { Roomspage, isLoading, error } = useRoomPages(pageNumber, initialData);
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
      <section className="header-home ">
        <h2 className="header-home__title ">
          هل تواجه صعوبة في إختيار وجهتك القادمة؟
          <br />! لدينا الحل
        </h2>
      </section>
      <FilterCard />
      <section className="container mt-5">
        <h2 className="mb-3 f-bold"> غرفة قريبة منك !</h2>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <LoadingSpinner color={"green"} loading={isLoading} />
          </div>
        ) : (
          ""
        )}
        <InfiniteScroll
          dataLength={roomsScroll.length || 0}
          style={{ overflow: "hidden" }}
          next={() => setPageNumber(pageNumber + 1)}
          hasMore={hasMore}
          loader={<LoadingSpinner color={"green"} loading={true} />}
          // endMessage={<h4>لا يوجد المزيد </h4>}
        >
          {Roomspage && <RoomsCard Rooms={roomsScroll} roomscol={3} />}
        </InfiniteScroll>
      </section>
    </Fragment>
  );
};
