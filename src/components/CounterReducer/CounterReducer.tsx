import { useReducer } from "react"

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  NUMBER: 1,
}

type State = { count: number }
type Action = { type: string; payload: number }

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + action.payload }

    case ACTION.REMOVE:
      return { count: state.count - action.payload }

    default:
      return state
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return (
    <section>
      <h2>CounterReducer</h2>
      <input type="number" value={state?.count} readOnly />
      <button
        onClick={() => {
          dispatch({ type: ACTION.ADD, payload: ACTION.NUMBER })
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION.REMOVE, payload: ACTION.NUMBER })
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION.ADD, payload: 11 })
        }}
      >
        Add 11
      </button>
    </section>
  )
}

export default CounterReducer
