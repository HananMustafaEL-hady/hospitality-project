import { useSelector } from "react-redux";
import { RootState } from "../store/store";
export default function useCurrentUser() {
  const user = useSelector((state: RootState) => state.auth.user);
  return { user };
}
