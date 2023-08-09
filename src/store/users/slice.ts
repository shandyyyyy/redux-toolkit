import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USERS, UsersStateType, UserType } from '../../type/user'
import { getUserThunk } from './thunk'

const useInitialState = {
  user: {
    data: null,
    isLoading: false,
    errors: ''
  }
}

export const usersSlice = createSlice({
  name: USERS,
  initialState: useInitialState,
  reducers: {
    getUserAction: (state: UsersStateType, {payload: id}: PayloadAction<string>) => {
      state.user.isLoading = true,
      state.user.errors = ''
    },
    getUserSuccessAction: (state: UsersStateType, { payload: user }: PayloadAction<UserType>) => {
      state.user.isLoading = false;
      state.user.data = user;
    },
    getUserErrorAction: (state: UsersStateType, { payload: error }: PayloadAction<string>) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUserThunk.pending, (state) => {
        state.user.isLoading = true
      })
      .addCase(getUserThunk.fulfilled, (state) => {
        state.user.isLoading = false
      })
      .addCase(getUserThunk.rejected, (state) => {
        state.user.isLoading = false
        state.user.errors = 'error'
      })
  }
})

export const {
  getUserAction,
  getUserSuccessAction,
  getUserErrorAction
} = usersSlice.actions

export default usersSlice.reducer