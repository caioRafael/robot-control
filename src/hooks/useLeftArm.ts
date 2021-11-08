import {
  selectLeftArmElbow,
  selectLeftArmPulse,
  selectLeftArmMovePulse,
  leftContractElbow,
  leftRelaxElbow,
  leftIncrasePulse,
  leftDecrasePulse
} from './../redux/slice/leftArmSlice';
import { useAppSelector, useAppDispatch } from './../redux/hooks';

type UseLeftArmType = {
  leftContractE: () => void,
  leftRelaxE: () => void,
  leftIncraseP: () => void,
  leftDecraseP: () => void,
  elbow: string,
  pulse: string,
  movePulse: boolean,
}


export function useLeftArm() {
  const elbow = useAppSelector(selectLeftArmElbow);
  const pulse = useAppSelector(selectLeftArmPulse);
  const movePulse = useAppSelector(selectLeftArmMovePulse);
  const dispatch = useAppDispatch();

  const leftContractE = () => {
    dispatch(leftContractElbow())
  }

  const leftRelaxE = () => {
    dispatch(leftRelaxElbow())
  }

  const leftIncraseP = () => {
    dispatch(leftIncrasePulse())
  }

  const leftDecraseP = () => {
    dispatch(leftDecrasePulse())
  }

  return {
    elbow: elbow.value,
    pulse: pulse.value,
    movePulse,
    leftContractE,
    leftRelaxE,
    leftIncraseP,
    leftDecraseP
  } as UseLeftArmType
}