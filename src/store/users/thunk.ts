import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { UserType } from "../../type/user";
import { getUserErrorAction, getUserSuccessAction } from "./slice";

// export async function getUserSaga({ payload: id }: PayloadAction<string>) {
//   try {
//     // You can also export the axios call as a function.
//     const response: AxiosResponse<UserType> = await axios.get(`your-server-url:port/api/users/${id}`);
//     getUserSuccessAction(response.data);
//   } catch (error: any) {
//     getUserErrorAction(error);
//   }
// }

export const getUserThunk = createAsyncThunk('users/getUserAction', async () => {
  const response = await axios.get(`your-server-url:port/api/users`);
  return response.data
})