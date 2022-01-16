import useSWR from "swr";
import { Roomspage, Room } from "../models/rooms";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
interface returnType {
  Room?: Room;
  isLoading: boolean;
  error?: AxiosError;
}
export function useRoom(
  id: number,
  fallbackData: Room | undefined
): returnType {
  const { data, error } = useSWR(`/rooms/${id}`, { fallbackData });
  console.log(id);
  console.log(data);
  return {
    Room: data,
    isLoading: !data && !error,
    error: error,
  };
}
