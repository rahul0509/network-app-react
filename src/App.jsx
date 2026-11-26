import "./App.css";
import { useState } from "react";
import { List } from "./components/List";
import { Welcome, WelcomeMessage } from "./components/Welcome";

function App() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          aria-label="Toggle setting"
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="slider round"></span>
      </label>
      <Welcome />
      <WelcomeMessage message="This is a simple React application." />
      <List isFruitList={isChecked} />
    </>
  );
}

export default App;

