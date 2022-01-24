import { useRouter } from "next/router";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RequestDetails } from "../components/reservation/request";
import { RoomDetails } from "../components/room/room-details";
import { RoomDetailsSwiper } from "../components/room/room-images-slider";
import { LoadingSpinner } from "../components/spinner";
import { ProfileCard } from "../components/user/profile-card";
import { useBooking } from "../hook/booking.hook";
import { Toast } from "../components/toast";
import { Booking } from "../models/bookings.model";
import { ProviderBooking } from "../components/reservation/provider-booking";
interface Props {
  booking: Booking;
}
export const IncomingRequestDetailsHOC: React.FC<Props> = ({ booking }) => {
  const router = useRouter();
  const { requestID } = router.query;
  const { BookingData, error, isLoading } = useBooking(requestID, booking);
  console.log(BookingData);
  if (BookingData) return <ProviderBooking booking={BookingData} />;
  if (error) return <Toast message={error?.message} />;
  else return <LoadingSpinner color={"red"} loading={isLoading} />;
};
