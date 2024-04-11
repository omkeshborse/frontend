import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js";
import taskReducer from "../features/taskSlice.js";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});
