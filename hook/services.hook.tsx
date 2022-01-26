import useSWR from "swr";
import { Roomspage, Room } from "../models/rooms.model";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { Service } from "../models/services.model";
interface returnType {
  services?: [Service];
  isLoading: boolean;
  error?: AxiosError;
}
export function useServices(): returnType {
  const { data, error } = useSWR(`/services`, {});
  return {
    services: data,
    isLoading: !data && !error,
    error: error,
  };
}
