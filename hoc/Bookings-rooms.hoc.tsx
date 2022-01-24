import React, { useState } from "react";
import { RoomsInfiniteScroll } from "../components/reservation/infinite-scroll";
import { useBookingsPages } from "../hook/bookings-clients.hook.";
import { BookingsPage } from "../models/bookings.model";
interface props {
  initialData?: BookingsPage;
  status: string;
}
export const BookingsRoomsHOC: React.FC<props> = ({ status, initialData }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { Bookingspage, isLoading, error } = useBookingsPages(
    pageNumber,
    initialData,
    status
  );
  return (
    <RoomsInfiniteScroll
      isLoading={isLoading}
      error={error}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
      Roomspage={Bookingspage}
    />
  );
};
