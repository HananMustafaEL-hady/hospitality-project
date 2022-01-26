import useSWR from "swr";
import { Roomspage, Room } from "../models/rooms.model";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { BookingsPage } from "../models/bookings.model";
interface returnType {
  Bookingspage?: BookingsPage;
  isLoading: boolean;
  error?: AxiosError;
}
export function useBookingsProvidersPages(
  page: number,
  fallbackData: BookingsPage | undefined,
  status?: string
): returnType {
  fallbackData = page == 1 ? fallbackData : undefined;
  const { data, error } = useSWR(
    `/bookings/providers?pageNumber=${page}&limit=12&status=${status}`,
    {
      fallbackData,
    }
  );

  return {
    Bookingspage: data,
    isLoading: !data && !error,
    error: error,
  };
}
