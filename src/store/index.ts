import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './root-reducer'
import { dogsAPISlice } from './dogs/dogAPISlice'


const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsAPISlice.middleware);
  },
})



export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>