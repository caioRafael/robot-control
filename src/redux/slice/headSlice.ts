import { createSlice } from "@reduxjs/toolkit";
import { headInclinationValues, headRotationValues, MovementHead } from "../../models/head";
import { RootState } from "../store";


const initialState: MovementHead = {
  inclination: {
    id: 2,
    value: "Em Repouso"
  },
  rotation: {
    id: 3,
    value: "Em Repouso"
  },
  rotateHead: false
}

export const headSlice = createSlice({
  name: 'head',
  initialState,
  reducers: {
    incraseRotation: (state) => {
      if ((state.rotation.id) < 5) {
        const val = headRotationValues.filter(value => value.id === state.rotation.id + 1);
        state.rotation = val[0]
      }
    },
    decraseRotation: (state) => {
      if (state.rotation.id > 1) {
        const val = headRotationValues.filter(value => value.id === state.rotation.id - 1);
        state.rotation = val[0]
      }
    },
    incraseInclination: (state) => {
      if (state.inclination.id < 3) {
        const val = headInclinationValues.filter(value => value.id === state.inclination.id + 1);
        state.inclination = val[0]
        if (state.inclination.id === 3) {
          state.rotateHead = true
        }
      }
    },
    decraseInclination: (state) => {
      if (state.inclination.id > 1) {
        const vall = headInclinationValues.filter(value => value.id === state.inclination.id - 1);
        state.inclination = vall[0]
        if (state.inclination.id !== 3) {
          state.rotateHead = false
          state.rotation = headRotationValues[2];
        }
      }
    }
  }
})

export const {
  decraseRotation,
  incraseRotation,
  incraseInclination,
  decraseInclination
} = headSlice.actions

export const selectHeadRotation = (state: RootState) => state.head.rotation;
export const selectHeadInclination = (state: RootState) => state.head.inclination;
export const selectRotateHead = (state: RootState) => state.head.rotateHead;

// const headReducer = headSlice.reducer

export default headSlice.reducer;