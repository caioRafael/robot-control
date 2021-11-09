import { useHead } from "../hooks/useHead";

import '../styles/components/controls.scss'

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
    <div className="controlContent">
      <h2>Cabeça</h2>
      <p> Inclinação: {inclination}</p>
      <button onClick={decraseI} >+</button>
      <button onClick={incraseI} >-</button>

      <p> Rotação: {rotation}</p>
      {!rotateHead && (
        <>
          <span>Só é possivel alterar a rotação quando a inclinação estiver para Baixo</span>
          <br />
        </>
      )}
      <button disabled={!rotateHead} onClick={incraseR} >+</button>
      <button disabled={!rotateHead} onClick={decraseR} >-</button>
    </div>
  )
}