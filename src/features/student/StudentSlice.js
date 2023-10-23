import { createSlice } from "@reduxjs/toolkit";

//initialState
const initialState = {
  students: [],
  loading: false,
  message: null,
  error: null,
};

//create student slice
export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addNewStudent: {
      reducer: (state, { type, payload }) => {
        state.students.push(payload);
      },
      prepare: (data) => {
        return {
          payload: {
            ...data,
            isAdmin: true,
            message: "I am learning",
          },
        };
      },
    },
  },
  extraReducers: (builder) => {},
});

//export selector

//export actions
export const { addNewStudent } = studentSlice.actions;

//export reducer
export default studentSlice.reducer;
