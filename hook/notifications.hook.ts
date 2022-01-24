import { AxiosError } from "axios";
import useSWR from "swr";
import {
  Notificationpage,
  NotificationProps,
} from "../models/notification.model";

interface returnType {
  count?: number;
  isLoading: boolean;
  error?: AxiosError;
}
export const useNotificationsCount = (): returnType => {
  const { data, error } = useSWR("/notifications/count");
  return {
    count: data,
    isLoading: !data && !error,
    error: error,
  };
};

interface returnTypeNotificationsMessage {
  notificationPage?: Notificationpage;
  isLoading: boolean;
  error?: AxiosError;
}

export const useNotificationsMessages = (
  page: number,
  fallbackData?: Notificationpage | undefined
): returnTypeNotificationsMessage => {
  console.log(`/notifications?pageNumber=${page}&limit=12`);
  const { data, error } = useSWR(`/notifications?pageNumber=${page}&limit=12`, {
    fallbackData,
  });
  console.log(data);
  console.log(page);
  return {
    notificationPage: data,
    isLoading: !data && !error,
    error: error,
  };
};
