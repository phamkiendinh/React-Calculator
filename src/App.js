// Components
import Header from "./components/Header/Header"
import Numpad from "./components/Numpad/Numpad"
import Screen from "./components/Screen/Screen"
import {useState} from 'react';

function App() {
  const [screenState, setScreenState] = useState(0);
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  return (
    <div className="App d-grid gap-5">
      <Header />
      <Screen screen={{screenState, setScreenState}} result={{result, setResult}}/>
      <Numpad props={{screenState, setScreenState, operator, setOperator, result, setResult, left, setLeft, right, setRight}}/>
    </div>
  );
}

export default App;
