import useSWR from "swr";
import { AxiosError } from "axios";
import { Owner } from "../models/owner.model";
import { Room } from "../models/rooms";
interface returnType {
  favourites?: [Room];
  isLoading: boolean;
  error?: AxiosError;
}
export function useFavourites(fallbackData?: Owner): returnType {
  const { data, error } = useSWR(`/users/profile`, {
    fallbackData,
  });

  return {
    favourites: data?.favourite,
    isLoading: !data && !error,
    error: error,
  };
}
