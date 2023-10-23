import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchAllUsers } from "./UserApi";

//initial State
const initialState = {
  users: [],
  loading: false,
  message: null,
  error: null,
};

//create user slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  rducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state, { type, payload }) => {
        state.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, { type, payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(fetchAllUsers.rejected, (state, { type, payload }) => {
        state.loading = false;
      })
      .addCase(deleteUser.fulfilled, (state, { type, payload }) => {
        state.users = state.users.filter((data) => data._id !== payload);
        state.loading = false;
      })
      .addCase(deleteUser.pending, (state, { type, payload }) => {
        state.loading = true;
      })
      .addCase(deleteUser.rejected, (state, { type, payload }) => {
        state.loading = false;
      })
      .addCase(createUser.fulfilled, (state, { type, payload }) => {
        state.users.push(payload.user);
      });
  },
});

// export slice selectors
export const getAllUserData = (state) => state.user;

//slice exports
export const {} = userSlice.actions;

//export reducer
export default userSlice.reducer;
