import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { destroyCookie, setCookie } from "nookies";
import type { RootState } from "../store/store";
import { createSelector } from "@reduxjs/toolkit";
import { purgeStoredState } from "redux-persist";
import { Cookies } from "react-cookie";

interface User {
  name: string;
  phone: string;
  _id: number;
  profileImage: { original: ""; thumbnail: "" };
  roomCount: number;
  stripeCustomerId: string;
}
type AuthState = {
  user: User | null;
  token: string | null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    user: null,
  } as AuthState,
  reducers: {
    addAuthUser: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      console.log(state);
      state.user = user;
      state.token = token;
      setCookie(null, "token", token);
    },
    updateUser: (
      state,
      { payload: { user } }: PayloadAction<{ user: User }>
    ) => {
      state.user = user;
    },
    logout: (state) => {
      state.token = "";
      state.user = null;
    },

    authFail: (
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) => {},
  },
});

const { reducer, actions } = authSlice;
export const { addAuthUser, authFail, updateUser, logout } = actions;
export default reducer;

export const useCurrentUser = createSelector(
  (state: RootState) => state.auth.user,
  (user) => {
    return user;
  }
);
