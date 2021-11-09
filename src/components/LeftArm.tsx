import { useLeftArm } from "../hooks/useLeftArm";

import '../styles/components/controls.scss'

export default function LeftArm() {
  const {
    elbow,
    pulse,
    movePulse,
    leftContractE,
    leftRelaxE,
    leftIncraseP,
    leftDecraseP } = useLeftArm();

  return (
    <div className="controlContent">
      <h2>Braço Esquerdo</h2>
      <p> Cotovelo: {elbow}</p>
      <button onClick={leftContractE} >+</button>
      <button onClick={leftRelaxE} >-</button>

      <p> Pulso: {pulse}</p>

      {!movePulse && (
        <>
          <span>Só é possivel mover o pulso quando o cotovelo estiver fortemente contraido</span>
          <br />
        </>
      )}
      <button disabled={!movePulse} onClick={leftIncraseP} >+</button>
      <button disabled={!movePulse} onClick={leftDecraseP} >-</button>
    </div>
  )
}