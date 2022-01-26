import axios from "../utils/axios.util";
import { mutate } from "swr";
export const AddToFavouritesAPI = async (
  roomid: string,
  setStateFavorite: Function,
  stateFavorite: boolean
) => {
  try {
    const response = await axios.patch(`/users/favourites/${roomid}`);
    setStateFavorite(!stateFavorite);

    mutate(`/users/profile`);
    const data = await response.data;
    return data;
  } catch (error: any) {
    return error;
  }
};
