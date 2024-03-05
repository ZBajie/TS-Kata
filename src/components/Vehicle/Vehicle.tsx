type CarProps = {
  id: number
  name: string
  color: string
  regnumber: string
}
function Vehicle() {
  const cars: CarProps[] = [
    {
      id: 1,
      name: "Volvo",
      color: "Black",
      regnumber: "abc 123",
    },
    {
      id: 2,
      name: "Ford",
      color: "Pink",
      regnumber: "abc 124",
    },
  ]

  return (
    <section className="vehicle-section">
      <h3>Vehicle</h3>
      {cars.map((item, i) => {
        return (
          <article key={i}>
            <h4>{item.name}</h4>
            <p>Color: {item.color}</p>
            <p>Registernumber: {item.regnumber}</p>
          </article>
        )
      })}
    </section>
  )
}
export default Vehicle
