import useSWR from "swr";
import { Roomspage, Room } from "../models/rooms";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
interface returnType {
  RoomspageProfile?: Roomspage;
  isLoadingRoomPagesProfile: boolean;
  errorRoomPagesProfile?: AxiosError;
}
export function useRoomPagesProfile(
  page: string | string[] | number,
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
    RoomspageProfile: data,
    isLoadingRoomPagesProfile: !data && !error,
    errorRoomPagesProfile: error,
  };
}
