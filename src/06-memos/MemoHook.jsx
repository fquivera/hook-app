import { useMemo, useState } from "react"
import { useCounter } from "../hooks"


const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi vamos...');
  }

  return `${iterationNumber} iteraciones realizadas`

}


export const MemoHook = () => {

    const { counter, increment } = useCounter(4000)

    const [estado, setEstado] = useState(true)

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>Counter: <small>{counter}</small></h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button type="button" className="btn btn-primary" onClick={() => increment()}>+1</button>

      <button type="button" className="btn btn-outline-primary" onClick={() => setEstado(!estado)}>
        Show/Hide {JSON.stringify(estado)}
      </button>
    </>
  )
}
