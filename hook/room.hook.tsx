import useSWR from "swr";
import { Roomspage, Room } from "../models/rooms";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
interface returnType {
  Roomdata?: Room;
  isLoading: boolean;
  error?: AxiosError;
}
export function useRoom(id: any, fallbackData: Room | undefined): returnType {
  const { data, error } = useSWR(`/rooms/${id}`, { fallbackData });
  console.log(id);
  console.log(data);
  return {
    Roomdata: data,
    isLoading: !data && !error,
    error: error,
  };
}
