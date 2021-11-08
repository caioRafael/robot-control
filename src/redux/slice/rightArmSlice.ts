import { createSlice } from "@reduxjs/toolkit";
import { MovementArm, elbowValue, pulseValue } from "../../models/arm";
import { RootState } from "../store";


const initialState: MovementArm = {
  elbow: {
    id: 1,
    value: "Em Repouso"
  },
  pulse: {
    id: 3,
    value: "Em Repouso"
  },
  movePulse: false
}

export const rightArmSlice = createSlice({
  name: 'rightArm',
  initialState,
  reducers: {
    rightContractElbow: (state) => {
      if (state.elbow.id < 4) {
        if ((state.elbow.id + 1) === 4) {
          state.movePulse = true;
        }
        const val = elbowValue.filter(value => value.id === state.elbow.id + 1);
        state.elbow = val[0];
      }
    },
    rightRelaxElbow: (state) => {
      if (state.elbow.id > 1) {
        if ((state.elbow.id - 1) < 4) {
          state.movePulse = false;
          state.pulse = pulseValue[2];
        }
        const val = elbowValue.filter(value => value.id === state.elbow.id - 1);
        state.elbow = val[0];
      }
    },
    rightIncrasePulse: (state) => {
      if ((state.pulse.id < 7) && state.movePulse) {
        const val = pulseValue.filter(value => value.id === state.pulse.id + 1);
        state.pulse = val[0];
      }
    },

    rightDecrasePulse: (state) => {
      if ((state.pulse.id > 1) && state.movePulse) {
        const val = pulseValue.filter(value => value.id === state.pulse.id - 1);
        state.pulse = val[0];
      }
    },
  }
})

export const {
  rightContractElbow,
  rightRelaxElbow,
  rightIncrasePulse,
  rightDecrasePulse
} = rightArmSlice.actions

export const selectRightArmElbow = (state: RootState) => state.rightArm.elbow;
export const selectRightArmPulse = (state: RootState) => state.rightArm.pulse;
export const selectRightArmMovePulse = (state: RootState) => state.rightArm.movePulse;

// const headReducer = headSlice.reducer

export default rightArmSlice.reducer;