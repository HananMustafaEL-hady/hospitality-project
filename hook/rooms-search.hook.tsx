// import useSWR from "swr";
// import { Roomspage, Room } from "../models/rooms";
// import { useRouter } from "next/router";
// import { AxiosError } from "axios";
// interface returnType {
//   Roomspage?: Roomspage;
//   isLoading: boolean;
//   error?: AxiosError;
// }
// export function useRoomPages(
//   page: number,
//   fallbackData: Roomspage | undefined
// ): returnType {
//   fallbackData = page == 1 ? fallbackData : undefined;
//   const { data, error } = useSWR(`/rooms?pageNumber=${page}&limit=12`, {
//     fallbackData,
//   });

//   return {
//     Roomspage: data,
//     isLoading: !data && !error,
//     error: error,
//   };
// }

import useSWR from "swr";
import { Roomspage, Room } from "../models/rooms";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
interface returnType {
  Roomspage?: Roomspage;
  isLoading: boolean;
  error?: AxiosError;
}
export function useRoomSearchPages(
  page: number,
  fallbackData: Roomspage | undefined
): returnType {
  fallbackData = page == 1 ? fallbackData : undefined;

  const router = useRouter();
  const {
    minNightPrice,
    maxNightPrice,
    longitude,
    latitude,
    service,
    capacity,
  } = router.query;

  let url = "";
  if (latitude && longitude) {
    url = `/rooms?pageNumber=${page}&limit=12&minNightPrice=${
      minNightPrice ? minNightPrice : ""
    }&maxNightPrice=${
      maxNightPrice ? maxNightPrice : ""
    }&longitude=${longitude}&latitude=${latitude}&service=${
      service ? service : ""
    }&minCapacity=${capacity ? capacity : ""}&maxCapacity=${
      capacity ? capacity : ""
    }`;
  } else {
    url = `/rooms?pageNumber=${page}&limit=12&minNightPrice=${
      minNightPrice ? minNightPrice : ""
    }&maxNightPrice=${maxNightPrice ? maxNightPrice : ""}&service=${
      service ? service : []
    }&minCapacity=${capacity ? capacity : ""}&maxCapacity=${
      capacity ? capacity : ""
    }`;
  }
  const { data, error } = useSWR(url, {
    fallbackData,
  });

  return {
    Roomspage: data,
    isLoading: !data && !error,
    error: error,
  };
}
