import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get all users data
export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    const response = await axios.get("http://localhost:5050/api/v1/user/");
    return response.data;
  }
);

//get all users data
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  await axios.delete(`http://localhost:5050/api/v1/user/${id}`);
  return id;
});

//get all users data
export const createUser = createAsyncThunk("user/createUser", async (data) => {
  const response = await axios.post(`http://localhost:5050/api/v1/user/`, data);
  return response.data;
});
