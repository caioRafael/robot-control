import { useLeftArm } from "../../hooks/useLeftArm";

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
    <div>
      <h1>Braço Esquerdo</h1>
      <p> Cotovelo: {elbow}</p>
      <button onClick={leftContractE} >+</button>
      <button onClick={leftRelaxE} >-</button>

      <p> Pulso: {pulse}</p>
      <button disabled={!movePulse} onClick={leftIncraseP} >+</button>
      <button disabled={!movePulse} onClick={leftDecraseP} >-</button>
    </div>
  )
}