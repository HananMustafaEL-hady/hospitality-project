import React, { Fragment, useEffect, useState } from "react";
import { RoomsCard } from "../../room/rooms-card";
import { LoadingSpinner } from "../../spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { BookingsPage } from "../../../models/bookings.model";
import { AxiosError } from "axios";
interface Props {
  Roomspage?: BookingsPage;
  isLoading: boolean;
  error: AxiosError<any, any> | undefined;
  pageNumber: number;
  setPageNumber: Function;
}

export const RoomsInfiniteScroll: React.FC<Props> = ({
  Roomspage,
  isLoading,
  error,
  pageNumber,
  setPageNumber,
}) => {
  const [roomsScroll, setRoomsScroll] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  console.log(roomsScroll);

  useEffect(() => {
    if (Roomspage?.data && !isLoading) {
      Roomspage?.data?.map((item) =>
        setRoomsScroll((prevState: any) => [
          ...prevState,
          { ...item.room, bookingid: item.id },
        ])
      );
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
        ) : (
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
                roomscol={4}
                isBookingCard={true}
              />
            )}
          </InfiniteScroll>
        )}
      </section>
    </Fragment>
  );
};
