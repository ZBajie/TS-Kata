import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  const handleAddClick = () => setCount(count + 1)
  const handleRemoveClick = () => setCount(count - 1)
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCount(Number(e.target.value))
  }
  return (
    <div>
      <h3>Counter</h3>
      <input type="number" value={count} onChange={handleChange} />
      <p>{count}</p>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  )
}

export default Counter
