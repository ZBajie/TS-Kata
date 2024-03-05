import Addition from "./components/Addition/Addition"
import ChangeText from "./components/ChangeText/ChangeText"
import Counter from "./components/Counter/Counter"
import Header from "./components/Header/Header"
import TextToAlert from "./components/TextToAlert/TextToAlert"
import Vehicle from "./components/Vehicle/Vehicle"

function App() {
  return (
    <>
      <Header title="Hello world!" level={12}>
        child <p>test</p>
      </Header>
      <Counter />
      <TextToAlert />
      <ChangeText />
      <Addition />
      <Vehicle />
    </>
  )
}

export default App
