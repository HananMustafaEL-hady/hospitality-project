import useSWR from "swr";
import { Roomspage, Room } from "../models/rooms";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
interface returnType {
  Roomspage?: Roomspage;
  isLoading: boolean;
  error?: AxiosError;
}
export function useRoomPagesProfile(
  page: number,
  fallbackData: Roomspage | undefined,
  id?: string | string[] | undefined
): returnType {
  fallbackData = page == 1 ? fallbackData : undefined;
  const { data, error } = useSWR(
    `/rooms?pageNumber=${page}&limit=12&owners=${id}`,
    {
      fallbackData,
    }
  );

  return {
    Roomspage: data,
    isLoading: !data && !error,
    error: error,
  };
}
