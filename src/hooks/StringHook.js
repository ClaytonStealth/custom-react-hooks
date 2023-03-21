import React, { useState } from "react";

const useStringHook = () => {
  const [stringHookState, SetStringHookState] = useState("Silly String");

  return {
    stringHook: stringHookState,
    setStringHook: SetStringHookState,
    customWords: 'Hello for the Custom Hook'
  };
};

export default useStringHook;
