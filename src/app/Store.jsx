import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice.js";
import todoReducer from "../features/Todo/TodoSlice.jsx";
import userReducer from "../features/User/UserSlice.js";
import studentSlice from "../features/student/StudentSlice.js";
import studentMiddleware from "./studentMiddleware.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    user: userReducer,
    student: studentSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(studentMiddleware);
  },
  devTools: true,
});

export default store;
