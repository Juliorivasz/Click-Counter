import "./App.css";
import Button from "./components/button";
import Counter from "./components/count";
import click from "./img/click.png";
import { useState } from "react";

function App() {

  const [numclicks, setNumClicks] = useState(0);

  const activeClick = () => {
    setNumClicks(numclicks + 1); 
  }

  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img
        className="logo"
        src={click}
        alt="logo de click"
        />
      </div>
      <div className="container-principal">
        <Counter 
          numclicks={numclicks} />
        <Button 
          text ="Click"
          isclick={true}
          activeClick={activeClick} />
        <Button
          text="Restart"
          isclick={false}
          activeClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
