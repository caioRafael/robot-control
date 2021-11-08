import { useHead } from "../../hooks/useHead";

export default function Head() {
  const {
    incraseR,
    inclination,
    rotation,
    decraseR,
    decraseI,
    incraseI,
    rotateHead
  } = useHead();

  return (
    <div>
      <h1>Cabeça</h1>
      <p> Inclinação: {inclination}</p>
      <button onClick={decraseI} >+</button>
      <button onClick={incraseI} >-</button>

      <p> Rotação: {rotation}</p>
      <button disabled={!rotateHead} onClick={incraseR} >+</button>
      <button disabled={!rotateHead} onClick={decraseR} >-</button>
    </div>
  )
}