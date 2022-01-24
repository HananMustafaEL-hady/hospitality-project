import React, { useState } from "react";
import { RoomsInfiniteScroll } from "../components/reservation/infinite-scroll";
import { ProvidersInfiniteScroll } from "../components/reservation/request/infinite-scroll";
import { useBookingsProvidersPages } from "../hook/booking-providers.hook";
import { useBookingsPages } from "../hook/bookings-clients.hook.";
import { BookingsPage } from "../models/bookings.model";
interface props {
  initialData: BookingsPage;
  status: string;
}
export const BookingsProvidersRoomsHOC: React.FC<props> = ({
  initialData,
  status,
}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { Bookingspage, isLoading, error } = useBookingsProvidersPages(
    pageNumber,
    initialData,
    status
  );
  return (
    <ProvidersInfiniteScroll
      isLoading={isLoading}
      error={error}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
      Roomspage={Bookingspage}
    />
  );
};
