import { useRightArm } from "../../hooks/useRightArm";

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
    <div>
      <h1>Braço Direito</h1>
      <p> Cotovelo: {rightElbow}</p>
      <button onClick={rightContractE} >+</button>
      <button onClick={rightRelaxE} >-</button>

      <p> Pulso: {pulse}</p>
      <button disabled={!movePulse} onClick={rightIncraseP} >+</button>
      <button disabled={!movePulse} onClick={rightDecraseP} >-</button>
    </div>
  )
}