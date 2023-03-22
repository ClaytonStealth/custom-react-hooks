import React, { useState } from "react";

const useStringHook = () => {
  const [stringHookState, SetStringHookState] = useState("Silly String");
  const reverseString = () => {
    SetStringHookState(stringHookState.split("").reverse().join(""));
  };
  const doubleString = () => {
    SetStringHookState(stringHookState + " " + stringHookState);
  };


  return {
    stringHook: stringHookState,
    setStringHook: SetStringHookState,
    customWords: "Hello for the Custom Hook",
    reverseString: reverseString,
    doubleString: doubleString,
  };
};

export default useStringHook;
