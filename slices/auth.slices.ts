import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { destroyCookie, setCookie } from "nookies";
import type { RootState } from "../store/store";

interface User {
  name: string;
  phone: string;
  id: number;
  profileImage: [];
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
export const { addAuthUser, authFail } = actions;
export default reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
