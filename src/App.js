import { useState } from "react";
import "./App.css";
import MyButton from "./MyButton/MyButton";

function App() {
  const [number, setNumber] = useState(0);
  const [rotate, setRotate] = useState('')
  function setNumberMinus(){
    setNumber(number > 0 ? number - 1 : number)
    setRotate('rotateRevert')
  }
  function setNumberPlus(){
    setNumber(number + 1)
    setRotate('rotate')
  }
  return (
    <div className="App">
      <header>
        <h1>Counter</h1>
      </header>
      <div>
        <MyButton
          onClick={setNumberMinus}
          style={{ display: "inline-block" }}
        >
          - MINUS
        </MyButton>
        <h2 className={rotate} style={{ display: "inline-block" }}>{number}</h2>
        <MyButton
          onClick={setNumberPlus}
          style={{ display: "inline-block" }}
        >
          PLUS +
        </MyButton>
      </div>
    </div>
  );
}

export default App;
