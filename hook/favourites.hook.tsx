import useSWR from "swr";
import { AxiosError } from "axios";
import { Owner } from "../models/owner.model";
import { Room } from "../models/rooms";
import Router from "next/router";
interface returnType {
  owner?: Owner;
  isLoading: boolean;
  error?: AxiosError;
}
export function useFavourites(fallbackData?: Owner): returnType {
  const { data, error } = useSWR(`/users/${Router.query.profileID}`, {
    fallbackData,
  });

  return {
    owner: data,
    isLoading: !data && !error,
    error: error,
  };
}
