import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    reset(state){
      state.count = 0
    },
    incrementAmount(state, {payload: number}: PayloadAction<number>){
      state.count += number
    }
  }
})

export const {increment, decrement, reset, incrementAmount } = countSlice.actions

export default countSlice.reducer