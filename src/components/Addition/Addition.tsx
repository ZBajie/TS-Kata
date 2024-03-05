import { useRef, useState } from "react"

function Addition() {
  const firstNumber = useRef<HTMLInputElement>(null)
  const secondNumber = useRef<HTMLInputElement>(null)

  const [numberSum, setNumberSum] = useState(0)

  const onClick = () => {
    if (firstNumber.current && secondNumber.current) {
      setNumberSum(
        parseInt(firstNumber.current.value, 10) +
          parseInt(secondNumber.current.value, 10)
      )
      firstNumber.current.value = "null"
      secondNumber.current.value = "null"
      firstNumber.current.focus()
    }
  }

  return (
    <section>
      <h3>Addition</h3>
      <input type="number" ref={firstNumber} />
      <p>+</p>
      <input type="number" ref={secondNumber} />
      <button onClick={onClick}>sum</button>
      <p>{numberSum}</p>
    </section>
  )
}

export default Addition
