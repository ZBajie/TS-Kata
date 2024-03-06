import { useRef, useState } from "react"

function ColorBox() {
  const colorValue = useRef<HTMLInputElement>(null)
  const [backgroundColor, setBackgroundColor] = useState<string>("")

  const colorFunction = () => {
    const regExColorHex = /^#?[0-9a-fA-F]{6}$/
    if (colorValue.current) {
      if (regExColorHex.test(colorValue.current.value)) {
        setBackgroundColor(colorValue.current.value)
      }
      colorValue.current.value = ""
      colorValue.current.focus()
    }
  }
  return (
    <section className="color-box" style={{ backgroundColor: backgroundColor }}>
      <input
        type="text"
        placeholder="Set color with hexadecimal input"
        ref={colorValue}
      />
      <button onClick={colorFunction}>Set color</button>
    </section>
  )
}

export default ColorBox
