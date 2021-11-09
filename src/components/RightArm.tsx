import { useRightArm } from "../hooks/useRightArm";

import '../styles/components/controls.scss'

export default function RightArm() {
  const {
    rightElbow,
    pulse,
    movePulse,
    rightContractE,
    rightRelaxE,
    rightIncraseP,
    rightDecraseP } = useRightArm();

  return (
    <div className="controlContent">
      <h2>Braço Direito</h2>
      <p> Cotovelo: {rightElbow}</p>
      <button onClick={rightContractE} >+</button>
      <button onClick={rightRelaxE} >-</button>

      <p> Pulso: {pulse}</p>

      {!movePulse && (
        <>
          <span>Só é possivel mover o pulso quando o cotovelo estiver fortemente contraido</span>
          <br />
        </>
      )}
      <button disabled={!movePulse} onClick={rightIncraseP} >+</button>
      <button disabled={!movePulse} onClick={rightDecraseP} >-</button>
    </div>
  )
}