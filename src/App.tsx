import Addition from "./components/Addition/Addition"
import ChangeText from "./components/ChangeText/ChangeText"
import ColorBox from "./components/ColorBox/ColorBox"
import Counter from "./components/Counter/Counter"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import TextToAlert from "./components/TextToAlert/TextToAlert"
import Vehicle from "./components/Vehicle/Vehicle"

function App() {
  return (
    <>
      <Header title="Hello world!" level={12}>
        child <p>test</p>
      </Header>
      <List />
      <Counter />
      <TextToAlert />
      <ChangeText />
      <Addition />
      <Vehicle />
      <ColorBox />
    </>
  )
}

export default App
