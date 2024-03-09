import { useReducer, useRef } from "react"

const ACTION = {
  INITIALTEXT: "Hello",
  ADD: "add",
}

type State = {
  textString: string
}
type Action = {
  type: string
  payload: string | undefined
}

const stringer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION.ADD:
      return { textString: state.textString + action.payload }
    default:
      return state
  }
}

function StringerKata() {
  const [state, dispatch] = useReducer(stringer, {
    textString: ACTION.INITIALTEXT,
  })
  const addText = useRef<HTMLInputElement>(null)
  return (
    <section>
      <h2>StringerKata</h2>
      <p>{state.textString}</p>
      <input type="text" placeholder="Input letter" ref={addText} />
      <button
        onClick={() => {
          dispatch({ type: ACTION.ADD, payload: addText.current?.value })
        }}
      >
        Add
      </button>
    </section>
  )
}

export default StringerKata
