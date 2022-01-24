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
  // error: string;
  // isloading: boolean;
  // isAuth: boolean;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    user: null,
    // isAuth: Boolean(authtoken),
    // isloading: false,
  } as AuthState,
  reducers: {
    authPending: (state) => {
      // state.isloading = true;
    },
    addAuthUser: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      console.log(state);
      state.user = user;
      state.token = token;
      // state.isloading = false;
      // state.isAuth = true;
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
      destroyCookie(null, "token");
    },

    authFail: (
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) => {
      // state.isloading = false;
      // state.isAuth = false;
      // state.error = message;
    },
  },
});

const { reducer, actions } = authSlice;
export const { addAuthUser, authFail, updateUser, logout } = actions;
export default reducer;

export const CurrentUser = (state: RootState) => state.auth;
type Return = (state: RootState) => string | User | null;

export const selectcurrentUser = (): Return =>
  createSelector(CurrentUser, (state) => state.user);
export const selectTokenUser = (): Return =>
  createSelector(CurrentUser, (state) => state.token);
