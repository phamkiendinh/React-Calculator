// Components
import Header from "./components/Header/Header"
import Numpad from "./components/Numpad/Numpad"
import Screen from "./components/Screen/Screen"

function App() {
  return (
    <div className="App d-grid gap-5">
      <Header />
      <Screen />
      <Numpad />
    </div>
  );
}

export default App;
