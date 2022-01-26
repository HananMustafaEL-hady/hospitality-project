import useSWR from "swr";
import { Roomspage, Room } from "../models/rooms.model";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
interface returnType {
  Roomdata?: Room;
  isLoading: boolean;
  error?: AxiosError;
}
export function useRoom(id: any, fallbackData: Room | undefined): returnType {
  const { data, error } = useSWR(`/rooms/${id}`, { fallbackData });

  return {
    Roomdata: data,
    isLoading: !data && !error,
    error: error,
  };
}
