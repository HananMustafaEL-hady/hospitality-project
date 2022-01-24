import useSWR from "swr";
import { Roomspage, Room } from "../models/rooms";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { Booking, BookingsPage } from "../models/bookings.model";
interface returnType {
  BookingData?: Booking;
  isLoading: boolean;
  error?: AxiosError;
}
export function useBooking(
  bookingID: string | string[] | undefined,
  fallbackData: Booking | undefined
): returnType {
  const { data, error } = useSWR(`/bookings/${bookingID}`, {
    fallbackData,
  });
  return {
    BookingData: data,
    isLoading: !data && !error,
    error: error,
  };
}
