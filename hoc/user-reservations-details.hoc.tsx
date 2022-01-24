import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RequestDetails } from "../components/reservation/request";
import { RoomDetails } from "../components/room/room-details";
import { RoomDetailsSwiper } from "../components/room/room-images-slider";
import { ProfileCard } from "../components/user/profile-card";
import { useBooking } from "../hook/booking.hook";
import { Booking } from "../models/bookings.model";
import { useRouter } from "next/router";
import { Room } from "../models/rooms";
import { Toast } from "../components/toast";
import { LoadingSpinner } from "../components/spinner";
import { ClientBooking } from "../components/reservation/client-Booking";

interface Props {
  booking: Booking;
}
export const UserReservationsDetailsHOC: React.FC<Props> = ({ booking }) => {
  const router = useRouter();
  const { reservationID } = router.query;
  const { BookingData, error, isLoading } = useBooking(reservationID, booking);
  if (BookingData) return <ClientBooking booking={BookingData} />;
  if (error) return <Toast message={error?.message} />;
  else return <LoadingSpinner color={"red"} loading={isLoading} />;
};
