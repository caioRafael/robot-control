import { configureStore } from '@reduxjs/toolkit'
import headReducer from './slice/headSlice'
import leftArmReducer from './slice/leftArmSlice'
import rightArmReducer from './slice/rightArmSlice'

export const store = configureStore({
  reducer: {
    head: headReducer,
    leftArm: leftArmReducer,
    rightArm: rightArmReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch