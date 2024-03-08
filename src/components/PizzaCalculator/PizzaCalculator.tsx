/*
🍕 Gör en komponent PizzaCalculator som har ett inputfält för antal pizzor och en knapp samt p-tagg. Användaren fyller i antal pizzor hen vill ha och klickar på knappen. Priset räknas ut utifrån antal och totalen visas i p-taggen.

    UTMANING: Lägg till tre radioknappar för olika storlekar på pizzorna. Priset räknas ut utifrån storlek och antal.
    UTMANING: Lägg till extra toppings med kryssrutor som påverkar priset.

*/

import { useRef } from "react"

function PizzaCalculator() {
  const pizzaNumber = useRef(null)
  const pizzaSize = useRef(null)
  const cheese = useRef<HTMLInputElement>(null)
  // set to current.checked
  console.log(cheese)
  return (
    <section>
      <h2>PizzaCalculator</h2>
      <input type="number" id="" ref={pizzaNumber} />
      <select name="size" id="" ref={pizzaSize}>
        <option>Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="big">Big</option>
      </select>
      <label htmlFor="cheese">Extra cheese</label>
      <input type="checkbox" id="cheese" />
    </section>
  )
}

export default PizzaCalculator
