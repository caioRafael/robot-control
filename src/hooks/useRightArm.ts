import {
  selectRightArmElbow,
  selectRightArmPulse,
  selectRightArmMovePulse,
  rightContractElbow,
  rightRelaxElbow,
  rightIncrasePulse,
  rightDecrasePulse
} from './../redux/slice/rightArmSlice';
import { useAppSelector, useAppDispatch } from './../redux/hooks';

type UseRightArmType = {
  rightContractE: () => void,
  rightRelaxE: () => void,
  rightIncraseP: () => void,
  rightDecraseP: () => void,
  rightElbow: string,
  pulse: string,
  movePulse: boolean,
}


export function useRightArm() {
  const elbow = useAppSelector(selectRightArmElbow);
  const pulse = useAppSelector(selectRightArmPulse);
  const movePulse = useAppSelector(selectRightArmMovePulse);
  const dispatch = useAppDispatch();

  const rightContractE = () => {
    console.log("foi");
    dispatch(rightContractElbow())
    console.log(elbow);
  }

  const rightRelaxE = () => {
    dispatch(rightRelaxElbow())
  }

  const rightIncraseP = () => {
    dispatch(rightIncrasePulse())
  }

  const rightDecraseP = () => {
    dispatch(rightDecrasePulse())
  }

  return {
    rightElbow: elbow.value,
    pulse: pulse.value,
    movePulse,
    rightContractE,
    rightRelaxE,
    rightIncraseP,
    rightDecraseP
  } as UseRightArmType
}