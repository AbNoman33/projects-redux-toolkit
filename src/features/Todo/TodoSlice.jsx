import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    msg: "",
  },
  reducers: {
    addNewTodo: (state, { type, payload }) => {
      state.todos.push(payload);
      console.log(type);
    },
    deleteTodo: (state, { type, payload }) => {
      state.todos = state.todos.filter((data) => data !== payload);
    },
  },
});

export const { addNewTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
