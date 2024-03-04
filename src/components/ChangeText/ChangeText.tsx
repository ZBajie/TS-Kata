import { useState } from "react"

function ChangeText() {
  const [newText, setNewText] = useState("")
  const [text, setText] = useState("")

  const handleOnClick = () => {
    if (newText) {
      setText(newText)
      setNewText("")
    }
  }

  return (
    <section>
      <h3>ChangeText</h3>
      <input
        type="text"
        value={newText}
        onChange={(e) => {
          setNewText(e.currentTarget.value)
        }}
      />
      <button onClick={handleOnClick}>click</button>
      <p>{text}</p>
    </section>
  )
}

export default ChangeText
