import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import useStringHook from "./hooks/StringHook";
function App() {
  const { stringHook, setStringHook, customWords } = useStringHook();
  return (
    <div className='App App-header'>
      <h1>Custom String Hooks</h1>
      <p>{stringHook}</p>
      <input onChange={(e) => setStringHook(e.target.value)} />
      {customWords}
    </div>
  );
}

export default App;
