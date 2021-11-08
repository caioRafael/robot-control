import {
  selectHeadRotation,
  selectHeadInclination,
  incraseRotation,
  decraseRotation,
  incraseInclination,
  decraseInclination,
  selectRotateHead
} from './../redux/slice/headSlice';
import { useAppSelector, useAppDispatch } from './../redux/hooks';

type UseHeadType = {
  incraseR: () => void,
  decraseR: () => void,
  incraseI: () => void,
  decraseI: () => void,
  rotation: string,
  inclination: string,
  rotateHead: boolean
}


export function useHead() {
  const rotation = useAppSelector(selectHeadRotation);
  const inclination = useAppSelector(selectHeadInclination);
  const rotateHead = useAppSelector(selectRotateHead);
  const dispatch = useAppDispatch();

  const incraseR = () => {
    dispatch(incraseRotation())
  }

  const decraseR = () => {
    dispatch(decraseRotation())
  }

  const incraseI = () => {
    dispatch(incraseInclination())
  }

  const decraseI = () => {
    dispatch(decraseInclination())
  }

  return {
    incraseR,
    rotation: rotation.value,
    inclination: inclination.value,
    decraseR,
    incraseI,
    decraseI,
    rotateHead
  } as UseHeadType
}