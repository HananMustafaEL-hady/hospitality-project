import useSWR from "swr";
import { Roomspage, Room } from "../models/rooms";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
interface returnType {
  Roomspage?: Roomspage;
  isLoading: boolean;
  error?: AxiosError;
}
export function useRoomPages(
  page: number,
  fallbackData: Roomspage | undefined
): returnType {
  // fallbackData = page == 1 ? fallbackData : undefined;
  const { data, error } = useSWR(
    `https://index-hospitality.herokuapp.com/rooms?pageNumber=${page}&limit=12`
    // { fallbackData }
  );
  console.log(page);
  console.log(data);
  return {
    Roomspage: data,
    isLoading: !data && !error,
    error: error,
  };
}
