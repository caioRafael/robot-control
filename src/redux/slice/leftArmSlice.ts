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

export const leftArmSlice = createSlice({
  name: 'leftArm',
  initialState,
  reducers: {
    leftContractElbow: (state) => {
      if (state.elbow.id < 4) {
        if ((state.elbow.id + 1) === 4) {
          state.movePulse = true;
        }
        const val = elbowValue.filter(value => value.id === state.elbow.id + 1);
        state.elbow = val[0];
      }
    },
    leftRelaxElbow: (state) => {
      if (state.elbow.id > 1) {
        if ((state.elbow.id - 1) < 4) {
          state.movePulse = false;
          state.pulse = pulseValue[2];
        }
        const val = elbowValue.filter(value => value.id === state.elbow.id - 1);
        state.elbow = val[0];
      }
    },
    leftIncrasePulse: (state) => {
      if ((state.pulse.id < 7) && state.movePulse) {
        const val = pulseValue.filter(value => value.id === state.pulse.id + 1);
        state.pulse = val[0];
      }
    },

    leftDecrasePulse: (state) => {
      if ((state.pulse.id > 1) && state.movePulse) {
        const val = pulseValue.filter(value => value.id === state.pulse.id - 1);
        state.pulse = val[0];
      }
    },
  }
})

export const {
  leftContractElbow,
  leftRelaxElbow,
  leftIncrasePulse,
  leftDecrasePulse
} = leftArmSlice.actions

export const selectLeftArmElbow = (state: RootState) => state.leftArm.elbow;
export const selectLeftArmPulse = (state: RootState) => state.leftArm.pulse;
export const selectLeftArmMovePulse = (state: RootState) => state.leftArm.movePulse;

// const headReducer = headSlice.reducer

export default leftArmSlice.reducer;