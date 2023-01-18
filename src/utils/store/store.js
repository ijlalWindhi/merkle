import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducer/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
