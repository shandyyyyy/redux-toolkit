import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserThunk = createAsyncThunk('users/getUserAction', async () => {
  const response = await axios.get(`your-server-url:port/api/users`);
  return response.data
})
