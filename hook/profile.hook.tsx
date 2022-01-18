import useSWR from "swr";
import { AxiosError } from "axios";
import { Owner } from "../models/owner.model";
interface returnType {
  profileData?: any;
  isLoading: boolean;
  error?: AxiosError;
}
export function useProfile(
  id: any,
  fallbackData: Owner | undefined
): returnType {
  const { data, error } = useSWR(`/users/${id}`, {
    fallbackData,
  });

  return {
    profileData: data,
    isLoading: !data && !error,
    error: error,
  };
}
