import useSWR from "swr";
import { AxiosError } from "axios";
interface returnType {
  profileData?: any;
  isLoading: boolean;
  error?: AxiosError;
}
export function useProfile(): returnType {
  const { data, error } = useSWR(`/users/profile`);

  return {
    profileData: data,
    isLoading: !data && !error,
    error: error,
  };
}
