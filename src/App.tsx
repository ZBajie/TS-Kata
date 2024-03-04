import ChangeText from "./components/ChangeText/ChangeText"
import Counter from "./components/Counter/Counter"
import Header from "./components/Header/Header"
import TextToAlert from "./components/TextToAlert/TextToAlert"

function App() {
  return (
    <>
      <Header title="Hello world!" level={12}>
        child <p>test</p>
      </Header>
      <Counter />
      <TextToAlert />
      <ChangeText />
    </>
  )
}

export default App
