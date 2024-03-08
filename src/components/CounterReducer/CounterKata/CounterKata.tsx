import { useReducer } from "react"

const ACTION = {
  ADD: "add",
  REDUCE: "reduce",
  NUMBER: 1,
  RESETNUMBER: 0,
  RESET: "reset",
}

type State = {
  count: number
}
type Action = {
  type: string
  payload: number
}

const kataCounter = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + action.payload }
    case ACTION.REDUCE:
      return { count: state.count - action.payload }
    case ACTION.RESET:
      return { count: (state.count = action.payload) }
    default:
      return state
  }
}

function CounterKata() {
  const [state, dispatch] = useReducer(kataCounter, { count: 0 })

  return (
    <section>
      <h2>CounterKata</h2>
      <input type="number" value={state.count} readOnly />
      <button
        onClick={() => {
          dispatch({ type: ACTION.ADD, payload: ACTION.NUMBER })
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION.REDUCE, payload: ACTION.NUMBER })
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION.RESET, payload: ACTION.RESETNUMBER })
        }}
      >
        Reset
      </button>
    </section>
  )
}

export default CounterKata
