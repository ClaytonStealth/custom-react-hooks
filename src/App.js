import "./App.css";
import React, { useState } from "react";
import useStringHook from "./hooks/StringHook";
import useCheckValidEmail from "./hooks/CheckValidEmail";
import useInput from "./hooks/useInput";
function App() {
  const {
    stringHook,
    setStringHook,
    customWords,
    reverseString,
    doubleString,
  } = useStringHook();

  const firstName = useInput("firstname");
  const lastName = useInput("please enter your last name");
  const email = useInput("please enter your email");

  const checkValidEmail = useCheckValidEmail(email.value);
  return (
    <div className='App App-header'>
      <h1>Custom String Hooks</h1>
      {customWords}
      <h2>{stringHook}</h2>
      <button onClick={reverseString}>Reverse IT</button>
      <button onClick={doubleString}>Double IT</button>
      <input onChange={(e) => setStringHook(e.target.value)} />
      <h3>---------------</h3>
      <p>{checkValidEmail ? "true" : "false"}</p>
      <h3>---------------</h3>
      <h3>First Name: {firstName.value}</h3>
      <input {...firstName} />
      <h3>Last Name: {lastName.value}</h3>
      <input {...lastName} />
      <h3>Email: {email.value}</h3>
      <input {...email} />
      <h3>Email is: {checkValidEmail ? "valid" : "not valid"}</h3>
    </div>
  );
}

export default App;
