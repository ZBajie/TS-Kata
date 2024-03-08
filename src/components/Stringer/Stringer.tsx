import { useReducer, useRef } from "react"

const ACTION = {
  ADD: "add",
  RESET: "reset",
  INITIALTEXT: "Hello",
  ADDLETTERNUMBER: 1,
  POPLETTER: "pop",
}

type State = {
  textString: string
}
type Action = {
  type: string
  payload: string | undefined
}

const stringer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.ADD:
      return { textString: state.textString + action.payload }
    case ACTION.RESET:
      return { textString: (state.textString = ACTION.INITIALTEXT) }
    case ACTION.POPLETTER:
      return { textString: state.textString.slice(0, -1) }
    default: {
      return state
    }
  }
}

function Stringer() {
  const [state, dispatch] = useReducer(stringer, {
    textString: ACTION.INITIALTEXT,
  })
  const addText = useRef<HTMLInputElement>(null)
  return (
    <section>
      <h2>Stringer</h2>
      <p>{state.textString}</p>
      <input type="text" maxLength={ACTION.ADDLETTERNUMBER} ref={addText} />
      <button
        onClick={() => {
          if (
            addText.current &&
            addText.current.value.length === ACTION.ADDLETTERNUMBER
          ) {
            dispatch({ type: ACTION.ADD, payload: addText.current.value })
            addText.current.value = ""
            addText.current.focus()
          }
        }}
      >
        add text
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION.RESET, payload: "" })
          if (addText.current) {
            addText.current.value = ""
            addText.current.focus()
          }
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION.POPLETTER, payload: "" })
          if (addText.current) {
            addText.current.value = ""
            addText.current.focus()
          }
        }}
      >
        POP last letter
      </button>
    </section>
  )
}

export default Stringer
