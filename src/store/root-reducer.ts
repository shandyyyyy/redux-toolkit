import { UsersStateType } from "../type/user"
import countSlice from "./counter/countSlice"
import { dogsAPISlice } from "./dogs/dogAPISlice"
import userReducer from "./users/slice"

export type StateType = {
  users: UsersStateType
}

const rootReducers = {
  users: userReducer,
  count: countSlice,
  [dogsAPISlice.reducerPath]: dogsAPISlice.reducer,
}

export default rootReducers