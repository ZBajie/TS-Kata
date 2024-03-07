/*
Skapa komponenten List som har ett textfält, knapp och ul. När användaren klickar på knappen ska en ny punkt läggas till i listan med det som stod i textfältet.

    UTMANING: Töm textfältet när man klickar på knappen och sätt tillbaka fokus på textfältet. Tänk på taborder.
    UTMANING: Lägg till en dropdown med ett antal emojis på djur. När användaren klickar på knappen ska emojin och texten läggas till listan.
    */

import { useRef, useState } from "react"

function List() {
  const listText = useRef<HTMLInputElement>(null)
  const [list, setList] = useState<string[]>([])
  const animal = useRef<HTMLSelectElement>(null)

  const onClick = () => {
    let textString: string = ""
    let animalString: string = ""

    if (listText.current && animal.current) {
      textString = listText.current.value
      animalString = animal.current.value
    }
    if (textString.length > 0) {
      setList((prevList) => [...prevList, textString + animalString])
    }

    if (listText.current && animal.current) {
      listText.current.value = ""
      animal.current.value = ""
      listText.current.focus()
      animal.current.focus()
    }
  }
  return (
    <section className="section-list">
      <input type="text" ref={listText} />
      <select name="" id="" ref={animal}>
        <option value="">Select animal</option>
        <option value="🐓">🐓</option>
        <option value="🐁">🐁</option>
        <option value="🐂">🐂</option>
      </select>
      <button onClick={onClick}>Add text</button>
      <ul>
        {list.map((item, i) => {
          return <li key={i}> {item}</li>
        })}
      </ul>
    </section>
  )
}

export default List
