import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    msg: "",
    err: null,
  },
  reducers: {
    increment: (state, { type, payload }) => {
      state.count = state.count + 1;
      state.msg = "Number Incrementd";
    },
    decrement: (state, { type, payload }) => {
      state.count = state.count - 1;
    },
    reset: (state, { type, payload }) => {
      state.count = 0;
      state.msg = "Reset Done";
    },
    random: (state, { type, payload }) => {
      state.count = payload;
      state.msg = "Random number generated";
      state.err = "Error created";
    },
  },
});

export const { increment, decrement, reset, random } = CounterSlice.actions;

export default CounterSlice.reducer;
