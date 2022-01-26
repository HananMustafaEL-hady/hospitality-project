import useSWR from "swr";
import { AxiosError } from "axios";
import { Owner } from "../models/owner.model";
import { Room } from "../models/rooms.model";
import Router from "next/router";
interface returnType {
  owner?: Owner;
  isLoading: boolean;
  error?: AxiosError;
}
export function useFavourites(fallbackData?: Owner): returnType {
  const { data, error } = useSWR(`/users/profile`, {
    fallbackData,
  });

  return {
    owner: data,
    isLoading: !data && !error,
    error: error,
  };
}
